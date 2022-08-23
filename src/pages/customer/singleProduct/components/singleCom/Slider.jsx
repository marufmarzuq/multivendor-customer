import React from "react";
import "./singleCom.css";

const Slider = () => {
  return (
		<div className="col-12 col-md-6 mb-5 mb-md-2 overflow-hidden">
			<div className="product-gallery-container">
					<div className="swiper-container gallery-main">
							<div className="swiper-wrapper">
									<div className="swiper-slide d-flex justify-content-center align-items-center">
											<img src="https://picsum.photos/seed/slide1/600/300" alt="Slide 01">
									</div>
									<div className="swiper-slide d-flex justify-content-center align-items-center">
											<img src="https://picsum.photos/seed/slide2/600/300" alt="Slide 02">
									</div>
									<div className="swiper-slide d-flex justify-content-center align-items-center">
											<img src="https://picsum.photos/seed/slide3/600/300" alt="Slide 03">
									</div>
									<div className="swiper-slide d-flex justify-content-center align-items-center">
											<img src="https://picsum.photos/seed/slide4/600/300" alt="Slide 04">
									</div>
									<div className="swiper-slide d-flex justify-content-center align-items-center">
											<img src="https://picsum.photos/seed/slide5/600/300" alt="Slide 05">
									</div>
							</div>
					<div className="swiper-button-prev"></div>
					<div className="swiper-button-next"></div>
					</div>
					<div className="swiper-container gallery-thumbs">
							<div className="swiper-wrapper">
									<div className="swiper-slide d-flex justify-content-center align-items-center">
											<img src="https://picsum.photos/seed/slide1/115/100" alt="Slide 01"></div>
									<div className="swiper-slide d-flex justify-content-center align-items-center">
											<img src="https://picsum.photos/seed/slide2/115/100" alt="Slide 02"></div>
									<div className="swiper-slide d-flex justify-content-center align-items-center">
											<img src="https://picsum.photos/seed/slide3/115/100" alt="Slide 03"></div>
									<div className="swiper-slide d-flex justify-content-center align-items-center">
											<img src="https://picsum.photos/seed/slide4/115/100" alt="Slide 04">
									</div>
									<div className="swiper-slide d-flex justify-content-center align-items-center">
											<img src="https://picsum.photos/seed/slide5/115/100" alt="Slide 05">
									</div>
							</div>
					</div>
			</div>
		</div>
  );
};

export default Slider;
