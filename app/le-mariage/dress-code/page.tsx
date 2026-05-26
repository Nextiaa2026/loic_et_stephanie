import { Cormorant_Garamond } from "next/font/google";
import { PageContainer } from "@/components/home/page-container";
import { PageHeroVertical } from "@/components/home/page-hero-vertical";
import { SiteHeader } from "@/components/home/site-header";
import { SiteFooter } from "@/components/home/site-footer";
import { DressCodeEventCard } from "@/components/dress-code/dress-code-event-card";
import { DRESS_CODE_EVENTS } from "@/lib/dress-code";

const playfair = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export default function DressCodePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageContainer>
        <SiteHeader serifClassName={playfair.className} />
        <main>
          <PageHeroVertical
            title="Dress Code"
            description="Chaque cérémonie a son ambiance. Voici les tenues recommandées pour célébrer avec nous dans l'esprit de chaque moment."
            imageSrc="/jl_2026_02.jpeg"
            serifClassName={playfair.className}
          />

          <section className="space-y-12 pb-14 sm:pb-20">
            {DRESS_CODE_EVENTS.map((dressCode) => (
              <DressCodeEventCard
                key={dressCode.eventLabel}
                dressCode={dressCode}
                serifClassName={playfair.className}
              />
            ))}
          </section>
        </main>
        <SiteFooter />
      </PageContainer>
    </div>
  );
}
