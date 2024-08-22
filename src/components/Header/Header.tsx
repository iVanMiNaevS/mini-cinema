import React, {useState} from "react";
import "./header.scss";
import {Link, useLocation} from "react-router-dom";
import {getAvatar} from "../../services/getAvatar";
export const Header = () => {
	const location = useLocation();
	const path = location.pathname;
	const [avatar, setAvatar] = useState("");
	return (
		<header>
			<img className="header__icon" src={require("../../imgs/logo3.png")} alt="logo"></img>
			<button
				onClick={async () => {
					setAvatar(await getAvatar());
				}}
			>
				click
			</button>
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
			<img
				src={
					avatar
						? avatar
						: "https://avatars.mds.yandex.net/i?id=6e5c7cee90f789b4833b492da50ef143a2d6e0f7-12475925-images-thumbs&n=13"
				}
				alt="avatar"
				className="profile"
			></img>
		</header>
	);
};
