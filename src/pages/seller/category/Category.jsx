import React from "react";
import "./Category.css";
import AddCategory from "./components/AddCategory";
import CategoryTable from "./components/CategoryTable";

const Category = () => {
    return (
			<div className={`background`}>
				<div className="prod-grid-container">
					<CategoryTable />
					<AddCategory />
				</div>
			</div>
    );
};

export default Category;
