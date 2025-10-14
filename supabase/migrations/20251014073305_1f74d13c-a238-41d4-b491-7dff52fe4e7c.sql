-- Entferne alle alten Admin-basierten Policies
DROP POLICY IF EXISTS "Admins can create brandings" ON brandings;
DROP POLICY IF EXISTS "Admins can update brandings" ON brandings;
DROP POLICY IF EXISTS "Admins can delete brandings" ON brandings;
DROP POLICY IF EXISTS "Admins can view all brandings" ON brandings;

-- Neue Policies: Alle authentifizierten User können alles mit Brandings machen
CREATE POLICY "Authenticated users can create brandings"
ON brandings FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated users can update brandings"
ON brandings FOR UPDATE
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can delete brandings"
ON brandings FOR DELETE
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can view all brandings"
ON brandings FOR SELECT
TO authenticated
USING (true);