import SelectProductCount from "@/components/select_product_quantity/component";
import "../table_entry/style.scss";
import { Button, ConfigProvider } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";
import customTheme from "@/theme/theme_config";
export default function CartTableEntry() {
  return (
    <ConfigProvider theme={customTheme}>
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
            <SelectProductCount size={""} />
          </center>
        </td>
        <td className="entry-total">
          <center>$49.00</center>
        </td>
        <td className="entry-remove">
          <center>
            <Button type="primary" style={{ height: "50px", width: "50px", borderRadius:"5px"}}>
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
