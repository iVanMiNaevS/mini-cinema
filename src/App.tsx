import {Route, Routes} from "react-router-dom";
import {Movies} from "./pages/Movies";
import {Layout} from "./pages/Layout";
import {Serials} from "./pages/Serials";
import {MyList} from "./pages/MyList";
import {PleerPage} from "./pages/PleerPage";
import {SignUpPage} from "./pages/SignUpPage";
import {LoginPage} from "./pages/LoginPage";
import {useEffect} from "react";
import {changeAuth} from "./store/slices/AuthSlice";
import {useDispatch, useSelector} from "react-redux";
import {IRootState} from "./store/store";
import {getDataUser} from "./store/slices/UserSlice";
import {ThunkDispatch} from "@reduxjs/toolkit";
function App() {
	const dispatch = useDispatch();
	const dispatchThunk = useDispatch<ThunkDispatch<any, any, any>>();
	useEffect(() => {
		const token = localStorage.getItem("token");
		if (!token) {
			dispatch(changeAuth(false));
		} else {
			const {exp} = JSON.parse(window.atob(token.split(".")[1]));

			if (Date.now() + 1000 <= exp * 1000) {
				dispatch(changeAuth(true));
				dispatchThunk(getDataUser());
			} else {
				dispatch(changeAuth(false));
				localStorage.removeItem("token");
			}
		}
	}, []);
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Movies />} />
				<Route path="serials" element={<Serials />} />
				<Route path="my-list" element={<MyList />} />
				<Route path="login" element={<LoginPage />} />
				<Route path="sign-up" element={<SignUpPage />} />
				<Route path="pleer/:id" element={<PleerPage />} />
			</Route>
		</Routes>
	);
}

export default App;
