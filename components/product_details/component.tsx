"use client";
import "@/components/product_details/style.scss";
import { Button, ConfigProvider, Radio, notification } from "antd";
import SelectProductCount from "../select_product_quantity/component";
import customTheme from "@/theme/theme_config";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductDetails() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [state, setState] = useState({
    productCount: 1,
    size: "",
  });
  useEffect(() => {
    let size: any = searchParams.get("size");
    let productCount: any = searchParams.get("productCount");
    if (size !== null) {
      setState({ size: size, productCount: productCount });
    }
  }, []);
  useEffect(() => {
    router.replace(`?size=${state.size}&productCount=${state.productCount}`, {
      scroll: false,
    });
  }, [state.size, state.productCount]);
  const openNotification = (itemName: string) => {
    notification.open({
      message: "New product in cart!",
      description: (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          {/* <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <img
              src={"/images/cloth_1.jpg"}
              alt={itemName}
              style={{ width: "50px", height: "50px" }}
            />
            <p style={{ color: "var(--primary-color)" ,fontSize:"20px"}}>50$</p>
          </div> */}

          <p>{itemName} has been added to cart</p>
        </div>
      ),
      onClick: () => {},
    });
  };
  return (
    <div className="product-details-conetnt">
      <div className="product-details-wrapper">
        <ConfigProvider theme={customTheme}>
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
                Pariatur, vitae, explicabo? Incidunt facere, natus soluta
                dolores iusto! Molestiae expedita veritatis nesciunt doloremque
                sint asperiores fuga voluptas, distinctio, aperiam, ratione
                dolore.
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
              <Radio.Group value={state.size}>
                <Radio
                  onClick={() => {
                    setState({ ...state, size: "Small" });
                  }}
                  value={"Small"}
                >
                  Small
                </Radio>
                <Radio
                  onClick={() => {
                    setState({ ...state, size: "Medium" });
                  }}
                  value={"Medium"}
                >
                  Medium
                </Radio>
                <Radio
                  onClick={() => {
                    setState({ ...state, size: "Large" });
                  }}
                  value={"Large"}
                >
                  Large
                </Radio>
                <Radio
                  onClick={() => {
                    setState({ ...state, size: "Extra Large" });
                  }}
                  value={"Extra Large"}
                >
                  Extra Large
                </Radio>
              </Radio.Group>
            </div>
            <SelectProductCount size={state.size} />
            <Button
              type="primary"
              size="large"
              style={{
                height: "45px",
                paddingLeft: "35px",
                paddingRight: "35px",
                borderRadius: "3px",
              }}
              onClick={() => {
                openNotification("Tank Top");
              }}
            >
              ADD TO CART
            </Button>
          </div>
        </ConfigProvider>
      </div>
    </div>
  );
}
