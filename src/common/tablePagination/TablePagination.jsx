import { useState } from "react";
import tablePagination from "./tablePagination.css";
import {
  MdFirstPage,
  MdNavigateBefore,
  MdLastPage,
  MdNavigateNext,
} from "react-icons/md";
import Select from "react-select";

const TablePagination = () => {
  const [currPage, setCurrPage] = useState(1);
  const totalPages = 10;
  const [pageSize, setPageSize] = useState({ value: 15, label: 15 });
  const handlePagination = (type) => {
    if (type === "next") setCurrPage(currPage + 1);
    if (type === "previous") setCurrPage(currPage - 1);
    if (type === "first_page") setCurrPage(1);
    if (type === "last_page") setCurrPage(totalPages);
  };

  const options = [
    { value: 10, label: 10 },
    { value: 15, label: 15 },
    { value: 20, label: 20 },
  ];

  // console.log(pageSize);

  return (
    <>
      {true ? (
        <div className="table-pagination-container">
          <div className="table-pagination-right">
            <Select
              menuPlacement="top"
              options={options}
              onChange={(value) => setPageSize(value)}
              value={pageSize}
            />
            <div className="table-pagination">
              <button
                onClick={() => handlePagination("first_page")}
                className={currPage === 1 ? "disabled-btn" : null}
              >
                <MdFirstPage />
              </button>
              <button
                onClick={() => handlePagination("previous")}
                className={currPage === 1 ? "disabled-btn" : null}
              >
                <MdNavigateBefore />
              </button>
              <p className="pagination-index">
                {currPage} of {totalPages}
              </p>
              <button
                onClick={() => handlePagination("next")}
                className={currPage === totalPages ? "disabled-btn" : null}
              >
                <MdNavigateNext />
              </button>
              <button
                onClick={() => handlePagination("last_page")}
                className={currPage === totalPages ? "disabled-btn" : null}
              >
                <MdLastPage />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default TablePagination;
