import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://amanvermaweb.github.io"),
  title: "Aman Verma | Portfolio | Web Developer",
  description: "Aman Verma's Portfolio Website",
  authors: [{ name: "Aman Verma" }],
  openGraph: {
    type: "website",
    title: "Aman Verma | Portfolio",
    url: "https://amanvermaweb.github.io/",
    images: [
      {
        url: "/portfolio-preview.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  verification: {
    google: "HBLv-NeXR3myFtOApWWhwqS35RDoejxYQ5hIwTfVlEs",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
