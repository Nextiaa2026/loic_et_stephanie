import { Cormorant_Garamond } from "next/font/google";
import Image from "next/image";
import { PageContainer } from "@/components/home/page-container";
import { SiteHeader } from "@/components/home/site-header";
import { SiteFooter } from "@/components/home/site-footer";
import { RsvpForm } from "@/components/home/rsvp-form";

const playfair = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export default function ReservationPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageContainer>
        <SiteHeader serifClassName={playfair.className} />
        <main>
          {/* Hero image */}
          <div className="my-8 overflow-hidden rounded-2xl">
            <div className="relative h-64 w-full sm:h-80">
              <Image
                src="/ac06bcad-4e7b-4dca-8cf2-74d10bcc5018.jpeg"
                alt="Loïc et Stéphanie"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-neutral-950/40" />
            </div>
          </div>

          {/* Two-col layout: heading left, form right */}
          <div className="grid gap-12 pb-20 md:grid-cols-2 md:gap-16 md:items-start">
            <div>
              <h1
                className={`${playfair.className} text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem]`}
              >
                Confirmez Votre Présence En Remplissant Ce Formulaire
              </h1>
            </div>
            <RsvpForm serifClassName={playfair.className} />
          </div>
        </main>
        <SiteFooter />
      </PageContainer>
    </div>
  );
}
