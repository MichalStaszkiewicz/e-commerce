"use client";
import FadeOnVisible from "../fade-on-visible";
import { ProductCard } from "../product-card";
import { SortButton } from "../sort-button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import * as icons from "@fortawesome/free-solid-svg-icons";
export function RightColumn() {
  let productList: number[] = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ];

  const [currentPage, setCurrentPage] = useState(0);
  let productsPerPage = 9;
  let paginationPagesCountAtOnce = 3;

  function handlePageChange(index: number): void {
    setCurrentPage(index);
  }

  const generatePagination = function (): React.ReactElement<HTMLDivElement>[] {
    const pageCount = Math.ceil(productList.length / productsPerPage);

    let pageButtons: React.ReactElement<HTMLDivElement>[] = [];
    if (paginationPagesCountAtOnce > pageCount) {
      paginationPagesCountAtOnce = pageCount;
    }

    for (
      let i =
        currentPage + paginationPagesCountAtOnce > pageCount
          ? pageCount - paginationPagesCountAtOnce
          : currentPage;
      i < Math.min(currentPage + paginationPagesCountAtOnce, pageCount);
      i++
    ) {
      const active = currentPage === i;
      const buttonStyle = active
        ? { backgroundColor: "#7c74ea", color: "white" }
        : {};

      pageButtons.push(
        <div
          className="button"
          onClick={() => handlePageChange(i)}
          style={buttonStyle}
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
      return Math.ceil(productList.length / productsPerPage);
    };

    setReachedEnd(currentPage < pagesNumber() - 1);
  }, [currentPage]);
  const calculateStartIndex = function () {
    return currentPage * productsPerPage;
  };
  const calculateEndIndex = () => {
    const startIndex = calculateStartIndex();
    const endIndex = Math.min(startIndex + productsPerPage, productList.length);
    return endIndex;
  };

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
        {productList
          .slice(calculateStartIndex() as number, calculateEndIndex())
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
        {currentPage > 0 ? (
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
        {...generatePagination()}
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
