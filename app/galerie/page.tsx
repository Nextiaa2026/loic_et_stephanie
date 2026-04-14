import { GaleriePage } from "@/components/home/galerie-page";
import { Cormorant_Garamond } from "next/font/google";

const playfair = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export default function Galerie() {
  return <GaleriePage serifClassName={playfair.className} />;
}
