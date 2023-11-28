import SelectProductCount from "@/components/select_product_quantity/select_product_quantity";
import "../table_entry/style.scss";
import { Button, ConfigProvider } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";
import theme from "@/theme/theme_config";
export default function TableEntry() {
  return (
    <ConfigProvider theme={theme}>
      <tr className="tr-entry">
        <td className="entry-image">
          <img src="/images/cloth_1.jpg" alt="" />
        </td>
        <td className="entry-product">
          <center>Top Up T-Shirt</center>
        </td>
        <td className="entry-price">
          <center>$49.00</center>
        </td>
        <td className="entry-quantity">
          <center>
            <SelectProductCount />
          </center>
        </td>
        <td className="entry-total">
          <center>$49.00</center>
        </td>
        <td className="entry-remove">
          <center>
            <Button style={{ height: "50px", width: "50px" }}>
              <FontAwesomeIcon style={{color:"white"}}
                type="primary"
                icon={icons.faClose}
              ></FontAwesomeIcon>
            </Button>
          </center>
        </td>
      </tr>
    </ConfigProvider>
  );
}
