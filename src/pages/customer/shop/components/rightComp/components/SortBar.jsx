
import { BsGrid3X3Gap } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai";
const SortBar = ({setLayout,setSortBy}) => {
  return (
		<div className="sort-bar">
			<div className="sort-bar-left">
				<div>
					<button onClick={() => setLayout("grid")}>
						<BsGrid3X3Gap />
					</button>
				</div>
				<div>
					<button onClick={() => setLayout("list")}>
						<AiOutlineBars />
					</button>
				</div>
			</div>
			<div className="sort-bar-right">
				<div className="form-group">
					<label htmlFor="">Sort By:</label>
					<select className="form-control" onChange={(e)=>setSortBy(e.target.value)} name="sort">
						<option>Default</option>
						<option>Sale</option>
						<option>Price</option>
					</select>
				</div>
			</div>
		</div>
  );
};

export default SortBar;
