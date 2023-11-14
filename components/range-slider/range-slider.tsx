import { useState } from "react";

export function RangeSlider({
  minVal,
  maxVal,
  gap,
}: {
  minVal: number;
  maxVal: number;
  gap: number;
}) {
  enum Slider {
    min,
    max,
  }
  const [inputMin, setMinValue] = useState(10);
  const [inputMax, setMaxVal] = useState(2000);

  const handleOnChange = (event: any, sliderType: Slider) => {
    if (sliderType === Slider.min) {
      const newMin = Math.min(event.target.value, inputMax - gap);

      setMinValue(newMin);
    } else {
      const newMax = Math.max(event.target.value, inputMin + gap);

      setMaxVal(newMax);
    }
  };

  return (
    <div className="range_slider_container">
      <div className="slider">
        <div
          style={{
            left: `${(inputMin / maxVal) * 100}%`,
            right: `${100 - (inputMax / maxVal) * 100}%`,
          }}
          className="progress"
        ></div>
      </div>
      <div className="input_box">
        <input
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
          min={minVal}
          max={maxVal}
          value={inputMax}
          onChange={(event) => {
            handleOnChange(event, Slider.max);
          }}
        />
      </div>
      <p style={{ marginTop: "10px", fontSize: "14px" }}>
        ${inputMin} - ${inputMax}
      </p>
    </div>
  );
}
