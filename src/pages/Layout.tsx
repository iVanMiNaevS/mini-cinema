import React from "react";
import {Outlet} from "react-router-dom";
import {Header} from "../components/Header/Header";
import {MyDate} from "../components/MyDate";
import {useEffect} from "react";
import {changeAuth} from "../store/slices/AuthSlice";
import {useDispatch, useSelector} from "react-redux";
import {IRootState} from "../store/store";

export const Layout = () => {
	return (
		<div>
			<MyDate />
			<Header />
			<Outlet />
			{/* <Footer /> */}
		</div>
	);
};
