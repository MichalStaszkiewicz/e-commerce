import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@/components/footer/style.scss";
import * as icons from "@fortawesome/free-solid-svg-icons";

export function Footer() {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="navigation-container">
          <p
            style={{
              fontSize: "20px",
              fontWeight: "500",
              marginBottom: "25px",
            }}
          >
            Navigations
          </p>

          <ul className="navigation-list">
            <li className="menu-label">Sell online</li>
            <li className="menu-label">Features</li>
            <li className="menu-label">Shopping cart</li>
            <li className="menu-label">Store builder</li>
          </ul>
        </div>
        <div className="navigation-container">
          <p
            style={{
              fontSize: "20px",
              fontWeight: "500",
              marginBottom: "25px",
              color: "transparent",
            }}
          >
            Navigations
          </p>

          <ul className="navigation-list">
            <li className="menu-label">Mobile commerce</li>
            <li className="menu-label">Dropshipping</li>
            <li className="menu-label">Website development</li>
          </ul>
        </div>
        <div className="navigation-container">
          <p
            style={{
              fontSize: "20px",
              fontWeight: "500",
              marginBottom: "25px",
              color: "transparent",
            }}
          >
            Navigations
          </p>

          <ul className="navigation-list">
            <li className="menu-label">Point of sale</li>
            <li className="menu-label">Hardware</li>
            <li className="menu-label">Software</li>
          </ul>
        </div>
        <div className="navigation-container">
          <p
            style={{
              fontSize: "20px",
              fontWeight: "500",
              marginBottom: "25px",
              color: "black",
            }}
          >
            Promo
          </p>
          <img
            src="/images/hero_1.jpg"
            alt=""
            style={{ height: "120px", width: "250px" }}
          />
          <p
            style={{
              fontSize: "20px",
              fontWeight: "300",
              color: "#7c74ea",
            }}
          >
            Finding Your Perfect Shoes
          </p>
          <p
            style={{
              fontSize: "15px",
              fontWeight: "300",
              color: "#8c92a0",
              transform: "TranslateY(-40%)",
            }}
          >
            Promo from january 15 — 25, 2019
          </p>
        </div>
        <div className="navigation-container">
          <p
            style={{
              fontSize: "20px",
              fontWeight: "500",
              marginBottom: "25px",
              color: "black",
            }}
          >
            Contact Info
          </p>
          <div className="contact-info-label">
            <FontAwesomeIcon
              style={{ color: "#7c74ea" }}
              icon={icons.faLocationPin}
            />
            <p style={{ width: "100%" }}>
              203 Fake St. Mountain View, San Francisco, California, USA
            </p>
          </div>
          <div className="contact-info-label">
            <FontAwesomeIcon
              style={{ color: "#7c74ea" }}
              icon={icons.faPhone}
            />
            <p style={{ width: "100%" }}>+2 392 3929 210</p>
          </div>
          <div className="contact-info-label">
            <FontAwesomeIcon
              style={{ color: "#7c74ea" }}
              icon={icons.faEnvelope}
            />
            <p style={{ width: "100%" }}>emailaddress@domain.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
