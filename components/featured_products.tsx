import React from "react";
import { FeaturedProduct } from "./featured_product";
interface FeaturedProductModel {

    image: string,
    label: string,
    description: string,
    price: number,
}
interface FeaturedProductState {


}
interface FeaturedProductProps {

    products: FeaturedProductModel[],

}

export class FeaturedProducts extends React.Component<FeaturedProductProps, FeaturedProductState>{

    constructor(props: FeaturedProductProps) {
        super(props);

    }
    render() {
        const { products } = this.props;
        return <div className='featured_products'>
            <div className='featured_products_decoration'></div>
            <p style={{ fontWeight: "400", fontSize: "30px", }}  > Featured Products</p>
            <div className='featured_products_list'>
                {
                    products.map((item, index) => (<FeaturedProduct image={item.image} label={item.label} description={item.description} price={item.price} />))
                }


            </div>

        </div>
    }

}