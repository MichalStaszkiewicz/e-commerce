import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";
import { ProductCard } from "./product_card";
import { off } from "process";

interface FeaturedProductModel {
  image: string;
  label: string;
  description: string;
  price: number;
}

interface FeaturedProductProps {
  products: FeaturedProductModel[];
}

const FeaturedProducts: React.FunctionComponent<FeaturedProductProps> = ({
  products,
}) => {
  const listRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [leftArrowColor, setLeftArrowColor] = useState("#cdcfd0");
  const [rightArrowColor, setRightArrowColor] = useState(
    products.length > 3 ? "#5d636f" : "#cdcfd0"
  );

  const handleScroll = () => {
    setLeftArrowColor(index > 0 ? "#5d636f" : "#cdcfd0");
    setRightArrowColor(
      products.length > 3 && index + 3 < products.length ? "#5d636f" : "#cdcfd0"
    );
  };

  const handleArrowClick = (offset: number) => {
    const scrollSpeed = 334;

    listRef.current!.scrollBy({ left: scrollSpeed * offset });
    setIndex((prevState) => index + offset);
  };

  return (
    <div className="featured_products">
      <div className="featured_products_decoration"></div>
      <p
        style={{
          fontWeight: "400",
          fontSize: "30px",
          transform: "TranslateY(200%)",
        }}
      >
        Featured Products
      </p>
      <div className="featured_products_list" ref={listRef}>
        {products.map((item, index) => (
          <ProductCard
            key={index}
            image={item.image}
            label={item.label}
            description={item.description}
            price={item.price}
            width={300}
            height={400}
          />
        ))}
      </div>

      <div className="featured_products_arrows_container">
        <FontAwesomeIcon
          onMouseEnter={() => {
            if (products.length > 3 && index > 0) {
              setLeftArrowColor("black");
            }
          }}
          onMouseLeave={() => {
            if (products.length > 3 && index > 0) {
              setLeftArrowColor("#5d636f");
            }
          }}
          onClick={() => {
            if (products.length > 3 && index > 0) {
              handleArrowClick(-1);
            }
          }}
          style={{ height: "25px", color: leftArrowColor }}
          icon={icons.faArrowLeft}
        ></FontAwesomeIcon>

        <div style={{ width: "50px" }}></div>
        <FontAwesomeIcon
          onMouseEnter={() => {
            if (
              products.length > 3 &&
              index + 3 < products.length
            ) {
              setRightArrowColor("black");
            }
          }}
          onMouseLeave={() => {
            if (
              products.length > 3 &&
              index + 3 < products.length
            ) {
              setRightArrowColor("#5d636f");
            }
          }}
          onClick={() => {
            if (products.length > 3 && index + 3 < products.length) {
              handleArrowClick(1);
            }
          }}
          style={{ height: "25px", color: rightArrowColor }}
          icon={icons.faArrowRight}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};

export { FeaturedProducts };