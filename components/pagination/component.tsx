"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";

import "@/components/shop-content/style.scss";
import { useState, useEffect } from "react";

type PaginationProps = {
  itemPerPage: number;
  itemQuantity: number;
  maxPaginationButtons: number;
  setPage: (index: number) => void;
};
export default function Pagination(props: PaginationProps) {
  const [reachedEnd, setReachedEnd] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const pagesNumber = () => {
      return Math.ceil(props.itemQuantity / props.itemPerPage);
    };

    setReachedEnd(currentPage < pagesNumber() - 1);
  }, [currentPage]);

  const generatePagination = function (): React.ReactElement<HTMLDivElement>[] {
    const pageCount = Math.ceil(props.itemQuantity / props.itemPerPage);

    let pageButtons: React.ReactElement<HTMLDivElement>[] = [];
    // if (props.maxPaginationButtons > pageCount) {
    //   props.maxPaginationButtons = pageCount;
    // }

    for (
      let i =
        currentPage + props.maxPaginationButtons > pageCount
          ? pageCount - props.maxPaginationButtons
          : currentPage;
      i < Math.min(currentPage + props.maxPaginationButtons, pageCount);
      i++
    ) {
      const active = currentPage === i;
      const buttonStyle = active
        ? { backgroundColor: "#7c74ea", color: "white" }
        : {};

      pageButtons.push(
        <div
          className="button"
          onClick={() => {
            setCurrentPage(i);
            props.setPage(i);
          }}
          style={buttonStyle}
        >
          {i + 1}
        </div>
      );
    }

    return pageButtons;
  };
  return (
    <div className="next_page_row">
      {currentPage > 0 ? (
        <div
          className="button"
          onClick={() => {
            props.setPage(currentPage - 1);
            setCurrentPage(currentPage - 1);
          }}
        >
          <FontAwesomeIcon icon={icons.faArrowLeft}></FontAwesomeIcon>
        </div>
      ) : (
        <div style={{ height: "40px", width: "40px" }}></div>
      )}
      {...generatePagination()}
      {reachedEnd ? (
        <div
          className="button"
          onClick={() => {
            props.setPage(currentPage + 1);
            setCurrentPage(currentPage + 1);
          }}
        >
          <FontAwesomeIcon icon={icons.faArrowRight}></FontAwesomeIcon>
        </div>
      ) : (
        <div style={{ height: "40px", width: "40px" }}></div>
      )}
    </div>
  );
}
