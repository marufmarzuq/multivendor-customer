import React from "react";
import infoStyle from "./porductInfo.module.css";
import { singleProduct3 } from "../../../../../assets/index";
const ProductInformation = () => {
  return (
    <div className={infoStyle.productInfo}>
      <h4>Product Information: </h4>

      <div className={infoStyle.infoContainer}>
        <div>
          <div className={infoStyle.infoTable}>
            <table>
              <tbody>
                <tr>
                  <td className={infoStyle.tableHeader}>Color</td>

                  <td className={infoStyle.tableData}>Grey</td>
                </tr>
                <tr>
                  <td className={infoStyle.tableHeader}>Product Dimenstions</td>

                  <td className={infoStyle.tableData}>
                    14.17 x 6.3 x 17.72 iches
                  </td>
                </tr>

                <tr>
                  <td className={infoStyle.tableHeader}>Item Weight</td>

                  <td className={infoStyle.tableData}>2.31 pounds</td>
                </tr>

                <tr>
                  <td className={infoStyle.tableHeader}>ASIIN</td>

                  <td className={infoStyle.tableData}>B077SKTM98 </td>
                </tr>

                <tr>
                  <td className={infoStyle.tableHeader}>Item Model Number</td>

                  <td className={infoStyle.tableData}>3399Grey</td>
                </tr>

                <tr>
                  <td className={infoStyle.tableHeader}>Customer Revies</td>

                  <td className={infoStyle.tableData}> 4.7 Out of 5</td>
                </tr>

                <tr>
                  <td className={infoStyle.tableHeader}>Best Sellers Rank</td>

                  <td className={infoStyle.tableData}>
                    #1,695 in Laptop Backpacks
                  </td>
                </tr>

                <tr>
                  <td className={infoStyle.tableHeader}>
                    Is Discounted By Manufacturer
                  </td>

                  <td className={infoStyle.tableData}>No</td>
                </tr>

                <tr>
                  <td className={infoStyle.tableHeader}>
                    Date First Available
                  </td>

                  <td className={infoStyle.tableData}>November 28, 2017</td>
                </tr>

                <tr>
                  <td className={infoStyle.tableHeader}>Department</td>

                  <td className={infoStyle.tableData}>Mens</td>
                </tr>

                <tr>
                  <td
                    className={`${infoStyle.tableHeader} ${infoStyle.lastData}`}
                  >
                    Manufacturer
                  </td>

                  <td
                    className={`${infoStyle.tableData} ${infoStyle.lastData}`}
                  >
                    TIGERNU
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={infoStyle.image}>
          <img src={singleProduct3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
