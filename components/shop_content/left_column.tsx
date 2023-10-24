import { MouseEventHandler, useEffect, useRef, useState } from "react";
import {
  CategoriesColorIndicator,
  CategoriesSize,
} from "../categories_color_indicator";
import { env } from "process";
import { win32 } from "path";

export function LeftColumn() {
  enum Slider {
    Min = "Min",
    Max = "Max",
  }
  const [currentMinX, setCurrentMinX] = useState(1);
  const [currentMaxX, setCurrentMaxX] = useState(100);
  const [init, setInit] = useState(false);
  const [isMouseMinDown, setisMouseMinDown] = useState(false);
  const [isMouseMaxDown, setisMouseMaxDown] = useState(false);
  const [sliderWidth, setSliderWidth] = useState(1);
  const sliderRef = useRef<HTMLDivElement>(null);
  const maxPrice = 5000;

  const getPrice = (currentOffset: any) => {
    const percentage = (currentOffset / sliderWidth) * 100;

    return (percentage / 100) * maxPrice;
  };
  useEffect(() => {
    if (sliderRef.current && init == false) {
      setSliderWidth(sliderRef.current.getBoundingClientRect().width -10);
      let newSliderWidth = sliderRef.current.getBoundingClientRect().width-10;
  
      setCurrentMaxX(newSliderWidth);

      setInit(true);
    }
  });

  const handlePointerPosition = (event: any) => {
    let newMovement: number = event.movementX ;
   console.log(newMovement)
    if (isMouseMinDown) {
      if (
        0 < newMovement + currentMinX&&
        newMovement + currentMinX < sliderWidth &&
        newMovement + currentMinX < currentMaxX
      ) {
        setCurrentMinX(newMovement + currentMinX);
      }else{
        setCurrentMinX(1);
      }
    } else if (isMouseMaxDown) {
      if (newMovement + currentMaxX > currentMinX && newMovement + currentMaxX < sliderWidth) {
        setCurrentMaxX(newMovement + currentMaxX);
      }else{
        setCurrentMaxX(sliderWidth);
      }
    }

    event.preventDefault();
  };

  const handleMouseDown = (event: any, slider: Slider) => {
    if (slider == Slider.Min) {
      setisMouseMinDown(true);
    } else {
      setisMouseMaxDown(true);
    }

    document.addEventListener("mousemove", handlePointerPosition);
  };

  const handleMouseUp = (event: any) => {
    setisMouseMinDown(false);

    setisMouseMaxDown(false);

    document.removeEventListener("mouseup", handlePointerPosition);
  };
  const handleMouseOut = (event: any) => {
    setisMouseMinDown(false);
    setisMouseMaxDown(false);
  };

  return (
    <div
      className="left_column"
      onMouseMove={handlePointerPosition}
      onMouseUp={(event) => handleMouseUp(event)}
      onMouseLeave={handleMouseOut}
    >
      <div className="categories">
        <p className="categories_header" style={{ marginTop: "20px" }}>
          CATEGORIES
        </p>
        <ul className="list">
          <li className="list_element">
            <div>Men</div> <p style={{ color: "black" }}>(2,220)</p>
          </li>
          <li className="list_element">
            <div>Woman</div> <p style={{ color: "black" }}>(2,550)</p>
          </li>
          <li className="list_element">
            <div>Children</div>
            <p style={{ color: "black" }}>(2,124)</p>
          </li>
        </ul>
      </div>

      <div className="filters">
        <div className="container">
          <p className="categories_header">FILTER BY PRICE</p>
          <div className="slider_container">
            <div className="slider" ref={sliderRef}>
              <div
                className="slider_fill"
                style={{
                  width: `${currentMaxX - currentMinX}px`,
                  transform: `TranslateX(${currentMinX}px)`,
                }}
              ></div>
            </div>
            <div
              style={{
                transform: `Translate(${currentMinX}px,-3px)`,
              }}
              onMouseDown={(event) => handleMouseDown(event, Slider.Min)}
              onMouseUp={(event) => handleMouseUp(event)}
              className="slider_pointer"
            >
              {" "}
            </div>
            <div
              style={{
                transform: `Translate(${currentMaxX}px,-3px)`,
              }}
              onMouseDown={(event) => handleMouseDown(event, Slider.Max)}
              onMouseUp={(event) => handleMouseUp(event)}
              className="slider_pointer"
            >
              {" "}
            </div>
          </div>
          <p style={{ marginTop: "10px", fontSize: "14px" }}>
            ${getPrice(currentMinX).toFixed(0)} - $
            {getPrice(currentMaxX).toFixed(0)}
          </p>
          <p className="categories_header" style={{ marginTop: "20px" }}>
            SIZE
          </p>
          <div style={{ marginTop: "10px" }}></div>
          <ul className="size_list">
            <CategoriesSize label=" Small (2,319)" />
            <CategoriesSize label=" Medium (1,282)" />
            <CategoriesSize label=" Large (1,392)" />
          </ul>
          <p className="categories_header" style={{ marginTop: "20px" }}>
            COLOR
          </p>
          <div style={{ marginTop: "10px" }}></div>
          <div className="color_list">
            <CategoriesColorIndicator color={"red"} label={"Red"} />
            <CategoriesColorIndicator color={"green"} label={"Green"} />
            <CategoriesColorIndicator color={"aqua"} label={"Blue"} />
            <CategoriesColorIndicator color={"purple"} label={"Purple"} />
          </div>
        </div>
      </div>
    </div>
  );
}
