-- Create brandings table
CREATE TABLE public.brandings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  
  -- Logo
  logo_url TEXT NOT NULL,
  
  -- Kontaktinformationen
  company_name TEXT NOT NULL,
  company_short_name TEXT NOT NULL,
  address_street TEXT NOT NULL,
  address_city TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  managing_director TEXT NOT NULL,
  
  -- Preisrechner Einstellungen
  checkout_domain TEXT NOT NULL,
  shop_id UUID NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.brandings ENABLE ROW LEVEL SECURITY;

-- Public can read active branding
CREATE POLICY "Anyone can view active branding" 
ON public.brandings 
FOR SELECT 
USING (is_active = true);

-- Admins can view all brandings
CREATE POLICY "Admins can view all brandings" 
ON public.brandings 
FOR SELECT 
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- Admins can create brandings
CREATE POLICY "Admins can create brandings" 
ON public.brandings 
FOR INSERT 
WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

-- Admins can update brandings
CREATE POLICY "Admins can update brandings" 
ON public.brandings 
FOR UPDATE 
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- Admins can delete brandings
CREATE POLICY "Admins can delete brandings" 
ON public.brandings 
FOR DELETE 
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- Trigger function: Ensure only one branding is active at a time
CREATE OR REPLACE FUNCTION public.ensure_single_active_branding()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NEW.is_active = true THEN
    UPDATE public.brandings 
    SET is_active = false 
    WHERE id != NEW.id AND is_active = true;
  END IF;
  RETURN NEW;
END;
$$;

-- Create trigger for ensuring single active branding
CREATE TRIGGER ensure_single_active_branding_trigger
BEFORE INSERT OR UPDATE ON public.brandings
FOR EACH ROW
EXECUTE FUNCTION public.ensure_single_active_branding();

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_brandings_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_brandings_updated_at
BEFORE UPDATE ON public.brandings
FOR EACH ROW
EXECUTE FUNCTION public.update_brandings_updated_at();

-- Insert initial HILL branding
INSERT INTO public.brandings (
  name,
  is_active,
  logo_url,
  company_name,
  company_short_name,
  address_street,
  address_city,
  phone,
  email,
  managing_director,
  checkout_domain,
  shop_id
) VALUES (
  'HILL Heizöl',
  true,
  '/lovable-uploads/a242d3e4-8d70-4fc0-8cab-947043c42574.png',
  'HILL-Clear Projects GmbH',
  'HILL',
  'Rottmannstr. 22a',
  '80333 München',
  '089 244 189 180',
  'info@hill-heizoel.de',
  'Michael Hillmann',
  'hill-heizoel.de',
  '46f10e96-ab3a-4f6d-a31d-0414685fb7c1'
);