import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { BrandingForm } from './BrandingForm';
import { Plus, Pencil, Trash2, CheckCircle2, Loader2 } from 'lucide-react';
import { useBranding } from '@/contexts/BrandingContext';
import type { Database } from '@/integrations/supabase/types';

type BrandingRow = Database['public']['Tables']['brandings']['Row'];

export function BrandingManager() {
  const [brandings, setBrandings] = useState<BrandingRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [formOpen, setFormOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [activateDialogOpen, setActivateDialogOpen] = useState(false);
  const [selectedBranding, setSelectedBranding] = useState<BrandingRow | null>(null);
  const { toast } = useToast();
  const { refreshBranding } = useBranding();

  const fetchBrandings = async () => {
    try {
      const { data, error } = await supabase
        .from('brandings')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setBrandings(data || []);
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Fehler beim Laden',
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBrandings();
  }, []);

  const handleCreate = () => {
    setSelectedBranding(null);
    setFormOpen(true);
  };

  const handleEdit = (branding: BrandingRow) => {
    setSelectedBranding(branding);
    setFormOpen(true);
  };

  const handleDeleteClick = (branding: BrandingRow) => {
    setSelectedBranding(branding);
    setDeleteDialogOpen(true);
  };

  const handleDelete = async () => {
    if (!selectedBranding) return;

    try {
      const { error } = await supabase
        .from('brandings')
        .delete()
        .eq('id', selectedBranding.id);

      if (error) throw error;

      toast({
        title: 'Branding gelöscht',
        description: 'Das Branding wurde erfolgreich gelöscht.',
      });

      await fetchBrandings();
      await refreshBranding();
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Fehler beim Löschen',
        description: error.message,
      });
    } finally {
      setDeleteDialogOpen(false);
      setSelectedBranding(null);
    }
  };

  const handleActivateClick = (branding: BrandingRow) => {
    setSelectedBranding(branding);
    setActivateDialogOpen(true);
  };

  const handleActivate = async () => {
    if (!selectedBranding) return;

    try {
      const { error } = await supabase
        .from('brandings')
        .update({ is_active: true })
        .eq('id', selectedBranding.id);

      if (error) throw error;

      toast({
        title: 'Branding aktiviert',
        description: 'Das Branding wurde erfolgreich aktiviert.',
      });

      await fetchBrandings();
      await refreshBranding();
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Fehler beim Aktivieren',
        description: error.message,
      });
    } finally {
      setActivateDialogOpen(false);
      setSelectedBranding(null);
    }
  };

  const handleFormSuccess = async () => {
    await fetchBrandings();
    await refreshBranding();
  };

  const activeCount = brandings.filter((b) => b.is_active).length;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Branding-Verwaltung</CardTitle>
            <CardDescription>
              Verwalten Sie Ihre Brandings. Nur ein Branding kann aktiv sein.
            </CardDescription>
          </div>
          <Button onClick={handleCreate}>
            <Plus className="mr-2 h-4 w-4" />
            Neues Branding
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {activeCount === 0 && (
          <div className="mb-4 p-4 bg-warning/10 border border-warning rounded-lg">
            <p className="text-sm text-warning-foreground">
              ⚠️ Kein aktives Branding - Bitte aktivieren Sie ein Branding
            </p>
          </div>
        )}

        {loading ? (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        ) : brandings.length === 0 ? (
          <p className="text-center text-muted-foreground py-8">
            Noch keine Brandings vorhanden. Erstellen Sie Ihr erstes Branding.
          </p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Firmenname</TableHead>
                <TableHead>E-Mail</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Aktionen</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {brandings.map((branding) => (
                <TableRow key={branding.id}>
                  <TableCell className="font-medium">{branding.name}</TableCell>
                  <TableCell>{branding.company_name}</TableCell>
                  <TableCell>{branding.email}</TableCell>
                  <TableCell>
                    {branding.is_active ? (
                      <Badge className="bg-success text-success-foreground">
                        <CheckCircle2 className="mr-1 h-3 w-3" />
                        Aktiv
                      </Badge>
                    ) : (
                      <Badge variant="outline">Inaktiv</Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      {!branding.is_active && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleActivateClick(branding)}
                        >
                          Aktivieren
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEdit(branding)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteClick(branding)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>

      <BrandingForm
        open={formOpen}
        onOpenChange={setFormOpen}
        onSuccess={handleFormSuccess}
        initialData={
          selectedBranding
            ? {
                id: selectedBranding.id,
                name: selectedBranding.name,
                logo_url: selectedBranding.logo_url,
                company_name: selectedBranding.company_name,
                company_short_name: selectedBranding.company_short_name,
                address_street: selectedBranding.address_street,
                address_city: selectedBranding.address_city,
                phone: selectedBranding.phone,
                email: selectedBranding.email,
                managing_director: selectedBranding.managing_director,
                checkout_domain: selectedBranding.checkout_domain,
                shop_id: selectedBranding.shop_id,
              }
            : undefined
        }
      />

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Branding löschen?</AlertDialogTitle>
            <AlertDialogDescription>
              Möchten Sie das Branding "{selectedBranding?.name}" wirklich löschen? Diese Aktion
              kann nicht rückgängig gemacht werden.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Abbrechen</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>Löschen</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={activateDialogOpen} onOpenChange={setActivateDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Branding aktivieren?</AlertDialogTitle>
            <AlertDialogDescription>
              Möchten Sie das Branding "{selectedBranding?.name}" aktivieren? Das aktuell aktive
              Branding wird automatisch deaktiviert.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Abbrechen</AlertDialogCancel>
            <AlertDialogAction onClick={handleActivate}>Aktivieren</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  );
}
