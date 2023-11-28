import { HeaderNavButton } from "@/components/header-navigation/header-nav-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";

import * as icons from "@fortawesome/free-solid-svg-icons";
import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import StyledComponentsRegistry from "../lib/AntdRegistry";

import { useState } from "react";


const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body >
      <Header />
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      <Footer />
    </body>
  </html>
);
export default RootLayout;
