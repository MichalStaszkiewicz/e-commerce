import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import * as icons from "@fortawesome/free-solid-svg-icons";
import "@/components/benefit/style.scss";
import AnimationOnVisible from "@/utils/utility-function";

export function Benefit({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) {
  const benefitContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (benefitContainerRef.current !== null) {
      const duration = index * 450;
      let animateProps = { transform: "translateY(0%)", opacity: "1" };
      AnimationOnVisible({
        visibilityFactor: 0.6,
        elementRef: benefitContainerRef,
        keyFrames: [
          { opacity: "0", transform: "translateY(70%)" },
          animateProps,
        ],
        options: { duration: duration, easing: "ease-out" },
        animateProps: animateProps,
      });
    }
  }, [benefitContainerRef]);
  return (
    <div className="benefit_container" ref={benefitContainerRef}>
      <div className="benefit_container_icon">
        <FontAwesomeIcon icon={icons.faShippingFast} />
      </div>
      <div className="benefit_container_desc">
        <p className="title"> {title}</p>
        <p className="desc">{description} </p>
      </div>
    </div>
  );
}
