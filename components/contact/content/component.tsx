"use client";

import ExpandableCard from "@/components/checkout/expandable-card/component";
import "@/components/contact/content/style.scss";
import FormGroup from "@/components/form-group/component";
import MessageArea from "@/components/form-group/message-area/component";
import customTheme from "@/theme/theme_config";
import { Button, ConfigProvider } from "antd";
export default function ContactContent() {
  return (
    <div className="center-contact-content">
      <ConfigProvider theme={customTheme}>
        <div className="contact-content-wrapper">
          <div className="get-in-touch-box">
            <p className="get-in-touch-label">Get in touch</p>
            <div className="get-in-touch-content">
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
                label={"Email"}
                notNull={true}
                className={"email-address-input"}
                placeholder={null}
              />
              <FormGroup
                label={"Subject"}
                notNull={false}
                className={"email-address-input"}
                placeholder={null}
              />
              <MessageArea label={"Message"} placeholder={""} />
              <Button
                type="primary"
                style={{
                  letterSpacing: "0.2px",
                  width: "100%",
                }}
              >
                SEND MESSAGE
              </Button>
            </div>
          </div>
          <div className="city-list">
            <ExpandableCard
              label={"NEW YORK"}
              expandable={false}
              description={
                "203 Fake St. Mountain View, San Francisco, California, USA"
              }
              padding={""}
            />
            <ExpandableCard
              label={"LONDON"}
              expandable={false}
              description={
                "203 Fake St. Mountain View, San Francisco, California, USA"
              }
              padding={""}
            />
            <ExpandableCard
              label={"CANADA"}
              expandable={false}
              description={
                "203 Fake St. Mountain View, San Francisco, California, USA"
              }
              padding={""}
            />
          </div>
        </div>
      </ConfigProvider>
    </div>
  );
}
