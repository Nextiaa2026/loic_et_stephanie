import { Playfair_Display } from "next/font/google";
import { Check, X } from "lucide-react";
import { PageContainer } from "@/components/home/page-container";
import { SiteHeader } from "@/components/home/site-header";
import { SiteFooter } from "@/components/home/site-footer";
import { Separator } from "@/components/ui/separator";
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

const dressCodes = [
  {
    event: "Mariage Traditionnel",
    date: "26 juillet 2026",
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
    date: "02 août 2026",
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
          {/* Hero */}
          <section className="py-14 text-center sm:py-20">
            <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-muted-foreground">
              Le Mariage
            </p>
            <h1
              className={`${playfair.className} mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl`}
            >
              Dress Code
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground">
              Chaque cérémonie a son ambiance. Voici les tenues
              recommandées pour chacun de nos événements.
            </p>
            <Separator className="mx-auto mt-8 max-w-24" />
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
