import { useEffect, useState } from "react";
import blogStyle from "./blog.module.css";
import BreadCumb from "../../../common/breadcumb/BreadCumb";
import BlogSidebar from "./components/blogSidebar/BlogSidebar";
import BlogList from "./components/blogs/BlogList";
import { markutosFrontendApi } from "../../services/Api/api";
import authHeader from "../../services/auth-header";

const Blog = () => {
  const [loading, setLoading] = useState(false);
	const [perPage, setPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const [tag, setTag] = useState("");
  const [category, setCategory] = useState("");
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [recentPosts, setRecentPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [popularTags, setPopularTags] = useState([]);

  useEffect(() => {
    setLoading(true);
    markutosFrontendApi
      .get(`/all-blogs?per_page=${perPage}&search_value=${search}&tag=${tag}&per_page=${perPage}&page=${currentPage}`,
        {
          headers: {
            Authorization: authHeader(),
          },
        }
      )
      .then((response) => {
        setLoading(false);
				setCurrentItems(response?.data?.data);
        setCurrentPage(response?.data?.current_page);
        setPageCount(response?.data?.last_page);
      });
  }, [
		search,
		tag,
		category,
		currentPage,
    perPage,
  ]);

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
  });

  return (
    <>
      <BreadCumb data="Blog" />
      <div>
        <h1 className="text-center mt-4 pb-4">Blog</h1>
      </div>
      <div className={`container ${blogStyle.blogContainer}`}>
        <div>
          <BlogList
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          setPerPage={setPerPage}
          perPage={perPage}
          pageCount={pageCount}
          currentItems={currentItems}
          loading={loading}
          />
        </div>
        <div>
          <BlogSidebar
          recentPosts={recentPosts}
          categories={categories}
          popularTags={popularTags}
          setSearch={setSearch}
          setTag={setTag}
          setCategory={setCategory}
          search={search}
          />
        </div>
      </div>
    </>
  );
};

export default Blog;
