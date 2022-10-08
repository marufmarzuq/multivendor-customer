import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BreadCumb from "../../../../../common/breadcumb/BreadCumb";
import BlogSidebar from "../blogSidebar/BlogSidebar";
import blogDetailsStyle from "./blogDetails.module.css";
import BlogInfo from "./BlogInfo";
import authHeader from "../../../../services/auth-header";
import SimpleLoading from "../../../../../common/loading/SimpleLoading";
import { markutosFrontendApi } from "../../../../services/Api/api";

const BlogDetails = (props) => {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
	const [currentItems, setCurrentItems] = useState([]);
	const [recentPosts, setRecentPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [popularTags, setPopularTags] = useState([]);

  useEffect(() => {
    setLoading(true);
    markutosFrontendApi
      .get(`/blog-details?blog_id=${id}`,
        {
          headers: {
            Authorization: authHeader(),
          },
        }
      )
      .then((response) => {
        setLoading(false);
				setCurrentItems(response?.data);
      });
  }, []);

	useEffect(() => {
    setLoading(true);
    markutosFrontendApi
      .get(`/blogs/right-sidebar`,
        {
          headers: {
            Authorization: authHeader(),
          },
        }
      )
      .then((response) => {
        setLoading(false);
				setCategories(response?.data?.categories)
				setPopularTags(response?.data?.popular_tags)
				setRecentPosts(response?.data?.recent_posts)
      });
  },[]);

  return (
		loading ? <SimpleLoading/> :
		(
			<div>
			<BreadCumb data={currentItems?.title} />
			<div className={`container ${blogDetailsStyle.blogDetailsContainer}`}>
				<div>
					<BlogInfo currentItems={currentItems}/>
				</div>
				<div className="mt-5 mt-md-0">
					<BlogSidebar
          recentPosts={recentPosts}
          categories={categories}
          popularTags={popularTags}
          // setSearch={setSearch}
          // setTag={setTag}
          // setCategory={setCategory}
          // search={search}
          />
				</div>
			</div>
		</div>
		)
  );
};

export default BlogDetails;
