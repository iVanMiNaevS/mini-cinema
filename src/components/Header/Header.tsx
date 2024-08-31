import React, {useEffect, useState} from "react";
import "./header.scss";
import {Link, useLocation} from "react-router-dom";
import {getAvatar} from "../../services/getAvatar";
import {useDispatch, useSelector} from "react-redux";
import {IRootState} from "../../store/store";
import {changeAuth} from "../../store/slices/AuthSlice";
export const Header = () => {
	const location = useLocation();
	const path = location.pathname;
	const [avatar, setAvatar] = useState("");
	const dispatch = useDispatch();
	const isAuth = useSelector<IRootState>((store) => store.AuthSlice.Auth);
	useEffect(() => {
		if (isAuth) {
			getAvatar()
				.then((data) => setAvatar(data))
				.catch((e) => console.log(e));
		} else {
			setAvatar(
				"https://avatars.mds.yandex.net/i?id=6e5c7cee90f789b4833b492da50ef143a2d6e0f7-12475925-images-thumbs&n=13"
			);
		}
	}, [isAuth]);

	return (
		<header>
			<img className="header__icon" src={require("../../imgs/logo3.png")} alt="logo"></img>
			<nav>
				<ul>
					<li>
						<Link to={"/"} className={path === "/" ? "active-header-link" : ""}>
							movies
						</Link>
					</li>
					<li>
						<Link to={"serials"} className={path === "/serials" ? "active-header-link" : ""}>
							serials
						</Link>
					</li>
					<li>
						<Link to={"my-list"} className={path === "/my-list" ? "active-header-link" : ""}>
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
							dispatch(changeAuth(false));
							localStorage.removeItem("token");
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
				<img src={avatar} alt="avatar" className="profile"></img>
			</div>
		</header>
	);
};
