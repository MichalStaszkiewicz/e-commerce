import Image from 'next/image'
import { Inter } from 'next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-solid-svg-icons';
import { HeaderNavButton, HeaderNavLabel } from '../components/header_nav_button';
import React from 'react';
import promotedProduct from "../public/images/shoes.png"
import { PrimaryButton } from '@/components/primary_button';
import { Benefit } from '@/components/benefit';
import { Collection } from '@/components/collection';
import { FeaturedProducts } from '@/components/featured_products';
import { BigSale } from '@/components/big_sale';
import Link from 'next/link'
export const inter = Inter({ subsets: ['latin'] })

export default function Home() {


    return (
        <main className={`flex min-h-screen flex-col items-center  ${inter.className}`}>
            <div className='header' >
                <div className="row-space-between" style={{ height: '200px', borderBottom: '0.1px solid #f7f7f7' }}>


                    <form action="" className="site-block-top-search" >
                        <FontAwesomeIcon className="icon-search2" icon={icons.faMagnifyingGlass} />

                        <input type="text" style={{ fontSize: '20px' }} className="form-control border-0" placeholder="Search" />

                    </form>

                    <div style={{ width: "50%", textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <div className="site-logo" >
                            <Link href="/shop" style={{ letterSpacing: "6px" }} className="js-logo-clone">SHOPPERS</Link>
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
                <div className='home-promotion-container'>

                    <Image className='home-promotion-image' src={promotedProduct} alt="" />
                    <div className='home-promotion-desc-container'>
                        <div className='home-promotion-desc'>

                            <p className='home-promotion-desc-header'> Finding Your Perfect Shoes </p>
                            <p className='home-promotion-desc-about'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                            <PrimaryButton height={40} width={130} label={'SHOP NOW'} />
                        </div>


                    </div>

                </div>
                <div className='shopping_benefits'>
                    <Benefit title={'FREE SHIPPING'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.'} />
                    <Benefit title={'FREE RETURNS'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.'} />
                    <Benefit title={'CUSTOMER SUPPORT'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.'} />

                </div>
                <div className='collections'>
                    <Collection label={'Woman'} image={'/images/women.jpg'} />
                    <Collection label={'Children'} image={'/images/children.jpg'} />
                    <Collection label={'Men'} image={'/images/men.jpg'} />
                </div>
                <FeaturedProducts products={[{ image: "/images/cloth_1.jpg", label: "Tank top", price: 50, description: "Finding perfect product" }, { image: "/images/cloth_3.jpg", label: "Tank top", price: 50, description: "Finding perfect product" }, { image: "/images/cloth_2.jpg", label: "Tank top", price: 50, description: "Finding perfect product" }, { image: "/images/cloth_3.jpg", label: "Tank top", price: 50, description: "Finding perfect product" }, { image: "/images/shoes.png", label: "Tank top", price: 50, description: "Finding perfect product" }]} />
                <BigSale></BigSale>

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


        </main >
    )
}
