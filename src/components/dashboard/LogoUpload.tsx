import { useState, useRef } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface LogoUploadProps {
  currentLogoUrl?: string;
  onUploadComplete: (url: string) => void;
  onUrlChange?: (url: string) => void;
}

export function LogoUpload({ currentLogoUrl, onUploadComplete, onUrlChange }: LogoUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [previewUrl, setPreviewUrl] = useState<string | null>(currentLogoUrl || null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const validateFile = (file: File): string | null => {
    const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml'];
    if (!validTypes.includes(file.type)) {
      return 'Ungültiges Format. Erlaubt: JPEG, PNG, WebP, SVG';
    }
    
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return 'Datei zu groß. Maximum: 5MB';
    }
    
    return null;
  };

  const uploadFile = async (file: File) => {
    const error = validateFile(file);
    if (error) {
      toast({
        title: 'Upload fehlgeschlagen',
        description: error,
        variant: 'destructive',
      });
      return;
    }

    setUploading(true);
    setUploadProgress(0);

    try {
      // Generate unique filename
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = fileName;

      // Simulate progress (Supabase doesn't provide upload progress)
      const progressInterval = setInterval(() => {
        setUploadProgress((prev) => Math.min(prev + 10, 90));
      }, 100);

      const { data, error: uploadError } = await supabase.storage
        .from('branding-logos')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false,
        });

      clearInterval(progressInterval);
      setUploadProgress(100);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('branding-logos')
        .getPublicUrl(data.path);

      setPreviewUrl(publicUrl);
      onUploadComplete(publicUrl);

      toast({
        title: 'Upload erfolgreich',
        description: 'Logo wurde hochgeladen',
      });
    } catch (error) {
      console.error('Upload error:', error);
      toast({
        title: 'Upload fehlgeschlagen',
        description: 'Bitte versuchen Sie es erneut',
        variant: 'destructive',
      });
    } finally {
      setUploading(false);
      setUploadProgress(0);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      uploadFile(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      uploadFile(files[0]);
    }
  };

  const handleRemove = () => {
    setPreviewUrl(null);
    if (onUrlChange) {
      onUrlChange('');
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-4">
      {previewUrl ? (
        <div className="relative border rounded-lg p-4 bg-muted/50">
          <div className="flex items-center gap-4">
            <img
              src={previewUrl}
              alt="Logo Preview"
              className="h-16 w-auto object-contain"
            />
            <div className="flex-1">
              <p className="text-sm font-medium">Logo hochgeladen</p>
              <p className="text-xs text-muted-foreground">
                {previewUrl.split('/').pop()}
              </p>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={handleRemove}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ) : (
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            isDragging
              ? 'border-primary bg-primary/5'
              : 'border-muted-foreground/25 hover:border-muted-foreground/50'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/svg+xml"
            onChange={handleFileSelect}
            className="hidden"
          />
          
          <div className="space-y-4">
            <div className="flex justify-center">
              {uploading ? (
                <ImageIcon className="h-12 w-12 text-muted-foreground animate-pulse" />
              ) : (
                <Upload className="h-12 w-12 text-muted-foreground" />
              )}
            </div>
            
            {uploading ? (
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Wird hochgeladen...</p>
                <Progress value={uploadProgress} className="w-full" />
              </div>
            ) : (
              <>
                <div>
                  <p className="text-sm font-medium">
                    Logo hierher ziehen oder{' '}
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="text-primary hover:underline"
                    >
                      durchsuchen
                    </button>
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    JPEG, PNG, WebP oder SVG (max. 5MB)
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Empfohlen: 400x100px
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
