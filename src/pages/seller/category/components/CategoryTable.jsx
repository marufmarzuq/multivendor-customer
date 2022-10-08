import React, { useState, useEffect } from "react";
import axios from "axios";
import { HiOutlineChevronRight } from "react-icons/hi";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { toast } from "react-toastify";
import SimpleLoading from "../../../../common/loading/SimpleLoading";
import PaginationCom from "../../../../common/pagination/PaginationCom";
import { API_URL } from "../../../services/Api/api";
import authHeader from "../../../services/auth-header";
import { useDebounce } from "../../../../hooks/useDebounce";

const CategoryTable = () => {
	const [current, setCurrent] 			= useState(null);
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
		`${API_URL}/all-category?search_value=${search}&per_page=${perPage}&page=${currentPage}`,
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

	const deleteCategoryItem = (id) => {
		axios.get(`${API_URL}/delete-category?category_id=${id}`, {
			headers: {
				"Authorization":    authHeader(),
				"Content-Type":     "application/json",
			}
		})
		.then((res) => {
			toast(res?.data?.message);
		}).catch(error => {})
	};

	const toggle = (index) => {
		if (index === current) setCurrent(null);
		else setCurrent(index);
	};

	return (
		<div className="single-widget">
			<div className="table-top-header">
				<div className="table-title">All Categories</div>
				<div className="tableFilters">
					<input
						type="text"
						className="table-search-input"
						placeholder="Search category by name"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
        </div>
			</div>
		<div className="widget-container">
			<div
				className="table-header"
				style={{ gridTemplateColumns: "50px 50px auto 100px 120px" }}
			>
			<div></div>
			<div>#</div>
			<div>Name</div>
			<div>Banner</div>
			<div className="text-center">Options</div>
			</div>
			<div>
				{loading ? (
					<SimpleLoading />
				) : (
					currentItems?.map((category, index) => (
						<div key={index}>
							<div
								className="table-row"
								style={{ gridTemplateColumns: "50px 50px auto 100px 120px" }}
							>
								<div
								className="action-column"
								style={{ cursor: "pointer" }}
								onClick={() => toggle(index)}
								>
								<HiOutlineChevronRight />
								</div>
								<div>{category.id}</div>
								<div>{category.name}</div>
								<div className="table-img">
								<img src={category.banner} alt={category?.name} />
								</div>
								<div className="action-column">
								<button title="Edit" className="table-btn tb-edit">
									<FiEdit />
								</button>
								<button title="Delete" onClick={() => deleteCategoryItem(category?.id)} className="table-btn tb-delete">
									<RiDeleteBinLine />
								</button>
								</div>
							</div>
							{current === index && (
								<div className="row-extra">
								<div className="row-extra-row">
									<div>Parent Category</div>
									<div>{category.parent} times</div>
								</div>
								<div className="row-extra-row">
									<div>Order Level</div>
									<div>{category.order_level}</div>
								</div>
								<div className="row-extra-row">
									<div>Level</div>
									<div>{category.level}</div>
								</div>
								<div className="row-extra-row">
									<div>Commission</div>
									<div>{category.commission}.00 %</div>
								</div>
								<div className="row-extra-row">
									<div>Featured</div>
									<label className="confi-switch">
									<input
										type="checkbox"
										defaultChecked={category.featured}
									/>
									<span className="slider round"></span>
									</label>
								</div>
								</div>
							)}
						</div>
					))
				)
			}
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

export default CategoryTable;
