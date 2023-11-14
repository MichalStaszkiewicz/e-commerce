import { Benefit } from "@/components/benefit/benefit";
import { BigSale } from "@/components/big_sale";
import { Collection } from "@/components/collection";
import { FeaturedProducts } from "@/components/home/featured_products/featured_products";
import { HeaderNavButton } from "@/components/header_navigation/header_nav_button";
import { HeaderNavLabel } from "@/components/header_navigation/header_nav_label";

import { PrimaryButton } from "@/components/primary_button";
import ShopContent from "@/components/shop_content/shop_content";
import ShopNavHistory from "@/components/shop_nav_history";
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
