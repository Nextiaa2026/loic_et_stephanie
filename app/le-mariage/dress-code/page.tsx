import { Playfair_Display } from "next/font/google";
import { Check, X } from "lucide-react";
import { PageContainer } from "@/components/home/page-container";
import { PageHeroVertical } from "@/components/home/page-hero-vertical";
import { SiteHeader } from "@/components/home/site-header";
import { SiteFooter } from "@/components/home/site-footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const PINTEREST_DRESS_CODE_URL = "https://pin.it/fE30hrBiY";

const dressCodes = [
  {
    event: "Mariage Traditionnel",
    date: "05 août 2026",
    theme: "Tenue traditionnelle",
    color: "Blanc, noir, rose, orangé",
    description:
      "Nous vous invitons à revêtir vos plus belles tenues traditionnelles. Kabba, boubou, wrapper ou tenue pagne — honorez vos origines avec élégance, de préférence dans les couleurs de notre mariage.",
    dos: [
      "Tenues traditionnelles (kabba, boubou, wrapper)",
      "Couleurs de notre palette : Blanc, noir, rose ou orangé",
      "Accessoires traditionnels (bijoux, foulards)",
    ],
    donts: [
      "Tenues trop décontractées (jeans, baskets)",
    ],
  },
  {
    event: "Mariage Religieux",
    date: "07 août 2026",
    theme: "Élégance classique",
    color: "Blanc, noir, rose, orangé",
    description:
      "Pour la cérémonie à l'église et la soirée, le dress code est chic et élégant. Veuillez choisir vos tenues en respectant notre palette de couleurs.",
    dos: [
      "Costume élégant pour les hommes",
      "Robe chic ou tailleur pour les femmes",
      "Couleurs : Blanc, noir, rose ou orangé",
    ],
    donts: [
      "Tenues décontractées (jeans, t-shirts, baskets)",
      "Couleurs en dehors de la palette (dans la mesure du possible)",
    ],
  },
];

export default function DressCodePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageContainer>
        <SiteHeader serifClassName={playfair.className} />
        <main>
          <PageHeroVertical
            title="Dress Code"
            description="Chaque cérémonie a son ambiance. Voici les tenues recommandées pour chacun de nos événements."
            imageSrc="/jl_2026_02.jpeg"
            serifClassName={playfair.className}
          />

          <section className="mx-auto mb-10 max-w-3xl rounded-2xl border border-border/60 bg-card px-6 py-6 text-center sm:px-8">
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Besoin d'inspiration pour vos tenues ? Consultez notre tableau
              Pinterest dédié au dress code pour découvrir des idées de styles,
              matières et coupes dans l'esprit de la célébration.
            </p>
            <a
              href={PINTEREST_DRESS_CODE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex text-sm font-medium text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:text-primary/85 sm:text-base"
            >
              Voir le tableau Pinterest dress code
            </a>
          </section>

          {/* Dress codes */}
          <section className="space-y-12 pb-14 sm:pb-20">
            {dressCodes.map((dc, i) => (
              <Card
                key={i}
                className="rounded-2xl border-border/60 shadow-none"
              >
                <CardHeader className="px-6 pt-8 sm:px-10 sm:pt-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                    {dc.event} — {dc.date}
                  </p>
                  <CardTitle
                    className={`${playfair.className} mt-2 text-2xl font-semibold tracking-tight sm:text-3xl`}
                  >
                    {dc.theme}
                  </CardTitle>
                  <CardDescription className="mt-1 text-sm">
                    Palette : {dc.color}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 px-6 pb-8 sm:px-10 sm:pb-10">
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {dc.description}
                  </p>

                  <div className="grid gap-6 sm:grid-cols-2">
                    {/* Do's */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-foreground">
                        ✓ À privilégier
                      </h4>
                      <ul className="space-y-2">
                        {dc.dos.map((d, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <Check className="mt-0.5 size-4 shrink-0 text-green-600" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Don'ts */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-foreground">
                        ✗ À éviter
                      </h4>
                      <ul className="space-y-2">
                        {dc.donts.map((d, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <X className="mt-0.5 size-4 shrink-0 text-red-500" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </section>
        </main>
        <SiteFooter />
      </PageContainer>
    </div>
  );
}
