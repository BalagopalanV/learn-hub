import { Poppins, Montserrat } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"], // Light (200), Regular (400), Medium (500), SemiBold (600), ExtraBold (800)
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});
