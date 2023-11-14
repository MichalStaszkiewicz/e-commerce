import { Benefit } from "@/components/benefit/benefit";
import { BigSale } from "@/components/big-sale/big-sale";

import { FeaturedProducts } from "@/components/home/featured_products/featured-products";
import { HeaderNavButton } from "@/components/header-navigation/header-nav-button";
import { HeaderNavLabel } from "@/components/header-navigation/header-nav-label";

import { PrimaryButton } from "@/components/primary-button/primary-button";
import ShopContent from "@/components/shop_content/shop-content";

import * as icons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "@/app/layout";
import NavigationHistory from "@/components/navigation-history/navigation-history";

export default function Shop() {
  return (
    <div>
      {" "}
      <NavigationHistory />
      <ShopContent />
    </div>
  );
}
