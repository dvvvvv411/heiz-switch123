import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';
import type { Database } from '@/integrations/supabase/types';

type BrandingRow = Database['public']['Tables']['brandings']['Row'];

interface BrandingData {
  id: string;
  name: string;
  logoUrl: string;
  companyName: string;
  companyShortName: string;
  addressStreet: string;
  addressCity: string;
  phone: string;
  email: string;
  managingDirector: string;
  checkoutDomain: string;
  shopId: string;
}

interface BrandingContextType {
  branding: BrandingData | null;
  loading: boolean;
  refreshBranding: () => Promise<void>;
}

const BrandingContext = createContext<BrandingContextType | undefined>(undefined);

// Default fallback values
const DEFAULT_BRANDING: BrandingData = {
  id: '',
  name: 'HILL Heizöl',
  logoUrl: '/lovable-uploads/a242d3e4-8d70-4fc0-8cab-947043c42574.png',
  companyName: 'HILL-Clear Projects GmbH',
  companyShortName: 'HILL',
  addressStreet: 'Rottmannstr. 22a',
  addressCity: '80333 München',
  phone: '089 244 189 180',
  email: 'info@hill-heizoel.de',
  managingDirector: 'Michael Hillmann',
  checkoutDomain: 'hill-heizoel.de',
  shopId: '46f10e96-ab3a-4f6d-a31d-0414685fb7c1',
};

function mapBrandingRow(row: BrandingRow): BrandingData {
  return {
    id: row.id,
    name: row.name,
    logoUrl: row.logo_url,
    companyName: row.company_name,
    companyShortName: row.company_short_name,
    addressStreet: row.address_street,
    addressCity: row.address_city,
    phone: row.phone,
    email: row.email,
    managingDirector: row.managing_director,
    checkoutDomain: row.checkout_domain,
    shopId: row.shop_id,
  };
}

export function BrandingProvider({ children }: { children: ReactNode }) {
  const [branding, setBranding] = useState<BrandingData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchActiveBranding = async () => {
    try {
      const { data, error } = await supabase
        .from('brandings')
        .select('*')
        .eq('is_active', true)
        .maybeSingle();

      if (error) throw error;

      if (data) {
        setBranding(mapBrandingRow(data));
      } else {
        setBranding(DEFAULT_BRANDING);
      }
    } catch (error) {
      console.error('Error fetching branding:', error);
      setBranding(DEFAULT_BRANDING);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchActiveBranding();
  }, []);

  return (
    <BrandingContext.Provider
      value={{
        branding,
        loading,
        refreshBranding: fetchActiveBranding,
      }}
    >
      {children}
    </BrandingContext.Provider>
  );
}

export function useBranding() {
  const context = useContext(BrandingContext);
  if (context === undefined) {
    throw new Error('useBranding must be used within a BrandingProvider');
  }
  return context;
}
