import ProductTable from "./components/blogs/BlogList";
import blogStyle from "./blog.module.css";
import BreadCumb from "../../../common/breadcumb/BreadCumb";
import BlogSidebar from "./components/blogSidebar/BlogSidebar";
import BlogList from "./components/blogs/BlogList";
const Blog = () => {
  return (
    <>
      <BreadCumb data="Blog" />
      <div>
        <h1 className="text-center mt-4 pb-4">Blog</h1>
      </div>
      <div className={`container ${blogStyle.blogContainer}`}>
        <div>
          <BlogList />
        </div>
        <div>
          <BlogSidebar />
        </div>
      </div>
    </>
  );
};

export default Blog;
