import { HeaderNavButton } from "@/components/header-navigation/header-nav-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";

import * as icons from "@fortawesome/free-solid-svg-icons";
import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
