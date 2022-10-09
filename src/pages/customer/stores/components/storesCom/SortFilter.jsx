import { BsFilter, BsGrid3X3Gap } from "react-icons/bs";
import { AiOutlineBars, AiOutlineCheckCircle } from "react-icons/ai";

import sortStyle from "./stores.module.css";
import { useState } from "react";
const SortFilter = ({ setLayout , totalStores , setSearch , search}) => {
  const [sortInputShow, setSortInputShow] = useState(false);
  return (
    <div>
      <div className={` mt-4 ${sortStyle.sortBar}`}>
        <div className={sortStyle.sortBarLeft}>
          <h6>Total stores: {totalStores}</h6>
        </div>
        <div className={sortStyle.sortBarRight}>
          <button
            onClick={() => setSortInputShow(!sortInputShow)}
            className={`btn btn-primary ${sortStyle.filterBtn}`}
          >
            <BsFilter /> Filter
          </button>
          <button
            onClick={() => setLayout("grid")}
            className={`btn btn-outline-primary ${sortStyle.layoutBtn}`}
          >
            <BsGrid3X3Gap />
          </button>
          <button
            onClick={() => setLayout("list")}
            className={`btn btn-outline-primary ${sortStyle.layoutBtn}`}
          >
            <AiOutlineBars />
          </button>
        </div>
      </div>

      <div
        className={` mt-2 ${
          sortInputShow ? sortStyle.sortInputShow : sortStyle.sortInput
        }`}
      >
        <div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name=""
              id=""
              aria-describedby="helpId"
              placeholder="Search Store..."
              onChange={(e)=>setSearch(e.target.value)}
              value={search}
            />
          </div>
          {/* <div className={sortStyle.sortBarRight}>
            <button className={`btn btn-primary mt-3 ${sortStyle.filterBtn}`}>
              <AiOutlineCheckCircle /> Apply
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SortFilter;
