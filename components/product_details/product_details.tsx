import "@/components/product_details/style.scss";
import { Button, ConfigProvider, Radio } from "antd";
import SelectProductCount from "../select_product_quantity/select_product_quantity";
import theme from "@/theme/theme_config";
export default function ProductDetails() {
  return (
    <div className="wrapper">
      <ConfigProvider theme={theme}>
        <div className="block-1">
          <div>
            <img src="/images/cloth_1.jpg" alt="" />
          </div>
        </div>
        <div className="block-2">
          <p className="name">Tank Top T-Shirt</p>
          <div className="description-wrapper">
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Pariatur, vitae, explicabo? Incidunt facere, natus soluta dolores
              iusto! Molestiae expedita veritatis nesciunt doloremque sint
              asperiores fuga voluptas, distinctio, aperiam, ratione dolore.
            </p>
            <p className="description">
              Ex numquam veritatis debitis minima quo error quam eos dolorum
              quidem perferendis. Quos repellat dignissimos minus, eveniet nam
              voluptatibus molestias omnis reiciendis perspiciatis illum hic
              magni iste, velit aperiam quis.
            </p>
          </div>

          <p className="price">$50.00</p>
          <div className="pick-size">
            {" "}
            <Radio>Small</Radio>
            <Radio>Medium</Radio>
            <Radio>Large</Radio>
            <Radio>Extra Large</Radio>
          </div>
          <SelectProductCount />
          <Button type="primary" size="large">
            Add to Cart
          </Button>
        </div>
      </ConfigProvider>
    </div>
  );
}
