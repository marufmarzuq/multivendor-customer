import React from "react";
import ReactPaginate from "react-paginate";
import Select from "react-select";
import {
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
  AiOutlineRight,
} from "react-icons/ai";
import paginationStyle from "./frontendPagination.module.css";

const FrontendPagination = ({
  currentItem,
  perPage,
  pageCount,
  currentPage,
  setPerPage,
  setCurrentPage,
}) => {
  const options = [
    { value: "5", label: "5" },
    { value: "10", label: "10" },
    { value: "15", label: "15" },
    { value: "20", label: "20" },
  ];

  return (
    <>
      {currentItem.length > 0 && (
        <div className={paginationStyle.paginationContainer}>
          <Select
            options={options}
            className={paginationStyle.paginationSelect}
            value={{ label: perPage, value: perPage }}
            defaultValue={{ label: 10, value: 10 }}
            onChange={(e) => setPerPage(e.value)}
          />

          <ReactPaginate
            previousLinkClassName={paginationStyle.prevBtn}
            nextLinkClassName={paginationStyle.nextBtn}
            activeClassName={paginationStyle.activeBtn}
            breakLabel="..."
            nextLabel={<AiOutlineDoubleRight />}
            marginPagesDisplayed={2}
            onPageChange={(e) => {
              setCurrentPage(e.selected + 1);
            }}
            pageRangeDisplayed={perPage}
            pageCount={Math.ceil(pageCount)}
            previousLabel={<AiOutlineDoubleLeft />}
            containerClassName="pagination"
            pageClassName="page__count"
            activeLinkClassName="active"
            forcePage={currentPage - 1}
          />
        </div>
      )}
    </>
  );
};

export default FrontendPagination;
