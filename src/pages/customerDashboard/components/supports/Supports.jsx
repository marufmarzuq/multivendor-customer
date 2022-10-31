import {useState,useEffect} from "react";
import supportStyle from "./supports.module.css";
import { BsEyeFill } from "react-icons/bs";
import "react-loading-skeleton/dist/skeleton.css";
import { markutosFrontendApi } from "../../../services/Api/api";
import customerAuthHeader from "../../../services/customer-auth-header";
import SimpleLoading from "../../../../common/loading/SimpleLoading";
import { priceFormat } from "../../../../hooks/helper";
import FrontendPagination from "../../../../common/pagination/frontend/FrontendPagination";

const Supports = () => {
  const [loading, setLoading] = useState(false);
  const [currentItems, setCurrentItems] = useState([]);
	const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    markutosFrontendApi
      .get(`dashboard/support-tickets?per_page=10&page=${currentPage}`,
      {
				headers: {
					Authorization: customerAuthHeader(),
				},
			}
      )
      .then((response) => {
        setLoading(false);
				setCurrentItems(response?.data.data);
				setLoading(false);
        setCurrentPage(response?.data?.current_page);
        setPageCount(response?.data?.last_page);
		});
	}, [currentPage]);

  return (
    <div>
      <h4>Supports</h4>
      <section className={` ${supportStyle.tableData}`}>
        <table>
          <thead>
            <tr>
              <th><small>Ticket ID</small></th>
              <th><small>Subject</small></th>
              <th><small> Status</small></th>
              <th><small> Last Update</small></th>
              <th className="text-center"><small>Actions</small></th>
            </tr>
          </thead>

          <tbody>
          {
          loading ? (<tr className="w-100"><td className="w-100"><SimpleLoading /></td></tr>) :
						(
							(
								currentItems.map((item,index)=>{
								return(
									<tr key={index}>
									<td><small>{item.code}</small></td>
									<td><small>{item.subject}</small></td>
									<td><small>{item.status}</small></td>
									<td><small>{item.updated_at}</small></td>
									<td className="text-center">
										<small>
											<button className="btn">
												<BsEyeFill />
											</button>
										</small>
									</td>
								</tr>
								)
								})
							)
						)
          }
          </tbody>
        </table>
				{currentItems.length > 0 && (
					<FrontendPagination
						currentItem={currentItems}
						perPage={10}
						pageCount={pageCount}
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
					/>
				)}
      </section>
    </div>
  );
};

export default Supports;
