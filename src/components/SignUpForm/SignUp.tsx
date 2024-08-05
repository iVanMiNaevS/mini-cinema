import React, {FC, useState} from "react";
import {useForm} from "react-hook-form";
import {useLocation, Link} from "react-router-dom";
import "./SignUp.scss";
import {fetchSignUp} from "../../services/fetchingSignUp";
export const SignUp: FC = () => {
	const location = useLocation();
	const path = location.pathname;
	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm();

	const [openPass, setOpenPass] = useState(false);

	return (
		<form
			className="form"
			onSubmit={handleSubmit((data) => {
				fetchSignUp("http://localhost:5000/sign-up", data.username, data.password).then((res) =>
					console.log(res)
				);
			})}
		>
			<div className="title">
				<Link className={path === "/login" ? "active-link" : ""} to={"/login"}>
					Login
				</Link>
				<Link className={path === "/sign-up" ? "active-link" : ""} to={"/sign-up"}>
					Sign Up
				</Link>
			</div>
			<input placeholder="Username" {...register("username", {required: true})} />
			{errors.username && <p>Username is required.</p>}
			<span className="passwordWrapper">
				<input
					className="passwordInput"
					placeholder="Password"
					type={openPass ? "text" : "password"}
					{...register("password", {required: true})}
				/>
				<img
					onClick={(e: React.MouseEvent<HTMLImageElement>) => {
						const target = e.target as HTMLImageElement;
						if (openPass) {
							target.src = require("../../imgs/eye-close.png");
							setOpenPass((prev) => !prev);
						} else {
							target.src = require("../../imgs/eye-open.png");
							setOpenPass((prev) => !prev);
						}
					}}
					className="passwordEye"
					src={require("../../imgs/eye-close.png")}
					alt="eye"
				/>
			</span>
			{errors.password && <p>Password is required.</p>}

			<input type="submit" />
		</form>
	);
};
