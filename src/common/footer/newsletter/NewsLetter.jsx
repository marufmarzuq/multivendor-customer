import { AiOutlineSearch } from "react-icons/ai";
import { useFormik } from "formik";
import { FocusError } from "focus-formik-error";
import { toast } from "react-toastify";
import { emailSchema } from "../../../schema/emailSchema";
import { markutosFrontendApi } from "../../../pages/services/Api/api";

const NewsLetter = () => {
  const formik = useFormik({
    validationSchema: emailSchema,
    initialValues: {
      email: "",
    },
    enableReinitialize: true,
    onSubmit: (values, action) => {
      markutosFrontendApi
        .post("/subscribe", values)
        .then((res) => {
          toast.success(res.data.message);
          action.resetForm();
        })
        .catch((e) => {
          toast.error(e.response?.data?.email?.[0]);
        });
    },
  });

  const {
    values,
    setErrors,
    handleChange,
    touched,
    errors,
    handleSubmit,
    handleBlur,
    setFieldValue,
  } = formik;

  return (
    <div className="newsletter">
      <h3>Newsletter</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <FocusError formik={formik} />
        <div className="input-group">
          <input
            type="email"
            className="search-text"
            placeholder="Email Address"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && (
            <small className="text-danger"> {errors.email} </small>
          )}
          <button
            onClick={handleSubmit}
            type="button"
            className="btn btn-primary px-1 ps-2 px-md-3 search-button"
          >
            Search <AiOutlineSearch />
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewsLetter;
