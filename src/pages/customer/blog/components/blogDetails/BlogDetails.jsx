import BreadCumb from "../../../../../common/breadcumb/BreadCumb";
import BlogSidebar from "../blogSidebar/BlogSidebar";
import blogDetailsStyle from "./blogDetails.module.css";
import BlogInfo from "./BlogInfo";
import { markutosSellerApi } from "../../../services/Api/api";
import authHeader from "../../../../services/auth-header";

const BlogDetails = () => {
  return (
    <div>
      <BreadCumb data="4 Expert Tips On How To Choose The Right Men’s Wallet" />
      <div className={`container ${blogDetailsStyle.blogDetailsContainer}`}>
        <div>
          <BlogInfo />
        </div>
        <div className="mt-5 mt-md-0">
          <BlogSidebar />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
