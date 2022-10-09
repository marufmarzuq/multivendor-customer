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
  setCurrentPage,
}) => {


  return (
    <>
      {currentItem.length > 0 && (
        <div className={paginationStyle.paginationContainer}>
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
