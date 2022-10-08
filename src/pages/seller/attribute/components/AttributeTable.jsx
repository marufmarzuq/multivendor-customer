import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import SimpleLoading from "../../../../common/loading/SimpleLoading";
import PaginationCom from "../../../../common/pagination/PaginationCom";
import { API_URL } from "../../../services/Api/api";
import authHeader from "../../../services/auth-header";
import { useDebounce } from "../../../../hooks/useDebounce";

const AttributeTable = () => {

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const debouncedSearchTerm = useDebounce(search, 500);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		setLoading(true);
		axios.get(
		`${API_URL}/attributes?search_value=${search}&per_page=${perPage}&page=${currentPage}`,
		{
			headers: {
				"Authorization": authHeader(),
			}
		}).then((response) => {
			setLoading(false);
			setCurrentItems(response?.data?.data);
			setCurrentPage(response?.data?.current_page);
			setPerPage(response?.data?.per_page);
			setPageCount(response?.data?.last_page);
		})
  }, [perPage, currentPage, search ]);

	useEffect(() => {
    if (debouncedSearchTerm) {
      setSearch(debouncedSearchTerm);
    } else {
      setCurrentItems([]);
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="single-widget">
			<div className="table-top-header">
				<div className="table-title">All Attributes</div>
				<div className="tableFilters">
					<input
						type="text"
						className="table-search-input"
						placeholder="Search Attributes by name"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
        </div>
			</div>
      <div className="widget-container">
        <div
          className="table-header"
          style={{ gridTemplateColumns: "50px auto 100px" }}
        >
          <div className="text-center">#</div>
          <div>Name</div>
          <div>Actions</div>
        </div>
        <div>
				{ loading ? (
					<SimpleLoading />
					) : (
						currentItems.length > 0 &&
						currentItems.map((attribute, index) => (
            <div key={index}>
              <div
                className="table-row"
                style={{ gridTemplateColumns: "50px auto 100px" }}
              >
                <div className="text-center">{attribute.id}</div>
                <div>{attribute.name}</div>
                <div className="action-column">
                  <button className="table-btn tb-edit">
                    <FiEdit />
                  </button>
                  <button className="table-btn tb-delete">
                    <RiDeleteBin6Line />
                  </button>
                </div>
              </div>
            </div>
						))
					)}
        </div>
				{currentItems.length > 0 && (
					<PaginationCom
						currentItem={currentItems}
						perPage={perPage}
						pageCount={pageCount}
						currentPage={currentPage}
						setPerPage={setPerPage}
						setCurrentPage={setCurrentPage}
					/>
				)}
      </div>
    </div>
  );
};

export default AttributeTable;
