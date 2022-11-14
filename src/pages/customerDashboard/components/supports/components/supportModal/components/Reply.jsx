
import { AiOutlineUser } from "react-icons/ai";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useState } from "react";
import { useFormik } from "formik";
import { FocusError } from "focus-formik-error";
import { toast } from "react-toastify";
import { markutosFrontendApi } from "../../../../../../services/Api/api";
import customerAuthHeader from "../../../../../../services/customer-auth-header";
import { loadFromLocalStorage } from "../../../../../../../utils/user/manageLocalStorage";
import * as yup from "yup";

const schema = yup.object({
	message: yup.string().required("Please enter your message"),
  });
  
const Reply = ({ticket}) => {
	const [loading, setLoading] = useState(false);
	const user = loadFromLocalStorage();

	const handleEditorChange = (newContent) => {
		if (newContent == "<p><br></p>" || newContent == "") {
		setFieldValue("message", "");
		} else {
		setFieldValue("message", newContent.getCurrentContent().getPlainText());
		}
  	};

	const formik = useFormik({
		validationSchema: schema,
		initialValues: {
			message: "",
		},
		enableReinitialize: true,
		onSubmit: (values, action) => {
		const finalValues = values;
			finalValues.user_id = user ? user?.user?.id : null;
			finalValues.ticket_code = ticket.code;
		setLoading(true);
		if (user) {
			markutosFrontendApi
			.post("/dashboard/support-conversation/reply", finalValues, {
			  headers: {
				Authorization: customerAuthHeader(),
			  },
			})
			.then((res) => {
				setLoading(false);
				toast.success(res.data.message);
				action.resetForm();
			})
			.catch((e) => {
				setLoading(false);
			  	toast.error(e.message);
			});
		} else {
			markutosFrontendApi
			.post("user-conversation/reply", finalValues )
			.then((res) => {
				setLoading(false);
				toast.success(res.data.message);
				action.resetForm();
			})
			.catch((e) => {
				setLoading(false);
			  	toast.error(e.message);
			});	
		}

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
	<div
		className="single-widget"
		style={{ maxWidth: "1000px", margin: "0 auto" }}
	>
		<div className="widget-title">
			{"subject"} (#{ticket?.subject})
		</div>
		<div className="widget-container">
			<div className="support-replay-profile">
				<div className="srp-img">
					<AiOutlineUser />
				</div>
				<span>Replay</span>
			</div>
			<form onSubmit={(e) => e.preventDefault()}>
				<FocusError formik={formik} />
				<div className="prod-desc-container">
					<Editor
						type="text"
						init={{ height: 500 }}
						toolbarClassName="toolbarClassName"
						wrapperClassName="wrapperClassName"
						editorClassName="editorClassName"
						onEditorStateChange={handleEditorChange}
						/>
					{errors.message && touched.message && (
						<small className="text-danger"> {errors.message} </small>
					)}
				</div>
				<button type="submit" onClick={handleSubmit} disabled={loading}
 				className="btns-container" style={{ height: "40px" }}>
					{loading && (
						<span className="spinner-grow spinner-grow-sm"></span>
					)}
					<span>Send Replay</span>
				</button>
			</form>
		</div>
	</div>
  );
};

export default Reply;