import product from "../public/images/children.jpg";
import { PrimaryButton } from "../primary-button/primary-button";
import "@/components/big-sale/style.scss";
import { Button, ConfigProvider } from "antd";
import theme from "@/theme/theme_config";
export function BigSale() {
  return (
    <div className="container">
      <ConfigProvider theme={theme}>
        <div
          className="decoration"
          style={{ transform: "TranslateY(3000%)" }}
        ></div>
        <p
          style={{
            fontWeight: "400",
            fontSize: "30px",
            transform: "TranslateY(70%)",
          }}
        >
          Big Sale!
        </p>
        <div className="content" style={{ width: "100%", height: "100%" }}>
          <div
            className="image"
            style={{ backgroundImage: "url(../images/blog_1.jpg)" }}
          ></div>
          <div className="description">
            <p style={{ fontSize: 32, color: "#7c74ea" }}>
              50% less in all items
            </p>
            <p style={{ color: "#c4c7ce" }}>
              By{" "}
              <span style={{ color: "#7c74ea", fontWeight: "500" }}>
                Carl Smith
              </span>{" "}
              • September 3, 2018
            </p>
            <p style={{ textAlign: "center", width: 470, color: "#8c92a0" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
              iste dolor accusantium facere corporis ipsum animi deleniti
              fugiat. Ex, veniam?
            </p>
            <Button type="primary" size="large">SHOP NOW</Button>
          </div>
        </div>
      </ConfigProvider>
    </div>
  );
}
