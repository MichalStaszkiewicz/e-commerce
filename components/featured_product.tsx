

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import * as icons from '@fortawesome/free-solid-svg-icons';
interface FeaturedProductsProps {
    image: string;
    label: string;
    description: string;
    price: number;
}
interface FeaturedProductsState {

}
export class FeaturedProduct extends React.Component<FeaturedProductsProps, FeaturedProductsState>{
    constructor(props: FeaturedProductsProps) {
        super(props)



    }
    render() {
        const { image, label, description, price } = this.props;
        return <div className="featured_product_container">
            <div style={{ backgroundImage: `url(${image})` }} className="featured_product_image"></div>
            <div className="featured_product_desc">
                <p className="featured_product_name">{label}</p>
                <p className="featured_product_description">{description} </p>
                <p className="featured_product_price">${price}</p>

            </div>
        </div>

    }


}