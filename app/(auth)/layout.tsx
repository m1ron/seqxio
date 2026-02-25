import { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Sign in | seqxio",
  description: "Powering Smarter, Cleaner Cities",
  openGraph: {
    title: "Sign in | seqxio",
    description:
      "Powering Smarter, Cleaner Cities",
    images: "/login-meta-img",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
