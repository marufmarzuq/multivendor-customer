import { BsGrid3X3Gap } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai";
const SortFilter = () => {
  return (
		<div className="sort-bar mt-4">
			<div className="sort-bar-left"> Total stores: 8</div>
			<div className="sort-bar-right">
				<button>
					Filter
				</button>
				<button>
					<BsGrid3X3Gap />
				</button>
				<button>
					<AiOutlineBars />
				</button>
			</div>
	</div>
  );
};

export default SortFilter;
