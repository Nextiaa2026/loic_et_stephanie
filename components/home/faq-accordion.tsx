"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Quand et où aura lieu le mariage ?",
    a: "Le mariage traditionnel aura lieu le samedi 26 juillet 2026 à La Vallée de Bana. Le mariage religieux se tiendra le samedi 2 août 2026 au Monastère des bénédictins, Mont Febe — Yaoundé.",
  },
  {
    q: "Comment confirmer ma présence ?",
    a: "Rendez-vous sur la page RSVP et remplissez le formulaire en ligne. Merci de confirmer avant le 1er juin 2026.",
  },
  {
    q: "Y a-t-il un code vestimentaire ?",
    a: "Oui, nous vous encourageons à porter des tenues élégantes. Pour le mariage traditionnel, les tenues africaines sont les bienvenues. Pour le mariage religieux, une tenue formelle est recommandée.",
  },
  {
    q: "Des hébergements sont-ils disponibles à proximité ?",
    a: "Oui, nous avons négocié des tarifs préférentiels dans plusieurs hôtels à proximité. Les détails seront communiqués prochainement dans la section Hébergement.",
  },
  {
    q: "Puis-je venir avec des enfants ?",
    a: "Les enfants sont les bienvenus à la cérémonie. Merci de le préciser lors de votre confirmation de présence.",
  },
  {
    q: "Comment se rendre sur les lieux ?",
    a: "Les informations de transport et d'accès seront disponibles dans la section Hébergement & Voyage. N'hésitez pas à nous contacter pour toute question.",
  },
  {
    q: "Y a-t-il une liste de cadeaux ?",
    a: "Oui, une liste de cadeaux et une cagnotte lune de miel seront disponibles prochainement dans la section Cadeaux.",
  },
];

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-border">
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            className="flex w-full items-center justify-between py-5 text-left text-sm font-medium text-foreground hover:text-pink-500 transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span>{faq.q}</span>
            <ChevronDown
              className={cn(
                "size-4 shrink-0 text-muted-foreground transition-transform duration-200",
                open === i && "rotate-180",
              )}
            />
          </button>
          {open === i && (
            <p className="pb-5 text-sm leading-relaxed text-muted-foreground">
              {faq.a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
