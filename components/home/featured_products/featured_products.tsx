import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";
import { ProductCard } from "../../product_card";
import { off } from "process";
import { ArrowColor, ArrowDirection } from "./enum";

export function FeaturedProducts({ props }: { props: FeaturedProductProps }) {
  const listRef = useRef<HTMLDivElement>(null);

  const [state, setArrows] = useState<FeaturedProductsState>({
    leftArrow: "",
    rightArrow: "",
    index: 0,
  });
  const setState = ({ fields }: { fields: FeaturedProductsState }) => {
    setArrows({ ...state, ...fields });
  };
  useEffect(() => {
    const productsCount = props.products.length;
    let leftArrow = state.leftArrow;
    let rightArrow = state.rightArrow;
    if (productsCount > 3 && state.index == 0) {
      leftArrow = ArrowColor.inactive;
    }

    if (state.index > 0) {
      leftArrow = ArrowColor.active;
    }

    if (state.index == productsCount - 3) {
      rightArrow = ArrowColor.inactive;
    }
    if (productsCount > 3 && state.index < productsCount - 3) {
      rightArrow = ArrowColor.active;
    }

    setState({
      fields: {
        ...state,
        leftArrow: leftArrow,
        rightArrow: rightArrow,
      },
    });
  }, [state.index]);
  const handleArrowClick = (arrowDirection: ArrowDirection) => {
    const scrollSpeed = 334;
    if (arrowDirection == ArrowDirection.left) {
      if (state.index > 0) {
        listRef.current!.scrollBy({ left: scrollSpeed * -1 });
        setState({
          fields: {
            ...state,
            index: state.index - 1,
          },
        });
      }
    } else {
      if (
        props.products.length > 3 &&
        state.index + 3 < props.products.length
      ) {
        listRef.current!.scrollBy({ left: scrollSpeed * 1 });
        setState({
          fields: {
            ...state,
            index: state.index + 1,
          },
        });
      }
    }
  };
  const handlePointerEvent = (arrowDirection: ArrowDirection, event: any) => {
    if (event.type == "pointerover") {
      if (state[arrowDirection] == ArrowColor.active) {
        setState({
          fields: {
            ...state,
            [arrowDirection]: ArrowColor.activeHover,
          },
        });
      } else if (state[arrowDirection] == ArrowColor.inactive) {
        setState({
          fields: {
            ...state,
            [arrowDirection]: ArrowColor.inactiveHover,
          },
        });
      }
    } else {
      if (state[arrowDirection] == ArrowColor.active) {
        setState({
          fields: {
            ...state,
            [arrowDirection]: ArrowColor.activeHover,
          },
        });
      } else if (state[arrowDirection] == ArrowColor.inactive) {
        setState({
          fields: {
            ...state,
            [arrowDirection]: ArrowColor.inactiveHover,
          },
        });
      }
    }
  };

  return (
    <div className="featured_products">
      <p
        style={{
          fontWeight: "400",
          fontSize: "30px",
        }}
      >
        Featured Products
      </p>
      <div className="featured_products_list" ref={listRef}>
        {props.products.map((item, index) => (
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

     {props.products.length>3? <div className="featured_products_arrows_container">
        <FontAwesomeIcon
          onPointerOver={(event) =>
            handlePointerEvent(ArrowDirection.left, event)
          }
          onPointerLeave={(event) =>
            handlePointerEvent(ArrowDirection.left, event)
          }
          onClick={() => handleArrowClick(ArrowDirection.left)}
          style={{ height: "25px", color: state.leftArrow }}
          icon={icons.faArrowLeft}
        ></FontAwesomeIcon>

        <div style={{ width: "50px" }}></div>
        <FontAwesomeIcon
          onPointerOver={(event) =>
            handlePointerEvent(ArrowDirection.right, event)
          }
          onPointerLeave={(event) =>
            handlePointerEvent(ArrowDirection.right, event)
          }
          onClick={() => handleArrowClick(ArrowDirection.right)}
          style={{ height: "25px", color: state.rightArrow }}
          icon={icons.faArrowRight}
        ></FontAwesomeIcon>
      </div>:<div className="featured_products_arrows_container"> </div>} 
    </div>
  );
}
