
import Image from 'next/image'
import promotedProduct from "../public/images/shoes.png"
import { PrimaryButton } from './primary_button'
import React, { useRef } from "react";
export default function HomePromotion() {



    return <div className='home-promotion-container' >

        <Image className='home-promotion-image' src={promotedProduct} alt="" />
        <div className='home-promotion-desc-container'>
            <div className='home-promotion-desc'>

                <p className='home-promotion-desc-header'> Finding Your Perfect Shoes </p>
                <p className='home-promotion-desc-about'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                <PrimaryButton height={40} width={130} label={'SHOP NOW'} />
            </div>


        </div>

    </div>

}