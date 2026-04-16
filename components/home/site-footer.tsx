import { SITE_CONTACT_EMAIL } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 py-8">
      <div className="mx-auto flex max-w-md flex-col items-center gap-2 px-4 text-center font-sans text-xs text-muted-foreground">
        <p>
          Contact :{" "}
          <a
            href={`mailto:${SITE_CONTACT_EMAIL}`}
            className="font-medium text-primary underline decoration-primary/40 underline-offset-2 transition-colors hover:text-primary/85"
          >
            {SITE_CONTACT_EMAIL}
          </a>
        </p>
        <p>
          Droit d&apos;auteur &copy; {new Date().getFullYear()} Loïc et Stéphanie
        </p>
      </div>
    </footer>
  );
}
