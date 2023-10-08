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
import Layout from '@/components/layout';
import Head from 'next/head';
export const inter = Inter({ subsets: ['latin'] })

export default function Home() {


    return <Layout children={


        <main className={`flex min-h-screen flex-col items-center  ${inter.className}`}>

            <div className='content'  data-aos="fade-up">
                <div className='home-promotion-container' >

                    <Image className='home-promotion-image' src={promotedProduct} alt="" />
                    <div className='home-promotion-desc-container'>
                        <div className='home-promotion-desc'>

                            <p className='home-promotion-desc-header'> Finding Your Perfect Shoes </p>
                            <p className='home-promotion-desc-about'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                            <PrimaryButton height={40} width={130} label={'SHOP NOW'} />
                        </div>


                    </div>

                </div>
                <div className='shopping_benefits'  data-aos="fade-up">
                    <Benefit title={'FREE SHIPPING'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.'} />
                    <Benefit title={'FREE RETURNS'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.'} />
                    <Benefit title={'CUSTOMER SUPPORT'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.'} />

                </div>
                <div className='collections'  data-aos="fade-up">
                    <Collection label={'Woman'} image={'/images/women.jpg'} />
                    <Collection label={'Children'} image={'/images/children.jpg'} />
                    <Collection label={'Men'} image={'/images/men.jpg'} />
                </div>
                <FeaturedProducts products={[{ image: "/images/cloth_1.jpg", label: "Tank top", price: 50, description: "Finding perfect product" }, { image: "/images/cloth_3.jpg", label: "Tank top", price: 50, description: "Finding perfect product" }, { image: "/images/cloth_2.jpg", label: "Tank top", price: 50, description: "Finding perfect product" }, { image: "/images/cloth_3.jpg", label: "Tank top", price: 50, description: "Finding perfect product" }, { image: "/images/shoes.png", label: "Tank top", price: 50, description: "Finding perfect product" }]} />
                <BigSale></BigSale>

            </div>


        </main >} />

}

