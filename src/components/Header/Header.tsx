import React from "react";
import "./header.scss";
import {Link, useLocation} from "react-router-dom";
export const Header = () => {
	const location = useLocation();
	const path = location.pathname;
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
			<div className="profile"></div>
		</header>
	);
};
