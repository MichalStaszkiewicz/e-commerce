"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@/components/footer/style.scss";
import * as icons from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Divider } from "antd";
import useMediaQuery from "@/hooks/use-media-query";
import { breakpoints } from "@/utils/breakpoints";

export function Footer() {
  const [ready, setReady] = useState(false);

  const isDektop = useMediaQuery(`(min-width: ${breakpoints.lg})`);
  const isTablet = useMediaQuery(`(min-width: ${breakpoints.md})`);
  const isMobile = useMediaQuery(`(min-width: ${breakpoints.xs})`);
  console.log("isDektop", isDektop);
  console.log("isTablet", isTablet);
  console.log("isMobile", isMobile);
  function RenderNavigationList() {
    if (isDektop) {
      return ViewDesktop();
    } else if (isTablet) {
      return ViewTablet();
    } else {
      return ViewMobile();
    }
  }
  function ViewDesktop() {
    return (
      <div className="flex-column">
        <p className="footer-section-header">Navigations</p>
        <div className="navigation-container">
          <ul className="navigation-list">
            <li className="menu-label">Sell online</li>
            <li className="menu-label">Features</li>
            <li className="menu-label">Shopping cart</li>
            <li className="menu-label">Store builder</li>
          </ul>
          <ul className="navigation-list">
            <li className="menu-label">Mobile commerce</li>
            <li className="menu-label">Dropshipping</li>
            <li className="menu-label">Website development</li>
          </ul>
          <ul className="navigation-list">
            <li className="menu-label">Point of sale</li>
            <li className="menu-label">Hardware</li>
            <li className="menu-label">Software</li>
          </ul>
        </div>
      </div>
    );
  }
  function ViewTablet() {
    return (
      <div className="flex-column">
        <p className="footer-section-header">Navigations</p>
        <div className="navigation-container full-row ">
          <div className="full-row-list-wrapper">
            <ul className="navigation-list ">
              <li className="menu-label">Sell o nline</li>
              <li className="menu-label">Features</li>
              <li className="menu-label">Shopping cart</li>
              <li className="menu-label">Store builder</li>
              <li className="menu-label">Point of sale</li>
              <li className="menu-label">Hardware</li>
              <li className="menu-label">Software</li>
            </ul>
            <ul className="navigation-list">
              <li className="menu-label">Mobile commerce</li>
              <li className="menu-label">Dropshipping</li>
              <li className="menu-label">Website development</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  function ViewMobile() {
    return (
      <div className="flex-column">
        <p className="footer-section-header">Navigations</p>
        <div className="navigation-container">
          <ul className="navigation-list">
            <li className="menu-label">Sell online</li>
            <li className="menu-label">Features</li>
            <li className="menu-label">Shopping cart</li>
            <li className="menu-label">Store builder</li>
            <li className="menu-label">Mobile commerce</li>
            <li className="menu-label">Dropshipping</li>
            <li className="menu-label">Website development</li>
            <li className="menu-label">Point of sale</li>
            <li className="menu-label">Hardware</li>
            <li className="menu-label">Software</li>
          </ul>
        </div>
      </div>
    );
  }

  useEffect(() => {
    setReady(true);
  }, []);
  return ready ? (
    <div className="footer">
      <Divider></Divider>
      <div className="wrapper">
        {RenderNavigationList()}
        <div className="footer-promo-wrapper">
          <p className="footer-section-header">Promo</p>
          <img className="promo-image-footer" src="/images/hero_1.jpg" alt="" />

          <h3>Finding Your Perfect Shoes</h3>
          <p
            style={{
              fontSize: "15px",
              fontWeight: "300",
              color: "#8c92a0",
            }}
          >
            Promo from january 15 — 25, 2019
          </p>
        </div>
        <div className="footer-contact-wrapper">
          <p className="footer-section-header">Contact Info</p>
          <ul className="contact-list">
            <li className="address">
              {" "}
              <div className="icon-wrapper">
                {" "}
                <FontAwesomeIcon className="icon" icon={icons.faLocationPin} />
              </div>
              <p style={{}}>
                203 Fake St. Mountain View, San Francisco, California, USA
              </p>
            </li>
            <li className="phone">
              <div className="icon-wrapper">
                {" "}
                <FontAwesomeIcon className="icon" icon={icons.faPhone} />
              </div>

              <p style={{}}>+2 392 3929 210</p>
            </li>
            <li className="email">
              <div className="icon-wrapper">
                {" "}
                <FontAwesomeIcon className="icon" icon={icons.faEnvelope} />
              </div>

              <p style={{}}>emailaddress@domain.com</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
