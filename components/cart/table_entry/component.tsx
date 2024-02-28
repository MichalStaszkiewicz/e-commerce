import SelectProductCount from "@/components/select_product_quantity/component";
import "../table_entry/style.scss";
import { Button, ConfigProvider } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";
import customTheme from "@/theme/theme_config";

import { CloseOutlined } from "@ant-design/icons";
import { Product } from "@/model/product";
import { CartProduct } from "../content";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/utils/utility-function";

export type CartTableEntryProps = {
  entry: CartProduct;
};
export default function CartTableEntry(props: CartTableEntryProps) {
  const cart = useCart();

  function removeItemFromCart(itemId: number) {
    let products = cart.cartState.cartProducts;

    products.forEach((product, index) => {
      if (product.id === itemId) {
        products.splice(index, 1);
        cart.setState({ cartProducts: products });
      }
    });
  }
  return (
    <ConfigProvider theme={customTheme}>
      <tr className="tr-entry">
        <td className="entry-image">
          <img src={`${props.entry.product.image}`} alt="" />
        </td>
        <td className="entry-product">
          <center>{props.entry.product.name}</center>
        </td>
        <td className="entry-price">
          <center>${formatPrice({ price: props.entry.product.price })}</center>
        </td>
        <td className="entry-quantity">
          <center>
            <SelectProductCount
              inCart={true}
              size={""}
              itemId={props.entry.id}
            />
          </center>
        </td>
        <td className="entry-total">
          <center>${formatPrice({ price: props.entry.totalPrice })}</center>
        </td>
        <td className="entry-remove">
          <center>
            <Button
              type="primary"
              className="cart-remove-item-button"
              onClick={() => {
                removeItemFromCart(props.entry.id);
              }}
              style={{
                width: "25px",
                borderRadius: "5px",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <CloseOutlined />
            </Button>
          </center>
        </td>
      </tr>
    </ConfigProvider>
  );
}
