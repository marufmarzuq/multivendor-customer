import { NavLink } from "react-router-dom";
import BlogCard from "./BlogCard";
import blogsStyle from "./blogs.module.css";
const BlogList = () => {
  return (
    <>
      <div className={blogsStyle.blogsContainer}>
        <NavLink to="/blog/1">
          <BlogCard />
        </NavLink>
        <NavLink to="/blog/2">
          <BlogCard />
        </NavLink>
        <NavLink to="/blog/3">
          <BlogCard />
        </NavLink>
        <NavLink to="/blog/4">
          <BlogCard />
        </NavLink>
        <NavLink to="/blog/5">
          <BlogCard />
        </NavLink>
      </div>
    </>
  );
};

export default BlogList;
