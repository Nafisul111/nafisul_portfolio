import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Nafisul Hasan - Full Stack MERN Developer",
  description:
    "Full-Stack MERN Developer with 5 years of experience building scalable web applications",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
