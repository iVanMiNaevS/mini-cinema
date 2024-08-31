import React, {FC, useState} from "react";
import {useForm} from "react-hook-form";
import {useLocation, Link} from "react-router-dom";
import "./loginForm.scss";
import {useNavigate} from "react-router-dom";
import {fetchLogin} from "../../services/Auth";
import {useDispatch} from "react-redux";
import {changeAuth} from "../../store/slices/AuthSlice";

export const Login: FC = () => {
	const location = useLocation();
	const path = location.pathname;
	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm();
	const dispatch = useDispatch();
	const [openPass, setOpenPass] = useState(false);
	const [errorLogin, setErrorLogin] = useState("");
	const navigate = useNavigate();
	return (
		<form
			className="form"
			onSubmit={handleSubmit((data) => {
				const obj = {
					username: data.username,
					password: data.password,
				};
				fetchLogin("http://localhost:5000/login", obj)
					.then(async (res) => {
						console.log(res);
						navigate("/");
						localStorage.setItem("token", res?.data.tokenAccess);
						dispatch(changeAuth(true));
					})
					.catch((err) => setErrorLogin(err));
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
			{errorLogin && <p>{errorLogin}</p>}
			<input type="submit" />
		</form>
	);
};
