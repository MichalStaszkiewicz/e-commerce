import FadeOnVisible from "../fade_on_visible";
import { ProductCard } from "../product_card";
import { SortButton } from "../sort_button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import * as icons from "@fortawesome/free-solid-svg-icons";
export function RightColumn() {
  let temp: number[] = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ];
  let maxElements = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const pagesNumber = function (): React.ReactElement<HTMLDivElement>[] {
    let pages = 0;
    for (let i = 0; i < temp.length; i++) {
      if (i % maxElements == 0) {
        pages++;
      }
    }
    if (temp.length % pages == 1) {
      pages++;
    }
    let pageButtons: React.ReactElement<HTMLDivElement>[] = [];
    for (let i = 0; i < pages; i++) {
      pageButtons.push(
        <div
          onClick={() => {
            setCurrentPage(i + 1);
          }}
          style={{
            backgroundColor: currentPage == i + 1 ? "#7c74ea" : "white",
            color: currentPage == i + 1 ? "white" : "#7c74ea",
          }}
          className="button"
        >
          {i + 1}
        </div>
      );
    }

    return pageButtons;
  };
  const [reachedEnd, setReachedEnd] = useState(false);

  useEffect(() => {
    const pagesNumber = () => {
      let pages = 0;
      for (let i = 0; i < temp.length; i++) {
        if (i % maxElements == 0) {
          pages++;
        }
      }
      if (temp.length % pages == 1) {
        pages++;
      }
      return pages;
    };

    setReachedEnd(currentPage < pagesNumber());
  }, [currentPage]);
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
        {temp
          .slice(
            (currentPage - 1) * maxElements == 0
              ? (currentPage - 1) * maxElements
              : (currentPage - 1) * maxElements - 1,
            currentPage > 1
              ? currentPage * maxElements - 1
              : currentPage * maxElements
          )
          .map((item, index) => (
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
        {currentPage > 1 ? (
          <div
            className="button"
            onClick={() => {
              setCurrentPage(currentPage - 1);
            }}
          >
            <FontAwesomeIcon
              icon={icons.faArrowLeft}
              style={{}}
            ></FontAwesomeIcon>
          </div>
        ) : (
          <div style={{ height: "40px", width: "40px" }}></div>
        )}
        {...pagesNumber()}
        {reachedEnd ? (
          <div
            className="button"
            onClick={() => {
              setCurrentPage(currentPage + 1);
            }}
          >
            <FontAwesomeIcon
              icon={icons.faArrowRight}
              style={{}}
            ></FontAwesomeIcon>
          </div>
        ) : (
          <div style={{ height: "40px", width: "40px" }}></div>
        )}
      </div>
    </div>
  );
}
