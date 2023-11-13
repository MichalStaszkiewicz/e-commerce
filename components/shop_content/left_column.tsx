import { MouseEventHandler, useEffect, useRef, useState } from "react";
import {
  CategoriesColorIndicator,
  CategoriesSize,
} from "../categories_color_indicator";
import { env } from "process";
import { win32 } from "path";
//TODO: Replace useState with keeping data in url as query
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

  return (
    <div className="left_column">
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
          <div>
            <RangeSlider />
          </div>

       
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
export function RangeSlider() {
  enum Slider {
    min,
    max,
  }
  const [inputMin, setMinValue] = useState(10);
  const [inputMax, setMaxVal] = useState(2000);
  const minVal = 1;
  const maxVal = 5000;

  const handleOnChange = (event: any, sliderType: Slider) => {
    if (sliderType === Slider.min) {
      const newMin = Math.min(event.target.value, inputMax);
      setMinValue(event.target.value);
      console.log("MIN " + newMin + " " + "MAX " + inputMax);
    } else {
      const newMax = Math.max(event.target.value, inputMin);
      console.log("MIN " + inputMin + " " + "MAX " + newMax);
      setMaxVal(event.target.value);
    }
  };
  let width = 130;
  return (
    <div className="range_slider_container">
      <input
        style={{
          height: "0",
          transform:"TranslateY(8.2px)",
          width:`${30}px`,
          position:"absolute",       zIndex: 1,
         
        }}
        type="range"
        min={minVal}
        max={maxVal}
        value={inputMin}
        onChange={(event) => {
          handleOnChange(event, Slider.min);
        }}
      />
      <input
        type="range"
        style={{    width:`${width}px`, }}
        min={minVal}
        max={maxVal}
        value={inputMax}
        onChange={(event) => {
          handleOnChange(event, Slider.max);
        }}
      />
         <p style={{ marginTop: "10px", fontSize: "14px" }}>
            ${inputMin} - $
            {inputMax}
          </p>
    </div>
  );
}
