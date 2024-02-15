import ProductCard from "@/components/product-card/component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useRef, useState, useEffect, PointerEventHandler } from "react";
import { CarouselArrowState, ArrowDirection } from "./enum";
import * as icons from "@fortawesome/free-solid-svg-icons";
import { easeInOutQuad } from "@/animations/animations";
import "../../../styles/globals.scss";
const CarouselArrowColors = {
  active: "#494F55",
  activeHover: "#0b0b0b",
  inactiveHover: "#B7B9B9",
  inactive: "#cdcfd0",
};
export default function ProductCarousel({ props }: { props: CarouselProps }) {
  const listRef = useRef<HTMLDivElement>(null);
  const { slidesAtOnce, products } = props;
  const productQuantity = products.length;
  const productMargin = 10;
  const nextSlideArrow = useRef<any>(null);
  const prevSlideArrow = useRef<any>(null);
  const [nextArrowState, setNextArrowState] = useState<CarouselArrowState>(
    CarouselArrowState.active
  );
  const [prevArrowState, setPrevArrowState] = useState<CarouselArrowState>(
    CarouselArrowState.active
  );

  const [index, setIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState(false);

  function calculateCarouselWidth() {
    const extraSpace = productMargin * 2;
    if (products.length == 0) {
      throw new Error("Products array cant be  empty");
    }
    if (slidesAtOnce == 1) {
      return products[0].width;
    }
    if (products.length >= props.slidesAtOnce) {
      return slidesAtOnce * products[0].width + extraSpace;
    } else {
      return products.length * products[0].width + extraSpace;
    }
  }
  function setArrowStateByEvent(
    event: PointerEvent,
    arrowDirection: ArrowDirection
  ) {
    const isHover = event.type === "pointerover";
    const isPrevious = arrowDirection === ArrowDirection.previous;

    const activeState = isHover
      ? CarouselArrowState.activeHover
      : CarouselArrowState.active;
    const inactiveState = isHover
      ? CarouselArrowState.inactiveHover
      : CarouselArrowState.inactive;

    if (isPrevious) {
      setPrevArrowState(
        prevArrowState === CarouselArrowState.active ||
          prevArrowState === CarouselArrowState.activeHover
          ? activeState
          : inactiveState
      );
    } else {
      setNextArrowState(
        nextArrowState === CarouselArrowState.active ||
          nextArrowState === CarouselArrowState.activeHover
          ? activeState
          : inactiveState
      );
    }
  }
  function setArrowStateByIndex(index: number) {
    if (nextSlideArrow.current != null || prevSlideArrow.current != null) {
      if (index > 0) {
        if (prevArrowState == CarouselArrowState.activeHover) {
          setPrevArrowState(CarouselArrowState.activeHover);
        } else {
          setPrevArrowState(CarouselArrowState.active);
        }
      }
      if (index == 0) {
        if (prevArrowState == CarouselArrowState.activeHover) {
          setPrevArrowState(CarouselArrowState.inactiveHover);
        } else {
          setPrevArrowState(CarouselArrowState.inactive);
        }
      }
      if (
        productQuantity > slidesAtOnce &&
        index < productQuantity - slidesAtOnce
      ) {
        if (nextArrowState == CarouselArrowState.activeHover) {
          setNextArrowState(CarouselArrowState.activeHover);
        } else {
          setNextArrowState(CarouselArrowState.active);
        }
      }
      console.log(index + " " + (productQuantity - slidesAtOnce));
      if (index == productQuantity - slidesAtOnce) {
        if (nextArrowState == CarouselArrowState.activeHover) {
          setNextArrowState(CarouselArrowState.inactiveHover);
        } else {
          setNextArrowState(CarouselArrowState.inactive);
        }
      }
    }
  }
  function getArrowColor(arrowState: CarouselArrowState) {
    switch (arrowState) {
      case CarouselArrowState.active:
        return CarouselArrowColors.active;
      case CarouselArrowState.activeHover:
        return CarouselArrowColors.activeHover;
      case CarouselArrowState.inactiveHover:
        return CarouselArrowColors.inactiveHover;
      default:
        return CarouselArrowColors.inactive;
    }
  }
  function setArrowColor() {
    if (nextSlideArrow.current != null || prevSlideArrow.current != null) {
      nextSlideArrow.current.style.color = getArrowColor(nextArrowState);
      prevSlideArrow.current.style.color = getArrowColor(prevArrowState);
    }
  }

  const carouselWidth = calculateCarouselWidth();

  function smoothScrollBy(
    element: HTMLElement,
    target: number,
    duration: number
  ): void {
    let start = element.scrollLeft;
    let change = Math.round(target - start);
    let startTime = performance.now();

    function animateScroll(currentTime: number): void {
      let elapsed = currentTime - startTime;
      element.scrollLeft = easeInOutQuad(elapsed, start, change, duration);
      if (elapsed < duration) {
        requestAnimationFrame(animateScroll);
      } else {
        element.scrollLeft = target;
        setIsAnimating(false);
      }
    }

    requestAnimationFrame(animateScroll);
  }

  useEffect(() => {
    setArrowColor();
  }, [prevArrowState, nextArrowState]);
  useEffect(() => {
    if (nextSlideArrow.current != null || prevSlideArrow.current != null) {
      setArrowStateByIndex(index);
    }
  }, [index]);

  const handleArrowClick = (arrowDirection: ArrowDirection) => {
    const scrollDiff = products[0].width + productMargin;

    console.log("Current ANimation state " + isAnimating);

    const currentScroll = listRef.current!.scrollLeft;

    if (arrowDirection == ArrowDirection.previous) {
      if (index > 0) {
        const targetScroll = currentScroll - scrollDiff;
        if (!isAnimating) {
          setIsAnimating(true);
          smoothScrollBy(listRef.current!, targetScroll, 250);
          setIndex(index - 1);
        }
      }
    } else {
      if (
        productQuantity > slidesAtOnce &&
        index + slidesAtOnce < props.products.length
      ) {
        const targetScroll = currentScroll + scrollDiff;
        if (!isAnimating) {
          setIsAnimating(true);
          smoothScrollBy(listRef.current!, targetScroll, 250);

          setIndex(index + 1);
        }
      }
    }
  };
  return (
    <div>
      <div
        style={{ width: `${carouselWidth}px` }}
        className="product_list"
        ref={listRef}
      >
        {props.products.map((item, index) => (
          <ProductCard
            key={index}
            product={{
              name: item.label,
              description: item.description,
              image: item.image,
              price: item.price,
              categories: ["men"],
              availableSize: ["medium", "large"],
            }}
            className={"featured_product-card"}
          />
        ))}
      </div>

      {props.products.length > slidesAtOnce ? (
        <div className="arrows_container">
          <div
            onPointerOver={(event) => {
              setArrowStateByEvent(event.nativeEvent, ArrowDirection.previous);
            }}
            onPointerLeave={(event) => {
              setArrowStateByEvent(event.nativeEvent, ArrowDirection.previous);
            }}
            onClick={() => handleArrowClick(ArrowDirection.previous)}
          >
            {" "}
            <FontAwesomeIcon
              className="ignore-events arrow-icon"
              ref={prevSlideArrow}
              icon={icons.faArrowLeft}
            ></FontAwesomeIcon>
          </div>

          <div></div>
          <div
            onClick={() => handleArrowClick(ArrowDirection.next)}
            onPointerOver={(event) => {
              setArrowStateByEvent(event.nativeEvent, ArrowDirection.next);
            }}
            onPointerLeave={(event) => {
              setArrowStateByEvent(event.nativeEvent, ArrowDirection.next);
            }}
          >
            <FontAwesomeIcon
              ref={nextSlideArrow}
              className="ignore-events arrow-icon"
              icon={icons.faArrowRight}
            ></FontAwesomeIcon>
          </div>
        </div>
      ) : (
        <div> </div>
      )}
    </div>
  );
}
