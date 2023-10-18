
import FadeOnVisible from "../fade_on_visible";
import { ProductCard } from "../product_card";
import { SortButton } from "../sort_button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import * as icons from '@fortawesome/free-solid-svg-icons';
export function RightColumn() {
  let temp: number[] = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <div className="right_column">
      <div className="header">
        <p style={{ width: "100px", fontWeight: "450", fontSize: "18px" }}>
          Shop All
        </p>
        <div className="sort_container">
          <SortButton
            label={"LATEST"}
            width={100}
            height={40}
            menuData={["Man", "Woman", "Children"]}
          />
          <SortButton
            label={"REFERENCE"}
            width={100}
            height={40}
            menuData={[
              "Relevance",
              "Name, A To Z",
              "Name, Z to A",
              "Price, low to high",
              "Price, high to low",
            ]}
          />
        </div>
      </div>
      <div className="list">
        {temp.map((item, index) => (
          <FadeOnVisible
            children={
              <ProductCard
                width={250}
                height={350}
                image={"/images/cloth_1.jpg"}
                label={"Tank top"}
                price={50}
                description={"Finding perfect product"}
              />
            }
          ></FadeOnVisible>
        ))}
      </div>

      <div className="next_page_row">
        <div className="button">
       <FontAwesomeIcon  icon={icons.faArrowLeft} style={{}}></FontAwesomeIcon>


        </div>
      </div>
    </div>
  );
}
