import { Cormorant_Garamond } from "next/font/google";
import { PageContainer } from "@/components/home/page-container";
import { PageHeroVertical } from "@/components/home/page-hero-vertical";
import { SiteHeader } from "@/components/home/site-header";
import { SiteFooter } from "@/components/home/site-footer";
import { FaqAccordion } from "@/components/home/faq-accordion";

const playfair = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageContainer>
        <SiteHeader serifClassName={playfair.className} />
        <main className="pb-14 sm:pb-20">
          <PageHeroVertical
            title="Questions fréquentes"
            description="Tout ce que vous devez savoir pour préparer votre venue."
            imageSrc="/jl_2026_01.jpeg"
            serifClassName={playfair.className}
          />
          <div className="mx-auto mt-12 max-w-2xl">
            <FaqAccordion />
          </div>
        </main>
        <SiteFooter />
      </PageContainer>
    </div>
  );
}
