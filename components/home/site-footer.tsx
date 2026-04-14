export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 py-8">
      <p className="text-center font-sans text-xs text-muted-foreground">
        Droit d&apos;auteur &copy; {new Date().getFullYear()} Loïc et Stéphanie
      </p>
    </footer>
  );
}
