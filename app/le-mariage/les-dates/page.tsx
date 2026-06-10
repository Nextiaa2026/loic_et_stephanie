import { Cormorant_Garamond } from "next/font/google";
import { PageContainer } from "@/components/home/page-container";
import { PageHeroVertical } from "@/components/home/page-hero-vertical";
import { SiteHeader } from "@/components/home/site-header";
import { SiteFooter } from "@/components/home/site-footer";
import { CivilEvent } from "@/components/home/civil-event";
import { EventReligious } from "@/components/home/event-religious";
import { EventHighlight } from "@/components/home/event-highlight";
import { TraditionalProgramTimeline } from "@/components/home/traditional-program-timeline";

const playfair = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export default function LesDatesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageContainer>
        <SiteHeader serifClassName={playfair.className} />
        <main>
          <PageHeroVertical
            title="Les Dates"
            description="Trois temps forts pour célébrer notre union : tradition, civil et religieux. Voici les informations à retenir."
            imageSrc="/jl_2026_04.jpeg"
            serifClassName={playfair.className}
          />

          <EventHighlight serifClassName={playfair.className} />
          <CivilEvent serifClassName={playfair.className} />
          <EventReligious serifClassName={playfair.className} />

          <TraditionalProgramTimeline serifClassName={playfair.className} />

          {/* Events */}
        </main>
        <SiteFooter />
      </PageContainer>
    </div>
  );
}
