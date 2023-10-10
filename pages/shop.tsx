import { Benefit } from "@/components/benefit";
import { BigSale } from "@/components/big_sale";
import { Collection } from "@/components/collection";
import { FeaturedProducts } from "@/components/featured_products";
import { HeaderNavButton } from "@/components/header_nav_button";
import { HeaderNavLabel } from "@/components/header_nav_label";
import Layout from "@/components/layout";
import { PrimaryButton } from "@/components/primary_button";
import ShopContent from "@/components/shop_content";
import ShopNavHistory from "@/components/shop_nav_history";
import * as icons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function Shop() {
  return <Layout children={

        <><ShopNavHistory /><ShopContent /></>



  } />
}
