import "~/styles/globals.css";

import { type Metadata } from "next";
import { Providers } from "~/components/providers";

const defaultMetadata = {
  title: "Random Data Table Generator & Exporter | RandomKits",
  description:
    "RandomKits.com - Free online tool to generate custom random data tables. Easily create fake data, customize columns, and export to CSV, Excel, PDF, Image, and more formats. Ideal for testing, development, and demos.",
};

export const metadata: Metadata = {
  title: {
    default: defaultMetadata.title,
    template: "%s | RandomKits",
  },
  description: defaultMetadata.description,
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
