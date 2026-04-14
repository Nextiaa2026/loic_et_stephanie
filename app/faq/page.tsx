import { Cormorant_Garamond } from "next/font/google";
import { PageContainer } from "@/components/home/page-container";
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
        <main className="py-14 sm:py-20">
          <p className="text-center text-[11px] font-medium tracking-[0.4em] text-muted-foreground uppercase">
            Questions fréquentes
          </p>
          <h1
            className={`${playfair.className} mx-auto mt-4 max-w-2xl text-center text-3xl font-semibold tracking-tight text-foreground sm:text-4xl`}
          >
            Tout ce que vous devez savoir
          </h1>
          <div className="mx-auto mt-12 max-w-2xl">
            <FaqAccordion />
          </div>
        </main>
        <SiteFooter />
      </PageContainer>
    </div>
  );
}
