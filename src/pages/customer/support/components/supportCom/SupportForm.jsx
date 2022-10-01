import React , { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import authStyle from "../../../../auth.module.css";
import { FaRegEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { addSupportSchema } from "../../../../../schema/supportSchema";
import { useFormik } from "formik";
import { markutosSellerApi } from "../../../../services/Api/api";
import authHeader from "../../../../services/auth-header";
import { FocusError } from "focus-formik-error";
import { toast } from "react-toastify";

const SupportForm = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [editorData, setEditorData] = useState("");
  // const editor = React.useRef(null);
  // function focusEditor() {
  //   editor.current.focus();
  // }
	const { t } = useTranslation();

	const editorChanging = (editorState) => {
		setEditorData(editorState.blocks[0].text);
		console.log(editorState.blocks);
	}

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
      // console.log(editorData);
      // if ( editorData == "" ) {
			// 	errors.message ="err";
			// 	setErrors(errors)
			// }
      markutosSellerApi
        .post("/add-new-product", finalValues, {
          headers: {
            Authorization: authHeader(),
          },
        })
        .then((res) => {
          if (res.data.message == "New product added successfully") {
            toast.success(res.data.message);
          }
          action.resetForm();
        })
        .catch((e) => {
          toast.error(e.message);
          console.log(e.message);
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
              <label htmlFor="name"><span>Name</span><i>*</i></label>
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
              <label htmlFor="email"><span>Email</span><i>*</i></label>
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
              <label htmlFor="subject"><span>Subject</span><i>*</i></label>
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
            <div className="tiny-desc-container">
              <Editor
              	type="text"
                init={{ height: 500 }}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={(value) => setEditorState(value)}
								// ref={editor}
								// editorState={editorState}
								// onChange={(e)=>handleChange(editorState => setEditorState(editorState))}
								onChange={editorChanging}
								/>
              {errors.message && touched.message && (
								<small className="text-danger"> {errors.message} </small>
							)}
            </div>
            <div>
              <button onClick={handleSubmit}
								className="btn btn-primary" type="submit" name="button">
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
