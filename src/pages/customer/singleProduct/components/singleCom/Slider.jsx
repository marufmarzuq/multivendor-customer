import React from "react";
import "./singleCom.css";

const Slider = () => {
  return (
		<div class="col-12 col-md-6 mb-5 mb-md-2 overflow-hidden">
			<div class="product-gallery-container">
					<div class="swiper-container gallery-main">
							<div class="swiper-wrapper">
									<div class="swiper-slide d-flex justify-content-center align-items-center">
											<img src="https://picsum.photos/seed/slide1/600/300" alt="Slide 01">
									</div>
									<div class="swiper-slide d-flex justify-content-center align-items-center">
											<img src="https://picsum.photos/seed/slide2/600/300" alt="Slide 02">
									</div>
									<div class="swiper-slide d-flex justify-content-center align-items-center">
											<img src="https://picsum.photos/seed/slide3/600/300" alt="Slide 03">
									</div>
									<div class="swiper-slide d-flex justify-content-center align-items-center">
											<img src="https://picsum.photos/seed/slide4/600/300" alt="Slide 04">
									</div>
									<div class="swiper-slide d-flex justify-content-center align-items-center">
											<img src="https://picsum.photos/seed/slide5/600/300" alt="Slide 05">
									</div>
							</div>
					<div class="swiper-button-prev"></div>
					<div class="swiper-button-next"></div>
					</div>
					<div class="swiper-container gallery-thumbs">
							<div class="swiper-wrapper">
									<div class="swiper-slide d-flex justify-content-center align-items-center">
											<img src="https://picsum.photos/seed/slide1/115/100" alt="Slide 01"></div>
									<div class="swiper-slide d-flex justify-content-center align-items-center">
											<img src="https://picsum.photos/seed/slide2/115/100" alt="Slide 02"></div>
									<div class="swiper-slide d-flex justify-content-center align-items-center">
											<img src="https://picsum.photos/seed/slide3/115/100" alt="Slide 03"></div>
									<div class="swiper-slide d-flex justify-content-center align-items-center">
											<img src="https://picsum.photos/seed/slide4/115/100" alt="Slide 04">
									</div>
									<div class="swiper-slide d-flex justify-content-center align-items-center">
											<img src="https://picsum.photos/seed/slide5/115/100" alt="Slide 05">
									</div>
							</div>
					</div>
			</div>
		</div>
  );
};

export default Slider;
