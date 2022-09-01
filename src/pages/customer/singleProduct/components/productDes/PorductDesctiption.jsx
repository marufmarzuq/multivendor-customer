import React from "react";
import desStyle from "./productDes.module.css";
import { singleProduct1, singleProduct2 } from "../../../../../assets/index";
const PorductDesctiption = () => {
  return (
    <div className={desStyle.desContainer}>
      <h4>Description:</h4>
      <div className={desStyle.image}>
        <img src={singleProduct1} alt="" />
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          dolores fugit cupiditate inventore debitis magni maiores eius fugiat
          velit voluptatibus cum modi sint culpa, adipisci commodi. Modi
          suscipit laborum distinctio. Est quidem dignissimos aliquid ipsum
          maiores dicta libero veniam placeat nostrum, ipsam iure recusandae
          neque quaerat dolore temporibus natus minus praesentium blanditiis
          esse nobis eius aliquam fugit. Aspernatur molestiae praesentium
          temporibus consequatur esse consectetur? Error cupiditate dicta rem
          laborum. Inventore ipsum cum, recusandae possimus debitis aliquam et
          dolor minus corporis harum id mollitia? Accusamus, reprehenderit aut.
          Unde magni perferendis cum deserunt porro quam corrupti quae itaque
          blanditiis, assumenda tempore velit.
        </p>
      </div>

      <div className={desStyle.image}>
        <img src={singleProduct2} alt="" />
      </div>
    </div>
  );
};

export default PorductDesctiption;
