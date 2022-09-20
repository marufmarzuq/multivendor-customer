import React from "react";
import { useState } from "react";
import "./ProductImages.css";
import UploadFilesModal from "../../../../../UploadFiles/UploadFilesModal";

const ProductImagesDigital = ({
  values,
  handleBlur,
  handleChange,
  errors,
  touched,
  setFieldValue,
}) => {
  const [show, setShow] = useState(false);

  const [imageFor, setImageFor] = useState("");
  const [format, setFormat] = useState("");

  const openGalleryImg = () => {
    setImageFor("photos");
    setFormat("array");
    setShow(!show);
  };

  const openThumbnail = () => {
    setImageFor("thumbnail_img");
    setFormat("string");
    setShow(!show);
  };

  return (
    <div className="add-product-single-widget">
      <div className="widget-title"> Images</div>
      <div className="widget-content-container">
        <div className="product-images-container">
          <div className="ap-single-content">
            <div>
              <p>Gallery Images</p>
              <span className="helper-text">(600x600)</span>
            </div>
            <div>
              <div onClick={openGalleryImg} className="custom-browse">
                <div>Browse</div>
                <div>
                  {values.photos.length > 0
                    ? values.photos.map((item) => (
                        <small key={item} className="me-2">
                          {item},
                        </small>
                      ))
                    : "Choose File"}
                </div>
              </div>
              <span className="helper-text">
                These images are visible in product details page gallery. Use
                600x600 sizes images
              </span>
            </div>
          </div>
          <div className="ap-single-content">
            <div>
              <p>Thumbnail Image</p>
              <span className="helper-text">((300x300)</span>
            </div>
            <div>
              <div onClick={openThumbnail} className="custom-browse">
                <div>Browse</div>
                <div>
                  {values.thumbnail_img ? values.thumbnail_img : "Choose File"}
                </div>
              </div>
              <span className="helper-text">
                This image is visible in all product box. Use 300x300 sizes
                image. Keep some blank space around main object of your image as
                we had to crop some edge in different devices to make it
                responsive.
              </span>
              <UploadFilesModal
                setFieldValue={setFieldValue}
                format={format}
                values={values}
                imageFor={imageFor}
                show={show}
                setShow={setShow}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImagesDigital;
