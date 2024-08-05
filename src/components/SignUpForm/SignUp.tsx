import React, {FC, useState} from "react";
import {useForm} from "react-hook-form";
import {useLocation, Link} from "react-router-dom";
import "./SignUp.scss";
import {fetchSignUp} from "../../services/fetchingSignUp";
import {useNavigate} from "react-router-dom";

export const SignUp: FC = () => {
	const location = useLocation();
	const path = location.pathname;
	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm();

	const [openPass, setOpenPass] = useState(false);
	const [errorSignUp, setErrorSignUp] = useState("");
	const navigate = useNavigate();
	return (
		<form
			className="form"
			onSubmit={handleSubmit((data) => {
				const obj = {
					username: data.username,
					password: data.password,
				};
				fetchSignUp("http://localhost:5000/sign-up", obj)
					.then(() => navigate("/login"))
					.catch((err) => setErrorSignUp(err));
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
			{errorSignUp && <p style={{textTransform: "uppercase"}}>{errorSignUp}</p>}
			<input placeholder="Username" {...register("username", {required: true})} />
			{errors.username && <p>Username is required.</p>}
			<span className="passwordWrapper">
				<input
					className="passwordInput"
					placeholder="Password"
					type={openPass ? "text" : "password"}
					{...register("password", {required: true, minLength: 5})}
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
			{errors.password && errors.password.type === "minLength" && (
				<p>The password must be more than five characters long</p>
			)}
			{errors.password && errors.password.type === "required" && <p>Password is required</p>}

			<input type="submit" />
		</form>
	);
};
