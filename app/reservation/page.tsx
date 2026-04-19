import { Cormorant_Garamond } from "next/font/google";
import Image from "next/image";
import { PageContainer } from "@/components/home/page-container";
import { PageHeroVertical } from "@/components/home/page-hero-vertical";
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
          <PageHeroVertical
            title="Réservation"
            description="Confirmez votre présence et rejoignez-nous pour célébrer ce grand jour."
            imageSrc="/jl_2026_05.jpeg"
            serifClassName={playfair.className}
          />

          {/* Hero image */}
          <div className="my-10 mx-auto w-full max-w-5xl overflow-hidden">
            <div className="relative h-64 w-full sm:h-96 md:h-112">
              <Image
                src="/jl_2026_06.jpeg"
                alt="Stéphanie et Loïc"
                fill
                className="object-cover object-[center_35%]"
              />
              <div className="absolute inset-0 bg-neutral-950/20" />
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
            <RsvpForm />
          </div>
        </main>
        <SiteFooter />
      </PageContainer>
    </div>
  );
}
