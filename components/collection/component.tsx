import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import * as icons from "@fortawesome/free-solid-svg-icons";
import "@/components/collection/style.scss";
export function Collection({ label, image }: { label: string; image: string }) {
  return (
    <div className="collection_item">
      <div
        className="collection_background"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <p className="collection-title"> COLLECTIONS </p>
      <p className="collection-label">{label}</p>
    </div>
  );
}
