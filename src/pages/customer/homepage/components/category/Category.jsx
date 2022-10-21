import React from "react";
import "./category.css";
import {catSlider1} from "../../../../../assets";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import PinnedCategories from "./pinnedCategories/pinnedCategories";
import LeftCategories from "./leftCategories/LeftCategories";
import Sliders from "./sliders/Sliders";

const Category = ({pinnedCategories,sliders}) => {

  return (
    <section className="category-wrapper mt-5 wrapper">
      <div className="container">
        <div className="row">
        	{/* Left side categories */}
					<LeftCategories/>
          <div
            style={{
              marginTop: "-7px",
            }}
            className="col-12 col-xs-8 col-md-9 col-lg-8 "
          >
            <div className="container-fluid">
              <div className="row mb-4">
                <Sliders sliders={sliders}/>
                <div className="col-12 col-xs-3 col-md-3 my-2">
                  <div className="category-promotion">
                    <h4>Winter Flash Sale!</h4>
                    <h3>
                      Upto 65% <br /> On <br /> Baby Products
                    </h3>
                    <a href="#" className="button-outline">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
              {/* Pinned categories */}
							<PinnedCategories pinnedCategories={pinnedCategories}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
