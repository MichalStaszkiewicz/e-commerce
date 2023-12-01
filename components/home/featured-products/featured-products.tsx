"use client";
import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";

import { off } from "process";
import { ArrowColor, ArrowDirection } from "./enum";

import "@/components/home/featured-products/style.scss";
import ProductCard from "@/components/product-card/component";

export function FeaturedProducts({ props }: { props: FeaturedProductProps }) {
  const listRef = useRef<HTMLDivElement>(null);

  const [state, setArrows] = useState<FeaturedProductsState>({
    leftArrow: "",
    rightArrow: "",
    index: 0,
    isScrolling:false,
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
    listRef!.current?.addEventListener("scroll", () => {
    
      setState({
        fields: {
          ...state,
          leftArrow: leftArrow,
          rightArrow: rightArrow,
          isScrolling: true,
        },
      });
    });
    listRef!.current?.addEventListener("scrollend", () => {
      setState({
        fields: {
          ...state,
          leftArrow: leftArrow,
          rightArrow: rightArrow,
          isScrolling: false,
        },
      });
    });

    setState({
      fields: {
        ...state,
        leftArrow: leftArrow,
        rightArrow: rightArrow,
        isScrolling: false,
      },
    });
  }, [state.index]);
  const handleArrowClick = (arrowDirection: ArrowDirection) => {
    const scrollBy = 370;
    if (arrowDirection == ArrowDirection.left) {
      if (state.index > 0) {
        if (!state.isScrolling) {
          listRef.current!.scrollBy({ left: scrollBy * -1 });
          
          setState({
            fields: {
              ...state,
              index: state.index - 1,
            },
          });
        }
      }
    } else {
      if (
        props.products.length > 3 &&
        state.index + 3 < props.products.length
      ) {
        if (!state.isScrolling) {
          listRef.current!.scrollBy({ left: scrollBy * 1 });
          setState({
            fields: {
              ...state,
              index: state.index + 1,
            },
          });
        }
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
      <div className="decoration"></div>
      <p
        style={{
          fontWeight: "400",
          fontSize: "30px",
        }}
      >
        Featured Products
      </p>
      <div className="product_list" ref={listRef}>
        {props.products.map((item, index) => (
          <ProductCard
            key={index}
            image={item.image}
            label={item.label}
            description={item.description}
            price={item.price}
            width={"350px"}
            height={"400px"}
          />
        ))}
      </div>

      {props.products.length > 3 ? (
        <div className="arrows_container">
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
        </div>
      ) : (
        <div className="arrows_container"> </div>
      )}
    </div>
  );
}
