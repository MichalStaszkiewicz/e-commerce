import product from "../public/images/children.jpg";
import { PrimaryButton } from "../primary-button/component";
import "@/components/big-sale/style.scss";
import { Button, ConfigProvider } from "antd";
import customTheme from "@/theme/theme_config";
import useMediaQuery from "@/hooks/use-media-query";
export function BigSale() {
  return (
    <div className="big-sale-wrapper">
      <ConfigProvider theme={customTheme}>
        <div className="header-wrapper">
          <div className="decoration"></div>

          <p className="header">Big Sale!</p>
        </div>

        <div className="content">
          <div className="image-wrapper">
            <div
              className="image"
              style={{ backgroundImage: "url(../images/blog_1.jpg)" }}
            ></div>
          </div>
          <div className="description-wrapper">
            <div className="description">
              <p className="offer-title">50% less in all items</p>
              <p className="by">
                By <span className="author-name">Carl Smith</span> • September
                3, 2018
              </p>
              <p
                className="description-content"
                style={{ textAlign: "center", color: "#8c92a0" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quisquam iste dolor accusantium facere corporis ipsum animi
                deleniti fugiat. Ex, veniam?
              </p>
              <Button
                style={{
                  height: "45px",
                  paddingLeft: "30px",
                  paddingRight: "30px",
                  borderRadius: "3px",
                }}
                type="primary"
                size="large"
              >
                SHOP NOW
              </Button>
            </div>
          </div>
        </div>
      </ConfigProvider>
    </div>
  );
}
