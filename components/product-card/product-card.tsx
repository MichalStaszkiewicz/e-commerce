import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import * as icons from "@fortawesome/free-solid-svg-icons";
import "@/components/product-card/style.scss";
interface ProductCardProps {
  image: string;
  label: string;
  description: string;
  price: number;
  width: number;
  height: number;
}
interface ProductCardState {}
export class ProductCard extends React.Component<
  ProductCardProps,
  ProductCardState
> {
  constructor(props: ProductCardProps) {
    super(props);
  }
  render() {
    const { image, label, description, price } = this.props;
    return (
      <div
        className="product_card_container"
        style={{
          width: `${this.props.width}px`,
          height: `${this.props.height}px`,
        }}
      >
        <div
          style={{
            backgroundImage: `url(${image})`,
          }}
          className="product_card_image"
        ></div>
        <div className="product_card_desc">
          <p className="product_card_name">{label}</p>
          <p className="product_card_description">{description} </p>
          <p className="product_card_price">${price}</p>
        </div>
      </div>
    );
  }
}
