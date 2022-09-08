import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import sidebarStyle from "./blogSidebar.module.css";
import SignleRecentPost from "./SignleRecentPost";
const BlogSidebar = () => {
  return (
    <div className={sidebarStyle.BlogSidebarContainer}>
      <div className={sidebarStyle.search}>
        <input type="text" placeholder="Search..." name="" id="" />
        <button>
          <AiOutlineSearch />
        </button>
      </div>

      <section>
        <div className={sidebarStyle.categories}>
          <h4>Categories</h4>
          <NavLink to="/"> Ecommerce </NavLink>
          <NavLink to="/"> Fashion </NavLink>
          <NavLink to="/"> Electronic </NavLink>
          <NavLink to="/"> Commercial </NavLink>
        </div>
      </section>

      <section>
        <div className={sidebarStyle.recentPost}>
          <h4>Recent Posts</h4>
          <div>
            <NavLink to="/blog/1">
              <SignleRecentPost />
            </NavLink>
            <NavLink to="/blog/2">
              <SignleRecentPost />
            </NavLink>
            <NavLink to="/blog/3">
              <SignleRecentPost />
            </NavLink>
            <NavLink to="/blog/4">
              <SignleRecentPost />
            </NavLink>
            <NavLink to="/blog/5">
              <SignleRecentPost />
            </NavLink>
          </div>
        </div>
      </section>

      <section>
        <div className={sidebarStyle.tags}>
          <h4>Popupar Tags</h4>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              gridGap: "7px",
            }}
          >
            <NavLink to="/">General</NavLink>
            <NavLink to="/">Design</NavLink>
            <NavLink to="/">Fashion</NavLink>
            <NavLink to="/">Branding</NavLink>
            <NavLink to="/">Modern</NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogSidebar;
