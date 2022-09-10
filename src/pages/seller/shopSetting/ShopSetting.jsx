import SettingBanner from "./componetns/settingBanner/SettingBanner";
import SettingInfo from "./componetns/settingInfo/SettingInfo";
import SettingSocialLinks from "./componetns/settingSocialLinks/SettingSocialLinks";
import settingStyle from "./shopSetting.module.css";
import { useFormik } from "formik";
import { shopSettingSchema } from "../../../schema";
import { authHeader, getApi } from "../../../api/apiCall";
import { setShopSetting } from "../../../redux/slices/seller/shopSetting";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import SimpleLoading from "../../../common/loading/SimpleLoading";
import axios from "axios";
import { useState } from "react";

const ShopSetting = () => {
  const { setting, loading, error } = useSelector(
    (state) => state.shopSettingReducer
  );
  // const [setting, setSetting] = useState({});
  // const [loading, setLoading] = useState(false);

  const { values, handleChange, touched, errors, handleSubmit } = useFormik({
    validationSchema: shopSettingSchema,
    initialValues: {
      name: setting?.name || "",
      address: setting?.address || "",
      logo: setting?.logo || "",
      sliders: setting?.sliders || "",
      facebook: setting?.facebook || "",
      twitter: setting?.twitter || "",
      google: setting?.google || "",
      youtube: setting?.youtube || "",
      instagram: setting?.instagram || "",
    },
    enableReinitialize: true,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });
  useEffect(() => {
    getApi("shop-setting", setShopSetting);
  }, []);

  // useEffect(() => {
  //   setLoading(true);
  //   axios
  //     .get(`https://api.markutos.com/api/v1/seller/shop-setting`, {
  //       headers: {
  //         Authorization: authHeader(),
  //       },
  //     })
  //     .then((response) => {
  //       setSetting(response.data);
  //       setLoading(false);
  //     })
  //     .catch((e) => {
  //       setLoading(false);
  //     });
  // }, []);

  console.log(setting);
  return (
    <>
      {loading ? (
        <SimpleLoading />
      ) : (
        <div className="add-product mx-3 mb-5">
          <div className=" d-flex justify-content-between me-md-5 pe-md-4 me-0 pe-0 mt-3 mb-3">
            <h4> Shop Setting </h4>
            {/* <div className="me-3 pe-3">
        <button className="btn  me-3 btn btn-success">Save</button>
      </div> */}
          </div>

          <div className={settingStyle.add_product_widget_container}>
            <SettingInfo
              touched={touched}
              values={values}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              errors={errors}
            />
            <SettingBanner values={values} handleSubmit={handleSubmit} />
            <SettingSocialLinks
              values={values}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ShopSetting;
