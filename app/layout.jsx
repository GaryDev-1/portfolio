import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrainsMono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Gary's Portfolio",
  description:
    "A showcase of my professional journey, skills, and creative projects. Here, you’ll find a curated collection of my work, ranging from web development and design to innovative solutions and personal projects. Explore my achievements, learn about my expertise, and get in touch to collaborate on exciting new ventures. Let’s create something amazing together!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
      <Header/>
      <StairTransition/>
      <PageTransition>
        {children}
      </PageTransition>
      </body>
    </html>
  );
}
