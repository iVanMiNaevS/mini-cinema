import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../store/store";
import { changeAuth } from "../../store/slices/AuthSlice";
import { removeAllData } from "../../store/slices/UserSlice";
import "./header.scss";
import { useOutsideClick } from "../../hooks/useOutsideClick";

type ComponentProps = {
	setOpenMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
	openMobileMenu: boolean;
};
const MobileMenu: React.FC<ComponentProps> = ({
	setOpenMobileMenu,
	openMobileMenu,
}) => {
	const location = useLocation();
	const path = location.pathname;
	const { avatar, listFilm } = useSelector(
		(store: IRootState) => store.UserSlice
	);
	const dispatch = useDispatch();
	const isAuth = useSelector((store: IRootState) => store.AuthSlice.Auth);
	// const ref = useOutsideClick(() => {
	// 	setOpenMobileMenu(false);
	// });
	return (
		<div className={openMobileMenu ? "mobileMenu" : "mobileMenu hidden"}>
			<div
				className="close"
				onClick={() => {
					setOpenMobileMenu(false);
				}}
			>
				X
			</div>
			<img
				src={avatar !== "" ? avatar : require("../../imgs/no-profile-min.png")}
				alt="avatar"
				className="profile"
			></img>
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
		</div>
	);
};

export default MobileMenu;
