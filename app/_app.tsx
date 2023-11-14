import "../styles/global.css";

import "../styles/big_sale.css";
import "../styles/collection.css";
import "../styles/product_card.css";
import "../styles/featured_products.scss";

import "../styles/primary_button.css";
import "../styles/shopping_benefits.css";
import "../styles/home_promotion.css";
import "../styles/shop_nav_history_container.css";
import "../styles/shop_content.css";
import "../components/range_slider/range_slider.css";
import type { AppProps } from "next/app";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { ConfigProvider } from "antd";

library.add(faMagnifyingGlass);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBorder: "#7c74ea",
          colorPrimaryBorder: "#7c74ea",
          colorPrimary: "#7c74ea",
          colorPrimaryBorderHover: "#7c74ea",
        },
      }}
    >
      {" "}
      <Component {...pageProps} />
    </ConfigProvider>
  );
}
