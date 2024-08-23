import { ReactNode } from "react";

export const metadata = {
  title: "Hangi Ay",
  description:
    "Hangi ayı öğrenmek mi istiyorsunuz? Hem ay ismini hem de ay numarasını kullanarak doğru bilgiyi kolayca bulun.",
  keywords: "ay",
  author: "Mustafa Berat ARU",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="viewport" content={metadata.viewport} />
        <title>{metadata.title}</title>
        <link rel="icon" href="/month-icon.png" type="image/png" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
