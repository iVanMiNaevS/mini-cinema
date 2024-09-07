import React, { useEffect, useState } from "react";
import "./header.scss";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../store/store";
import { changeAuth } from "../../store/slices/AuthSlice";
import { removeAllData } from "../../store/slices/UserSlice";
export const Header = () => {
	const location = useLocation();
	const path = location.pathname;
	const { avatar, listFilm } = useSelector(
		(store: IRootState) => store.UserSlice
	);
	const dispatch = useDispatch();
	const isAuth = useSelector((store: IRootState) => store.AuthSlice.Auth);
	return (
		<header>
			<img
				className="header__icon"
				src={require("../../imgs/logo3.png")}
				alt="logo"
			></img>
			<nav>
				<ul>
					<li>
						<Link to={"/"} className={path === "/" ? "active-header-link" : ""}>
							movies
						</Link>
					</li>
					<li>
						<Link
							to={"serials"}
							className={path === "/serials" ? "active-header-link" : ""}
						>
							serials
						</Link>
					</li>
					<li>
						{listFilm.length !== 0 && (
							<div className="countFilms">{listFilm.length}</div>
						)}
						<Link
							to={"my-list"}
							className={path === "/my-list" ? "active-header-link" : ""}
						>
							my list
						</Link>
					</li>
				</ul>
			</nav>
			<div className="profile__wrapper">
				{isAuth ? (
					<button
						className="header__btn"
						onClick={() => {
							dispatch(removeAllData());
							dispatch(changeAuth(false));
							localStorage.clear();
						}}
					>
						LogOut
					</button>
				) : (
					<>
						<Link className="header__btn" to={"/sign-up"}>
							SignUp
						</Link>
						<Link className="header__btn" to={"/login"}>
							Login
						</Link>
					</>
				)}
				<img
					src={
						avatar !== "" ? avatar : require("../../imgs/no-profile-min.png")
					}
					alt="avatar"
					className="profile"
				></img>
			</div>
		</header>
	);
};
