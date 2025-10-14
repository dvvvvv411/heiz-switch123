-- Create storage bucket for branding logos
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'branding-logos',
  'branding-logos',
  true,
  5242880, -- 5MB limit
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml']
);

-- RLS Policies for branding-logos bucket
CREATE POLICY "Public can view branding logos"
ON storage.objects FOR SELECT
USING (bucket_id = 'branding-logos');

CREATE POLICY "Admins can upload branding logos"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'branding-logos' AND
  has_role(auth.uid(), 'admin'::app_role)
);

CREATE POLICY "Admins can update branding logos"
ON storage.objects FOR UPDATE
TO authenticated
USING (
  bucket_id = 'branding-logos' AND
  has_role(auth.uid(), 'admin'::app_role)
);

CREATE POLICY "Admins can delete branding logos"
ON storage.objects FOR DELETE
TO authenticated
USING (
  bucket_id = 'branding-logos' AND
  has_role(auth.uid(), 'admin'::app_role)
);