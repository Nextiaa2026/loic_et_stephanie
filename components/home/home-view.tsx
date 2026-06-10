import { CivilEvent } from "./civil-event";
import { EventHighlight } from "./event-highlight";
import { EventReligious } from "./event-religious";
import { GallerySection } from "./gallery-section";
import { HeroPortrait } from "./hero-portrait";
import { HomeCountdown } from "./home-countdown";
import { InviteHero } from "./invite-hero";
import { PageContainer } from "./page-container";
import { PracticalInfo } from "./practical-info";
import { ScrollToTop } from "./scroll-to-top";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { StoryWithMedia } from "./story-with-media";
import { TestimonialsSection } from "./testimonials-section";
import { WelcomeSplit } from "./welcome-split";

type HomeViewProps = {
  serifClassName: string;
};

export function HomeView({ serifClassName }: HomeViewProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageContainer>
        <SiteHeader serifClassName={serifClassName} />
        <main>
          <HeroPortrait serifClassName={serifClassName} />
          <WelcomeSplit serifClassName={serifClassName} />
          <HomeCountdown serifClassName={serifClassName} />
          <EventHighlight serifClassName={serifClassName} />
          <CivilEvent serifClassName={serifClassName} />
          <EventReligious serifClassName={serifClassName} />
          <StoryWithMedia serifClassName={serifClassName} />
          <GallerySection serifClassName={serifClassName} />
          <PracticalInfo serifClassName={serifClassName} />
          <TestimonialsSection serifClassName={serifClassName} />
          <InviteHero serifClassName={serifClassName} />
        </main>
        <SiteFooter />
      </PageContainer>
      <ScrollToTop />
    </div>
  );
}
