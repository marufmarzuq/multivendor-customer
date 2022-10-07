import React, { useState, useEffect } from "react";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "react-select";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { toast } from 'react-toastify';
import { API_URL } from "../../../services/Api/api";
import authHeader from "../../../services/auth-header";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(15).required(),
});

const AddCategory = () => {
	const [loading, setLoading] = useState(false);
  const notify                = (text) => toast(text);
	const [message, setMessage] = useState('');


	const { register, handleSubmit, setValue, formState: { errors } } = useForm({
		resolver: yupResolver(schema),
	});

	const submitForm = (data) => {
			setLoading(true);
			let formData = new FormData();
			formData.append('email', data.email);
			formData.append('password',data.password);
			axios.post(`${API_URL}/add-new-category`, formData, {
				headers: {
					"Content-Type":  "multipart/form-data",
					'Access-Control-Allow-Origin': '*',
					"Authorization": authHeader(),
				}
			}).then((response) => {
					notify('Successfully Send Data');
					setLoading(false);
				},
				error => {
					notify(error.response.data.error[0]);
					setMessage(error.response.data.error[0]);
					setLoading(false);
				}
			);
	}


	return (
		<div>
		<div className="single-widget">
			<div className="widget-title">Add Category</div>
			<form onSubmit={handleSubmit(submitForm)}>
				<div className="widget-container vartical-inputs">
					<div>
						<label htmlFor="name">Name</label>
						<input 
							type="text" 
							id="name" 
							{...register('name', { required: true })} 
						/>
					</div>
					<div>
						<label htmlFor="slug">Slug</label>
						<input 
							type="text" 
							id="slug" 
							{...register('slug', { required: true })} 
						/>
					</div>
					<div>
						<label htmlFor="parent">Parent Category</label>
						<Select options={options} placeholder="All Categories" />
					</div>
					<div>
						<label htmlFor="ordering-num">Ordering Number</label>
						<input 
							type="text" 
							id="ordering-num" 
							{...register('slug', { required: true })} 
						/>
					</div>
					<div>
						<label htmlFor="type">Type</label>
						<Select options={options} placeholder="" />
					</div>
					<div>
						<label htmlFor="banner">Banner (200x200)</label>
						<input 
							type="file" 
							id="banner"
							onChange={(e) => {
								const file = e.target.files[0];
								if(file) {
									setValue("banner", file)
								} else {
									setValue("banner", null);
								}
							}} 
						/>
						{/* <div className="custom-browse">
							<div>Browse</div>
							<div>Choose File</div>
						</div> */}
					</div>
					<div>
						<label htmlFor="icon">Icon (32x32)</label>
						<input 
							type="file" 
							id="icon"
							onChange={(e) => {
								const file = e.target.files[0];
								if(file) {
									setValue("icon", file)
								} else {
									setValue("icon", null);
								}
							}} 
						/>
						<div className="custom-browse">
							{/* <div>Browse</div>
							<div>Choose File</div> */}
						</div>
					</div>
					<div>
						<label htmlFor="commision_rate">Commision Rate</label>
						<input 
							type="text" 
							id="commision_rate" 
							{...register('commision_rate', { required: true })} 
						/>
					</div>
					<div>
						<label htmlFor="meta-title">Meta Title</label>
						<input 
							type="text" 
							id="meta-title" 
							{...register('meta_title', { required: true })} 
						/>
					</div>
					<div>
						<label htmlFor="meta-desc">Meta description</label>
						<textarea 
							rows={4} 
							type="text" 
							id="meta-desc" 
							{...register('meta_description', { required: true })} 
						/>
					</div>
					<div className="btns-container">
						<button className="add-btn" type="submit" disabled={loading}>
							{loading && <span className="spinner-grow spinner-grow-sm"></span>}
							Add
						</button>
						<p className="error pt-2">{message}</p>
					</div>
				</div>
			</form>
		</div>
		</div>
	);
};

export default AddCategory;
