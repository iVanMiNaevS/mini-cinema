import React, { useEffect, useState } from "react";
import "./header.scss";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../store/store";
import { changeAuth } from "../../store/slices/AuthSlice";
import { removeAllData } from "../../store/slices/UserSlice";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import MobileMenu from "./MobileMenu";
export const Header = () => {
	const location = useLocation();
	const path = location.pathname;
	const [openBtn, setOpenBtn] = useState(false);
	const [openMobileMenu, setOpenMobileMenu] = useState(false);
	const { avatar, listFilm } = useSelector(
		(store: IRootState) => store.UserSlice
	);
	const dispatch = useDispatch();
	const isAuth = useSelector((store: IRootState) => store.AuthSlice.Auth);
	const ref1 = useOutsideClick(() => {
		setOpenBtn(false);
	});

	useEffect(() => {
		function closeMobMenu(e: MouseEvent) {
			if (
				((e.target as Element).closest(".mobile-wrapper-open-bt") ||
					(e.target as Element).closest(".mobileMenu")) &&
				!(e.target as Element).closest(".close")
			) {
				setOpenMobileMenu(true);
			} else {
				setOpenMobileMenu(false);
			}
		}
		document.addEventListener("click", (e) => {
			closeMobMenu(e);
		});
		return () => {
			document.removeEventListener("click", (e) => {
				closeMobMenu(e);
			});
		};
	}, []);
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
			<div ref={ref1} className="profile__wrapper">
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
					<div className="profile__wrapper-btn">
						<Link className="header__btn" to={"/sign-up"}>
							SignUp
						</Link>
						<Link className="header__btn" to={"/login"}>
							Login
						</Link>
					</div>
				)}

				<img
					onClick={() => {
						setOpenBtn((prev) => !prev);
					}}
					src={
						avatar !== "" ? avatar : require("../../imgs/no-profile-min.png")
					}
					alt="avatar"
					className="profile"
				></img>
			</div>
			<div
				className={
					openBtn
						? "profile__wrapper-btns-Mobile"
						: "profile__wrapper-btns-Mobile hidden-btn"
				}
			>
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
					<div className="profile__wrapper-btn">
						<Link className="header__btn" to={"/sign-up"}>
							SignUp
						</Link>
						<Link className="header__btn" to={"/login"}>
							Login
						</Link>
					</div>
				)}
			</div>
			<div
				className="mobile-wrapper-open-bt"
				onClick={() => {
					setOpenMobileMenu((prev) => !prev);
				}}
			>
				<div className="row"></div>
				<div className="row"></div>
				<div className="row"></div>
			</div>
			<MobileMenu
				openMobileMenu={openMobileMenu}
				setOpenMobileMenu={setOpenMobileMenu}
			/>
		</header>
	);
};
