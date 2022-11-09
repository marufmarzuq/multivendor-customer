import React, { useRef, useState } from "react";
import { EditorState } from "draft-js";
import authStyle from "../../../../auth.module.css";
import { FaRegEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { addSupportSchema } from "../../../../../schema/supportSchema";
import { useFormik } from "formik";
import { markutosFrontendApi } from "../../../../services/Api/api";
import authHeader from "../../../../services/auth-header";
import { FocusError } from "focus-formik-error";
import { toast } from "react-toastify";
import JoditEditor from "jodit-react";
import { loadFromLocalStorage } from "../../../../../utils/user/manageLocalStorage";

const SupportForm = () => {

  	const { t } = useTranslation();

  	const editor = useRef(null);
	const user = loadFromLocalStorage();

  	const handleEditorChange = (newContent) => {
		if (newContent == "<p><br></p>" || newContent == "") {
		setFieldValue("message", "");
		} else {
		setFieldValue("message", newContent);
		}
  	};

  const handleBlurEditorChange = (content) => {
    if (content == "<p><br></p>" || content == "") {
      setFieldValue("message", "");
    } else {
      setFieldValue("message", content);
    }
  };

  const formik = useFormik({
    validationSchema: addSupportSchema,
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    enableReinitialize: true,
    onSubmit: (values, action) => {
      const finalValues = values;
			finalValues.user_id = user ? user?.user?.id : null;

      markutosFrontendApi
        .post("/submit-support-request", finalValues, {
          headers: {
            Authorization: authHeader(),
          },
        })
        .then((res) => {
          toast.success(res.data.message);
          action.resetForm();
        })
        .catch((e) => {
          toast.error(e.message);
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
    <section>
      <div className={authStyle.authContainer}>
        <div className={authStyle.auth}>
          <h4 className="text-center mb-3">{t("support_request")}</h4>
          <hr className="mb-4" />
          <form onSubmit={(e) => e.preventDefault()}>
            <FocusError formik={formik} />
            <div>
              <label htmlFor="name">
                <span>Name</span>
                <i>*</i>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name && (
                <small className="text-danger"> {errors.name} </small>
              )}
            </div>
            <div>
              <label htmlFor="email">
                <span>Email</span>
                <i>*</i>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (
                <small className="text-danger"> {errors.email} </small>
              )}
            </div>
            <div>
              <label htmlFor="url">Website URL</label>
              <input
                type="url"
                name="website_url"
                id="url"
                placeholder="Enter your Website URL"
              />
            </div>
            <div>
              <label htmlFor="subject">
                <span>Subject</span>
                <i>*</i>
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Enter support topics"
                value={values.subject}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.subject && touched.subject && (
                <small className="text-danger"> {errors.subject} </small>
              )}
            </div>

            <div>
              <JoditEditor
                ref={editor}
                value={values.message}
                tabIndex={1} // tabIndex of textarea
                onBlur={(newContent) => handleBlurEditorChange(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={(newContent) => handleEditorChange(newContent)}
              />

              {errors.message && touched.message && (
                <small className="text-danger"> {errors.message} </small>
              )}
            </div>
            <div>
              <button
                onClick={handleSubmit}
                className="btn btn-primary"
                type="submit"
                name="button"
              >
                <FaRegEnvelope /> Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SupportForm;
