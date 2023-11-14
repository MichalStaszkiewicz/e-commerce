import { HeaderNavButton } from "@/components/header-navigation/header-nav-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";

import * as icons from "@fortawesome/free-solid-svg-icons";
import { Footer } from "@/components/footer/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="header">
          <div className="site-top-block">
            <div className="row-space-between" style={{ height: "100px" }}>
              <form action="" className="site-block-top-search">
                <FontAwesomeIcon
                  className="icon-search2"
                  icon={icons.faMagnifyingGlass}
                />

                <input
                  type="text"
                  style={{ fontSize: "15px" }}
                  className="form-control border-0"
                  placeholder="Search"
                />
              </form>

              <div
                style={{
                  width: "50%",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div className="site-logo">
                  <Link
                    href="/"
                    style={{ letterSpacing: "5px", fontSize: "15.5px" }}
                    className="js-logo-clone"
                  >
                    SHOPPERS
                  </Link>
                </div>
              </div>

              <div className="side-nav">
                <FontAwesomeIcon
                  icon={icons.faShoppingCart}
                  style={{ color: "#8c92a0" }}
                />
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#f4f4f5",
                width: "100%",
                height: "0.1px",
              }}
            ></div>
          </div>

          <div className="nav-header">
            <HeaderNavButton label={"HOME"} icon={false} items={[]} />
            <HeaderNavButton label={"ABOUT"} icon={false} items={[]} />
            <HeaderNavButton
              label={"SHOP"}
              icon={true}
              items={[
                { menuItems: ["item 1", "item 2"], label: "item 1" },
                { menuItems: ["item 1", "item 2"], label: "item 2" },
              ]}
            />
            <HeaderNavButton label={"CATALOGUE"} icon={false} items={[]} />
            <HeaderNavButton label={"NEW ARRIVALS"} icon={false} items={[]} />
            <HeaderNavButton label={"CONTACT"} icon={false} items={[]} />
          </div>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
