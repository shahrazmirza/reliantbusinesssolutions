import { Inter } from "next/font/google";
import "../styles/globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reliant Business Solutions - Accounting Services Nationwide",
  description:
    "Discover a wide array of personal and business accounting services at Reliant Business Solutions. Get expert advice, financial planning, tax management, and more.",
  keywords:
    "accounting services, tax services, bookkeeping, financial planning, business accounting, personal tax, business startup accounting, NDIS plan management, grant assistance, registrations",
  author: "Reliant Business Solutions",
  openGraph: {
    type: "website",
    url: "https://www.reliantbusinesssolutions.com.au",
    title: "Reliant Business Solutions - Accounting Services Nationwide",
    description:
      "Discover a wide array of personal and business accounting services at Reliant Business Solutions. Get expert advice, financial planning, tax management, and more.",
    image: "https://www.reliantbusinesssolutions.com.au/hero-image.jpg",
  },
  twitter: {
    card: "summary_large_image",
    url: "https://www.reliantbusinesssolutions.com.au",
    title: "Reliant Business Solutions - Accounting Services Nationwide",
    description:
      "Discover a wide array of personal and business accounting services at Reliant Business Solutions. Get expert advice, financial planning, tax management, and more.",
    image: "https://www.reliantbusinesssolutions.com.au/hero-image.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content={metadata.title} />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:image" content={metadata.openGraph.image} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:url" content={metadata.twitter.url} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.image} />
        <title>{metadata.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Theme appearance="light">{children}</Theme>
      </body>
    </html>
  );
}
