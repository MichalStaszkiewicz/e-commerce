import { Benefit } from "@/components/benefit";
import { BigSale } from "@/components/big_sale";
import { Collection } from "@/components/collection";
import { FeaturedProducts } from "@/components/featured_products";
import { HeaderNavButton } from "@/components/header_nav_button";
import { HeaderNavLabel } from "@/components/header_nav_label";
import { PrimaryButton } from "@/components/primary_button";
import * as icons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function Shop() {
    return (
        <main className={`flex min-h-screen flex-col items-center `}>
            <div className='header'>
                <div className="row-space-between" style={{ height: '200px', borderBottom: '0.1px solid #f7f7f7' }}>


                    <form action="" className="site-block-top-search">
                        <FontAwesomeIcon className="icon-search2" icon={icons.faMagnifyingGlass} />

                        <input type="text" style={{ fontSize: '20px' }} className="form-control border-0" placeholder="Search" />

                    </form>

                    <div style={{ width: "50%", textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <div onClick={() => {


                        }} className="site-logo">
                            <a style={{ letterSpacing: "7px" }} className="js-logo-clone">SHOPPERS</a>
                        </div>
                    </div>

                    <div className='side-nav'>
                        <FontAwesomeIcon icon={icons.faShoppingCart} style={{ color: "#8c92a0" }} />
                    </div>


                </div>

                <div className='nav-header'>
                    <HeaderNavButton label={'HOME'} icon={false} items={[]} />
                    <HeaderNavButton label={'ABOUT'} icon={false} items={[]} />
                    <HeaderNavButton label={'SHOP'} icon={true} items={[new HeaderNavLabel({ label: "item 1", isMenu: true }), new HeaderNavLabel({ label: "item 2", isMenu: false })]} />
                    <HeaderNavButton label={'CATALOGUE'} icon={true} items={[]} />
                    <HeaderNavButton label={'NEW ARRIVALS'} icon={false} items={[]} />
                    <HeaderNavButton label={'CONTACT'} icon={false} items={[]} />

                </div>
            </div>
            <div className='content'>


            </div>
            <div className='footer'>
                <div className='footer_container' >
                    <div className='footer_navigation_container'>
                        <p style={{ fontSize: "20px", fontWeight: "500", marginBottom: "25px" }}>Navigations</p>

                        <ul className='footer_navigation_list'>
                            <li className='footer_menu_label'>Sell online</li>
                            <li className='footer_menu_label'>Features</li>
                            <li className='footer_menu_label'>Shopping cart</li>
                            <li className='footer_menu_label'>Store builder</li>

                        </ul>
                    </div>
                    <div className='footer_navigation_container'>
                        <p style={{ fontSize: "20px", fontWeight: "500", marginBottom: "25px", color: "transparent" }}>Navigations</p>

                        <ul className='footer_navigation_list'>
                            <li className='footer_menu_label'>Mobile commerce</li>
                            <li className='footer_menu_label'>Dropshipping</li>
                            <li className='footer_menu_label'>Website development</li>


                        </ul>
                    </div>
                    <div className='footer_navigation_container'>
                        <p style={{ fontSize: "20px", fontWeight: "500", marginBottom: "25px", color: "transparent" }}>Navigations</p>

                        <ul className='footer_navigation_list'>
                            <li className='footer_menu_label'>Point of sale</li>
                            <li className='footer_menu_label'>Hardware</li>
                            <li className='footer_menu_label'>Software</li>


                        </ul>
                    </div>
                    <div className='footer_navigation_container' >
                        <p style={{ fontSize: "20px", fontWeight: "500", marginBottom: "25px", color: "black" }}>Promo</p>
                        <img src="/images/hero_1.jpg" alt="" style={{ height: "120px", width: "250px" }} />
                        <p style={{ fontSize: "20px", fontWeight: "300", color: "#7c74ea" }}>Finding Your Perfect Shoes</p>
                        <p style={{ fontSize: "15px", fontWeight: "300", color: "#8c92a0", transform: "TranslateY(-40%)" }}>Promo from january 15 — 25, 2019</p>
                    </div>
                    <div className='footer_navigation_container' >
                        <p style={{ fontSize: "20px", fontWeight: "500", marginBottom: "25px", color: "black" }}>Contact Info</p>
                        <div className='row-space-between'>

                            <FontAwesomeIcon style={{ color: '#7c74ea', }} icon={icons.faLocationPin} />
                            <p style={{ width: "100%" }}>203 Fake St. Mountain View, San Francisco, California, USA</p>
                        </div>
                        <div className='row-space-between'>

                            <FontAwesomeIcon style={{ color: '#7c74ea', }} icon={icons.faPhone} />
                            <p style={{ width: "100%" }}>+2 392 3929 210</p>
                        </div>
                        <div className='row-space-between'>

                            <FontAwesomeIcon style={{ color: '#7c74ea' }} icon={icons.faEnvelope} />
                            <p style={{ width: "100%" }}>emailaddress@domain.com</p>
                        </div>
                    </div>
                </div>

            </div>


        </main >)
}