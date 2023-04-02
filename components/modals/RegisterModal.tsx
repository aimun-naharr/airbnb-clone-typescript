import React, { useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import useRegisterModal from "../hooks/useRegisterModal";
import axios from "axios";
import Modal from "./Modal";
import Heading from "./Heading";
import Input from "../Input";

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
	console.log(errors)
	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		// setIsLoading(false);
		// axios.post("api/register", data)
		// 	.then(() => registerModal.onClose())
		// 	.catch((err) => console.log(err))
		// 	.finally(() => setIsLoading(false));
	};

	const bodyContent = (
		<div className="flex flex-col gap-4">
			<Heading title="Welcome to Airbnb" subTitle="Please signup first" />
			<Input  id='email' label='Email' register={register} errors={errors} disabled={isLoading}
			/>
			<Input  id='name' label='Name' register={register} errors={errors} disabled={isLoading}
			/>
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
		/>
	);
};

export default RegisterModal;
