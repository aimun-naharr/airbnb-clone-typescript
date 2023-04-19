import React, { useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import useRegisterModal from "../hooks/useRegisterModal";
import axios from "axios";
import Modal from "./Modal";
import Heading from "./Heading";
import Input from "../Input";
import Button from "../Button";

const RegisterModal = () => {
	const registerModal = useRegisterModal();
	const [isLoading, setIsLoading] = useState(false);
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
	});
	
	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(false);
		axios.post("/api/register/route", data)
			.then((res) => {registerModal.onClose()
			console.log(res)})
			.catch((err) => console.log(err))
			.finally(() => setIsLoading(false));
	};

	const bodyContent = (
		<div className="flex flex-col gap-4">
			<Heading title="Welcome to Airbnb" subTitle="Please signup first" />
			<Input id="email" label="Email" register={register} errors={errors} disabled={isLoading} required type='email' />
			<Input id="name" label="Name" register={register} errors={errors} disabled={isLoading} required />
			<Input id="password" type="password" label="Password" register={register} errors={errors} disabled={isLoading} required />
		</div>
	);

	const footerContent = (
		<div className="flex flex-col gap-4 mt-3">
			<Button outline label="Continue with google" icon={FcGoogle} onClick={() => {}} />
			<Button outline label="Continue with github" icon={AiFillGithub} onClick={() => {}} />
			<div className="text-neutral-600 flex flex-row items-center justify-center gap-2">
				<div>Already registered?</div>
				<div className="text-neutral-800 cursor-pointer hover:underline transition-all">Please login</div>
			</div>
		</div>
	);
	return (
		<Modal
			title="Register"
			onClose={registerModal.onClose}
			isOpen={registerModal.isOpen}
			disabled={isLoading}
			actionLabel="Continue"
			onSubmit={handleSubmit(onSubmit)}
			body={bodyContent}
			footer={footerContent}
		/>
	);
};

export default RegisterModal;
