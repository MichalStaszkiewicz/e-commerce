"use client";
import { Button, ConfigProvider } from "antd";
import "../checkout/style.scss";

import theme from "@/theme/theme_config";
import ExpandableCard from "./expandable-card/component";
import SelectCountry from "./select-country/component";

import CheckoutCouponCode from "./coupon-code/component";
import CheckoutYourOrder from "./your-order/component";
import ReturningCustomer from "./returning-customer/component";
import MessageArea from "../form-group/message-area/component";
import FormGroup from "../form-group/component";
export default function CheckoutContent() {
  return (
    <div className="checkout-content-wrapper">
      <ConfigProvider theme={theme}>
        <div className="customer-return-wrapper">
          <ReturningCustomer />
        </div>

        <div className="billing-details-wrapper">
          <div className="billing-details-box">
            <p className="label">Billing Details</p>
            <div className="billing-form-box">
              <SelectCountry />
              <div className="form-group-row">
                <FormGroup
                  label={"First Name"}
                  notNull={true}
                  className={"first-name-input"}
                  placeholder={null}
                />

                <FormGroup
                  label={"Last Name"}
                  notNull={true}
                  className={"last-name-input"}
                  placeholder={null}
                />
              </div>
              <FormGroup
                label={"Company Name"}
                notNull={true}
                className={"company-name-input"}
                placeholder={null}
              />
              <FormGroup
                label={"Address"}
                notNull={false}
                className={"address-street-input"}
                placeholder={"Street address"}
              />
              <FormGroup
                label={undefined}
                notNull={false}
                className={"address-apartament-input"}
                placeholder={"Apartament,suite,unit etc. (optional)"}
              />

              <div className="form-group-row">
                <FormGroup
                  label={"State / Country"}
                  notNull={false}
                  className={"state-country-input"}
                  placeholder={""}
                />
                <FormGroup
                  label={"Posta / Zip"}
                  notNull={true}
                  className={"posta-zip-input"}
                  placeholder={""}
                />
              </div>
              <div className="form-group-row">
                <FormGroup
                  label={"Email Address"}
                  notNull={true}
                  className={"email-address-input"}
                  placeholder={""}
                />
                <FormGroup
                  label={"Phone"}
                  notNull={true}
                  className={"phone-number-input"}
                  placeholder={"Phone Number"}
                />
              </div>

              <div className="form-group">
                <MessageArea
                  label={"Order Notes"}
                  placeholder={"Write your notes here..."}
                />
              </div>
            </div>
          </div>

          <div className="order-details-box">
            <CheckoutCouponCode />

            <CheckoutYourOrder />
          </div>
        </div>
      </ConfigProvider>
    </div>
  );
}
