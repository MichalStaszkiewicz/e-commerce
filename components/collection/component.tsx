import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import * as icons from "@fortawesome/free-solid-svg-icons";
import "@/components/collection/style.scss";
import AnimationOnVisible from "@/utils/utility-function";

export function Collection({
  label,
  image,
  index,
}: {
  label: string;
  image: string;
  index: number;
}) {
  const collectionContainerRef = useRef<HTMLDivElement>(null);
  const duration = index * 550;

  useEffect(() => {
    if (collectionContainerRef.current !== null) {
      let animateProps = { opacity: "1" };
      AnimationOnVisible({
        visibilityFactor: 0.3,
        elementRef: collectionContainerRef,
        keyFrames: [{ opacity: "0" }, animateProps],
        options: { duration: duration, easing: "ease-out" },
        animateProps: animateProps,
      });
    }
  }, [collectionContainerRef]);
  return (
    <div ref={collectionContainerRef} style={{}} className="collection_item">
      <div
        className="collection_background"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <p className="collection-title"> COLLECTION </p>
      <p className="collection-label">{label}</p>
    </div>
  );
}
