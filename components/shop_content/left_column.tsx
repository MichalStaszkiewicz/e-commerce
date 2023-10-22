import { MouseEventHandler, useEffect, useState } from "react";
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
  const [currentMinX, setCurrentMinX] = useState(0);
  const [currentMaxX, setCurrentMaxX] = useState(100);
  const [isMouseMinDown, setisMouseMinDown] = useState(false);
  const [isMouseMaxDown, setisMouseMaxDown] = useState(false);

  const handlePointerPosition = (event: any) => {
    let newMovement: number = event.clientX - (22 / 100) * window.innerWidth;
    let sliderMin = 0;
    let sliderMax = (10 / 100) * window.innerWidth;

    console.log("current min x : " + currentMinX);
    if (isMouseMinDown) {
      if (
        newMovement > sliderMin &&
        newMovement < sliderMax &&
        newMovement < currentMaxX
      ) {
        setCurrentMinX(newMovement);
      }
    } else if (isMouseMaxDown) {
      if (newMovement > currentMinX && newMovement < sliderMax) {
        setCurrentMaxX(newMovement);
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

    console.log("mouse UP!");
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
            <div className="slider">
              <div
                className="slider_fill"
                style={{
                  width: `${currentMaxX - currentMinX}px`,transform:`TranslateX(${currentMinX}px)`
                }}
              ></div>
            </div>
            <div
              style={{
                transform: `Translate(${currentMinX}px,-12px)`,
              }}
              onMouseDown={(event) => handleMouseDown(event, Slider.Min)}
              onMouseUp={(event) => handleMouseUp(event)}
              className="slider_pointer"
            >
              {" "}
            </div>
            <div
              style={{
                transform: `Translate(${currentMaxX}px,-28px)`,
              }}
              onMouseDown={(event) => handleMouseDown(event, Slider.Max)}
              onMouseUp={(event) => handleMouseUp(event,)}
              className="slider_pointer"
            >
              {" "}
            </div>
          </div>
          <p style={{ marginTop: "10px", fontSize: "14px" }}>$76 - $262</p>
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
