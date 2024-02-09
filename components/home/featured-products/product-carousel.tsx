import ProductCard from "@/components/product-card/component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useRef, useState, useEffect, PointerEventHandler } from "react";
import { CarouselArrowState, ArrowDirection } from "./enum";
import * as icons from "@fortawesome/free-solid-svg-icons";
import { easeInOutQuad } from "@/animations/animations";

export default function ProductCarousel({ props }: { props: CarouselProps }) {
  const listRef = useRef<HTMLDivElement>(null);
  const { slidesAtOnce, products } = props;
  const productQuantity = products.length;

  const nextSlideArrow = useRef<any>(null);
  const prevSlideArrow = useRef<any>(null);
  const [nextArrowState, setNextArrowState] = useState<CarouselArrowState>(
    CarouselArrowState.active
  );
  const [prevArrowState, setPrevArrowState] = useState<CarouselArrowState>(
    CarouselArrowState.active
  );

  const [index, setIndex] = useState<number>(0);

  function calculateCarouselWidth() {
    if (products.length == 0) {
      throw new Error("Products array cant be  empty");
    }
    if (products.length >= props.slidesAtOnce) {
      return slidesAtOnce * products[0].width;
    } else {
      return products.length * products[0].width;
    }
  }
  function setArrowStateByEvent(
    event: PointerEvent,
    arrowDirection: ArrowDirection
  ) {
    console.log("EVENT TYPE  " + event.type);
    if (event.type == "pointerover") {
      if (arrowDirection == ArrowDirection.previous) {
        if (prevArrowState == CarouselArrowState.active) {
          setPrevArrowState(CarouselArrowState.activeHover);
        } else {
          setPrevArrowState(CarouselArrowState.inactiveHover);
        }
      } else {
        if (nextArrowState == CarouselArrowState.active) {
          setNextArrowState(CarouselArrowState.activeHover);
        } else {
          setNextArrowState(CarouselArrowState.inactiveHover);
        }
      }
    } else {
      if (arrowDirection == ArrowDirection.previous) {
        if (prevArrowState == CarouselArrowState.activeHover) {
          setPrevArrowState(CarouselArrowState.active);
        } else {
          setPrevArrowState(CarouselArrowState.inactive);
        }
      } else {
        if (nextArrowState == CarouselArrowState.activeHover) {
          setNextArrowState(CarouselArrowState.active);
        } else {
          setNextArrowState(CarouselArrowState.inactive);
        }
      }
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
    if (arrowState == CarouselArrowState.active) {
      return "#494F55";
    }
    if (arrowState == CarouselArrowState.activeHover) {
      return "#0b0b0b";
    }
    if (arrowState == CarouselArrowState.inactiveHover) {
      return "#B7B9B9";
    } else {
      return "#cdcfd0";
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
    let change = target - start;
    let startTime = performance.now();

    function animateScroll(currentTime: number): void {
      let elapsed = currentTime - startTime;
      element.scrollLeft = easeInOutQuad(elapsed, start, change, duration);
      if (elapsed < duration) {
        requestAnimationFrame(animateScroll);
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
    const scrollDiff = products[0].width;

    const currentScroll = listRef.current!.scrollLeft;

    if (arrowDirection == ArrowDirection.previous) {
      if (index > 0) {
        const targetScroll = currentScroll - scrollDiff;

        smoothScrollBy(listRef.current!, targetScroll, 250);
        setIndex(index - 1);
      }
    } else {
      if (
        productQuantity > slidesAtOnce &&
        index + slidesAtOnce < props.products.length
      ) {
        const targetScroll = currentScroll + scrollDiff;

        smoothScrollBy(listRef.current!, targetScroll, 250);

        setIndex(index + 1);
      }
    }
  };

  return (
    <div>
      <div
        style={{ width: `${carouselWidth}px`, scrollBehavior: "smooth" }}
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
            width={`${item.width}px`}
            height={`${item.height}px`}
          />
        ))}
      </div>

      {props.products.length > slidesAtOnce ? (
        <div className="arrows_container">
          <div
            style={{ cursor: "pointer" }}
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
              className="ignore-events"
              ref={prevSlideArrow}
              style={{ height: "25px" }}
              icon={icons.faArrowLeft}
            ></FontAwesomeIcon>
          </div>

          <div style={{ width: "50px" }}></div>
          <div
            style={{ cursor: "pointer" }}
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
              className="ignore-events"
              style={{ height: "25px" }}
              icon={icons.faArrowRight}
            ></FontAwesomeIcon>
          </div>
        </div>
      ) : (
        <div className="arrows_container"> </div>
      )}
    </div>
  );
}
