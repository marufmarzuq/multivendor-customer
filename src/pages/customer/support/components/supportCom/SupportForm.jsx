import { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import authStyle from "../../../../auth.module.css";

const SupportForm = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return (
		<section>
		<div className={authStyle.authContainer}>
			<div className={authStyle.auth}>
				<h4 className="text-center mb-3">Support Request</h4>
				<hr className="mb-4" />
				<form action="">
					<div>
						<label htmlFor="name">Name</label>
						<input
							type="text"
							name="name"
							id="name"
							placeholder="Enter your name"
						/>
					</div>
					<div>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Enter your email"
						/>
					</div>
					<div>
						<label htmlFor="url">Website URL</label>
						<input
							type="url"
							name="url"
							id="url"
							placeholder="Enter your Website URL"
						/>
					</div>
					<div>
						<label htmlFor="subject">subject</label>
						<input
							type="text"
							name="subject"
							id="subject"
							placeholder="Enter support topics"
						/>
					</div>
          <div className="tiny-desc-container">
            <Editor
              init={{ height: 500,}}
              editorState={editorState}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onEditorStateChange={(value) => setEditorState(value)}
            />
          </div>
					<div>
						<button className="btn btn-primary" type="button" name="button">
							Submit
						</button>
					</div>

				</form>
			</div>
		</div>
	</section>
  );
};

export default SupportForm;