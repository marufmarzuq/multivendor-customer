import { NavLink } from "react-router-dom";
import SimpleLoading from "../../../../../common/loading/SimpleLoading";
import PaginationCom from "../../../../../common/pagination/PaginationCom";
import BlogCard from "./BlogCard";
import blogsStyle from "./blogs.module.css";

const BlogList = (props) => {
  return (
    <>
      { props.loading ? ( <SimpleLoading /> ) :
				props.currentItems.length > 0 ? (
					props.currentItems.map((item, key) => {
							return (
								<div className={blogsStyle.blogsContainer} key={key}>
									<NavLink to={`/blog/${item.id}`}>
										<BlogCard item={item}/>
									</NavLink>
								</div>
								);
							})
						) :
						(	<p className="text-center">There is no item</p>)
			}
			{props.currentItems.length > 0 && (
          <PaginationCom
            currentItem={props.currentItems}
            perPage={props.perPage}
            pageCount={props.pageCount}
            currentPage={props.currentPage}
            setPerPage={props.setPerPage}
            setCurrentPage={props.setCurrentPage}
          />
        )}
    </>
  );
};

export default BlogList;
