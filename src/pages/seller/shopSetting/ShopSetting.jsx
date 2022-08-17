import React from "react";
import { useEffect } from "react";
import SettingBanner from "./componetns/settingBanner/SettingBanner";
import SettingInfo from "./componetns/settingInfo/SettingInfo";
import SettingSocialLinks from "./componetns/settingSocialLinks/SettingSocialLinks";
import settingStyle from "./shopSetting.module.css";

const ShopSetting = () => {
  useEffect(() => {
    window.scrollTo({ top: 10 });
  }, []);
  return (
    <div className="add-product mx-3 mb-5">
      <div className=" d-flex justify-content-between me-md-5 pe-md-4 me-0 pe-0 mt-3 mb-3">
        <h4> Shop Setting </h4>
        {/* <div className="me-3 pe-3">
          <button className="btn  me-3 btn btn-success">Save</button>
        </div> */}
      </div>
      <div className={settingStyle.add_product_widget_container}>
        <SettingInfo />
        <SettingBanner />
        <SettingSocialLinks />
      </div>
      <div className="mt-4">
        {/* <button className="btn  btn btn-outline-success">Save</button> */}
      </div>
    </div>
  );
};

export default ShopSetting;
