import SettingBanner from "./componetns/settingBanner/SettingBanner";
import SettingInfo from "./componetns/settingInfo/SettingInfo";
import SettingSocialLinks from "./componetns/settingSocialLinks/SettingSocialLinks";
import settingStyle from "./shopSetting.module.css";
import { useFormik } from "formik";
import { shopSettingSchema } from "../../../schema";
import { getApi } from "../../../api/apiCall";
import { setShopSetting } from "../../../redux/slices/seller/shopSetting";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import SimpleLoading from "../../../common/loading/SimpleLoading";
import axios from "axios";
import { useState } from "react";
import { markutosSellerApi } from "../../services/Api/api";
import { toast } from "react-toastify";
import authHeader from "../../services/auth-header";

const ShopSetting = () => {
  const [submiting, setSubmitting] = useState(false);
  const { setting, loading, error } = useSelector(
    (state) => state.shopSettingReducer
  );

  const { values, handleChange, touched, errors, handleSubmit, setFieldValue } =
    useFormik({
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
        setSubmitting(true);
        markutosSellerApi
          .post(`/update-shop-setting`, values, {
            headers: {
              Authorization: authHeader(),
            },
          })
          .then((res) => {
            toast.success(res.data.message);
            getApi("shop-setting", setShopSetting);
            setSubmitting(false);
          })
          .catch((err) => {
            toast.error(err.message);
            setSubmitting(false);
          });
        action.resetForm();
      },
    });
  useEffect(() => {
    getApi("shop-setting", setShopSetting);
  }, []);

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
              submiting={submiting}
              touched={touched}
              values={values}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              setFieldValue={setFieldValue}
              errors={errors}
            />
            <SettingBanner
              submiting={submiting}
              setFieldValue={setFieldValue}
              values={values}
              handleSubmit={handleSubmit}
            />
            <SettingSocialLinks
              submiting={submiting}
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
