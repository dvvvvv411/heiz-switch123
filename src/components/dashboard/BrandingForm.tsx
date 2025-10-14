import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { LogoUpload } from './LogoUpload';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const brandingFormSchema = z.object({
  name: z.string().min(1, 'Name ist erforderlich').max(100),
  logo_url: z.string().min(1, 'Logo ist erforderlich').max(500),
  company_name: z.string().min(1, 'Firmenname ist erforderlich').max(200),
  company_short_name: z.string().min(1, 'Kurzname ist erforderlich').max(50),
  address_street: z.string().min(1, 'Straße ist erforderlich').max(200),
  address_city: z.string().min(1, 'Stadt ist erforderlich').max(100),
  phone: z.string().min(1, 'Telefon ist erforderlich').max(50),
  email: z.string().email('Ungültige E-Mail-Adresse').max(255),
  managing_director: z.string().min(1, 'Geschäftsführer ist erforderlich').max(200),
  checkout_domain: z.string().min(1, 'Checkout-Domain ist erforderlich').max(255),
  shop_id: z.string().uuid('Ungültige Shop-ID'),
});

type BrandingFormValues = z.infer<typeof brandingFormSchema>;

interface BrandingFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
  initialData?: BrandingFormValues & { id?: string };
}

export function BrandingForm({ open, onOpenChange, onSuccess, initialData }: BrandingFormProps) {
  const { toast } = useToast();
  
  const form = useForm<BrandingFormValues>({
    resolver: zodResolver(brandingFormSchema),
    defaultValues: initialData || {
      name: '',
      logo_url: '',
      company_name: '',
      company_short_name: '',
      address_street: '',
      address_city: '',
      phone: '',
      email: '',
      managing_director: '',
      checkout_domain: '',
      shop_id: '',
    },
  });

  const onSubmit = async (values: BrandingFormValues) => {
    try {
      if (initialData?.id) {
        const { error } = await supabase
          .from('brandings')
          .update({
            name: values.name,
            logo_url: values.logo_url,
            company_name: values.company_name,
            company_short_name: values.company_short_name,
            address_street: values.address_street,
            address_city: values.address_city,
            phone: values.phone,
            email: values.email,
            managing_director: values.managing_director,
            checkout_domain: values.checkout_domain,
            shop_id: values.shop_id,
          })
          .eq('id', initialData.id);

        if (error) throw error;

        toast({
          title: 'Branding aktualisiert',
          description: 'Das Branding wurde erfolgreich aktualisiert.',
        });
      } else {
        const { error } = await supabase
          .from('brandings')
          .insert([{
            name: values.name,
            logo_url: values.logo_url,
            company_name: values.company_name,
            company_short_name: values.company_short_name,
            address_street: values.address_street,
            address_city: values.address_city,
            phone: values.phone,
            email: values.email,
            managing_director: values.managing_director,
            checkout_domain: values.checkout_domain,
            shop_id: values.shop_id,
          }]);

        if (error) throw error;

        toast({
          title: 'Branding erstellt',
          description: 'Das neue Branding wurde erfolgreich erstellt.',
        });
      }

      form.reset();
      onOpenChange(false);
      onSuccess();
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Fehler',
        description: error.message || 'Beim Speichern ist ein Fehler aufgetreten.',
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {initialData?.id ? 'Branding bearbeiten' : 'Neues Branding erstellen'}
          </DialogTitle>
          <DialogDescription>
            Geben Sie die Informationen für das Branding ein.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="z.B. HILL Heizöl" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="logo_url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Logo</FormLabel>
                  <FormControl>
                    <LogoUpload
                      currentLogoUrl={field.value}
                      onUploadComplete={(url) => {
                        field.onChange(url);
                      }}
                      onUrlChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="company_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Firmenname</FormLabel>
                    <FormControl>
                      <Input placeholder="z.B. HILL-Clear Projects GmbH" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="company_short_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Kurzname</FormLabel>
                    <FormControl>
                      <Input placeholder="z.B. HILL" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="address_street"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Straße</FormLabel>
                    <FormControl>
                      <Input placeholder="z.B. Rottmannstr. 22a" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="address_city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Stadt</FormLabel>
                    <FormControl>
                      <Input placeholder="z.B. 80333 München" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefon</FormLabel>
                    <FormControl>
                      <Input placeholder="z.B. 089 244 189 180" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-Mail</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="z.B. info@hill-heizoel.de" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="managing_director"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Geschäftsführer</FormLabel>
                  <FormControl>
                    <Input placeholder="z.B. Michael Hillmann" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="checkout_domain"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Checkout-Domain</FormLabel>
                    <FormControl>
                      <Input placeholder="z.B. hill-heizoel.de" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="shop_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Shop-ID</FormLabel>
                    <FormControl>
                      <Input placeholder="UUID" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
              >
                Abbrechen
              </Button>
              <Button type="submit" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                {initialData?.id ? 'Aktualisieren' : 'Erstellen'}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
