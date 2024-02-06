import { HeaderNavButton } from "@/components/header-navigation/header-nav-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";

import * as icons from "@fortawesome/free-solid-svg-icons";

import { Header } from "@/components/header/component";
import StyledComponentsRegistry from "../lib/AntdRegistry";

import { useState } from "react";
import { Footer } from "@/components/footer/component";
import NavigationHistory from "@/components/navigation-history/component";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body>
      <Header />
      <AntdRegistry>{children}</AntdRegistry>
      <Footer />
    </body>
  </html>
);
export default RootLayout;
