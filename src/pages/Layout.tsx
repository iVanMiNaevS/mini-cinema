import React from "react";
import {Outlet} from "react-router-dom";
import {Header} from "../components/Header/Header";
import {MyDate} from "../components/MyDate";

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
