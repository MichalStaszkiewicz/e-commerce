import { Benefit } from "@/components/benefit/benefit";
import { BigSale } from "@/components/big-sale";
import { Collection } from "@/components/collection";
import { FeaturedProducts } from "@/components/home/featured_products/featured-products";
import { HeaderNavButton } from "@/components/header-navigation/header-nav-button";
import { HeaderNavLabel } from "@/components/header-navigation/header-nav-label";

import { PrimaryButton } from "@/components/primary-button";
import ShopContent from "@/components/shop_content/shop-content";
import ShopNavHistory from "@/components/shop-nav-history";
import * as icons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "@/app/layout";

export default function Shop() {
  return (
    <div>
      {" "}
      <ShopNavHistory />
      <ShopContent />
    </div>
  );
}
