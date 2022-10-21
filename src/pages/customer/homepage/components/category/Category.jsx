import React from "react";
import "./category.css";
import {catSlider1} from "../../../../../assets";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import PinnedCategories from "./pinnedCategories/pinnedCategories";
import LeftCategories from "./leftCategories/LeftCategories";
import Sliders from "./sliders/Sliders";
import Ads from "./sliders/Ads";

const Category = ({pinnedCategories,sliders,categories}) => {

  return (
    <section className="category-wrapper mt-5 wrapper">
      <div className="container">
        <div className="row">
        	{/* Left side categories */}
					<LeftCategories categories={categories}/>
          <div
            style={{
              marginTop: "-7px",
            }}
            className="col-12 col-xs-8 col-md-9 col-lg-8 "
          >
            <div className="container-fluid">
              <div className="row mb-4">
              	{/* Sliders */}
                <Sliders sliders={sliders}/>
                {/* adds */}
								<Ads/>
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
