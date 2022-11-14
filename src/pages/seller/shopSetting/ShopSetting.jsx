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
import ShopPageSettings from "./componetns/shopPageSettings/ShopPageSettings";

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

          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="general-tab"
                data-bs-toggle="tab"
                data-bs-target="#general-tab-pane"
                type="button"
                role="tab"
                aria-controls="general-tab-pane"
                aria-selected="true"
                style={{ color: "black" }}
              >
                General Settings
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="shop-tab"
                data-bs-toggle="tab"
                data-bs-target="#shop-tab-pane"
                type="button"
                role="tab"
                aria-controls="shop-tab-pane"
                aria-selected="false"
                style={{ color: "black" }}
              >
                Shop Page Settings
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="general-tab-pane"
              role="tabpanel"
              aria-labelledby="general-tab"
              tabindex="0"
            >
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
            <div
              class="tab-pane fade"
              id="shop-tab-pane"
              role="tabpanel"
              aria-labelledby="shop-tab"
              tabindex="0"
            >
              <ShopPageSettings
                submiting={submiting}
                touched={touched}
                values={values}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                setFieldValue={setFieldValue}
                errors={errors}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShopSetting;
