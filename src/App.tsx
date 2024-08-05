import {Route, Routes} from "react-router-dom";
import {Movies} from "./pages/Movies";
import {Layout} from "./pages/Layout";
import {Serials} from "./pages/Serials";
import {MyList} from "./pages/MyList";
import {PleerPage} from "./pages/PleerPage";
import {SignUpPage} from "./pages/SignUpPage";
import {LoginPage} from "./pages/LoginPage";

function App() {
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
