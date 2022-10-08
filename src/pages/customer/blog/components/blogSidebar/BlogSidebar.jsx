import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import sidebarStyle from "./blogSidebar.module.css";
import SignleRecentPost from "./SignleRecentPost";

const BlogSidebar = (props) => {
  return (
    <div className={sidebarStyle.BlogSidebarContainer}>
      <div className={sidebarStyle.search}>
        <input type="text" placeholder="Search..." name="search" value={props.search} onChange={(e)=>props.setSearch(e.target.value)} />
        <button>
          <AiOutlineSearch />
        </button>
      </div>
			{/* Categories */}
      <section>
        <div className={sidebarStyle.categories}>
          <h4>Categories</h4>
          {
						props.categories.length > 0 && (
						props.categories.map((item, key) => {
								return (
										<NavLink to="#" onClick={(e)=>props.setCategory(item.label)} key={key}> {item.label} </NavLink>
									);
								})
							)
          }
        </div>
      </section>
			{/* Tags */}
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
          {
						props.popularTags.length > 0 && (
						props.popularTags.map((item, key) => {
								return (
										<NavLink to="#" key={key} onClick={(e)=>props.setTag(item.tag)}> {item.tag} </NavLink>
									);
								})
							)
          }
          </div>
        </div>
      </section>
      {/* Recent Posts */}
      <section>
        <div className={sidebarStyle.recentPost}>
          <h4>Recent Posts</h4>
          <div>
						{
						props.recentPosts.length > 0 && (
						props.recentPosts.map((item, key) => {
								return (
										<NavLink to={`/blog/${item.id}`} key={key}>
											<SignleRecentPost item={item} />
										</NavLink>
									);
								})
							)
          }
          </div>
        </div>
      </section>

    </div>
  );
};

export default BlogSidebar;
