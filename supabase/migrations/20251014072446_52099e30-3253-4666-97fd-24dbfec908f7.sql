-- Entferne die alten Admin-basierten Policies
DROP POLICY IF EXISTS "Admins can upload branding logos" ON storage.objects;
DROP POLICY IF EXISTS "Admins can update branding logos" ON storage.objects;
DROP POLICY IF EXISTS "Admins can delete branding logos" ON storage.objects;

-- Erstelle neue Policies für alle authentifizierten User
CREATE POLICY "Authenticated users can upload branding logos"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'branding-logos');

CREATE POLICY "Authenticated users can update branding logos"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'branding-logos');

CREATE POLICY "Authenticated users can delete branding logos"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'branding-logos');