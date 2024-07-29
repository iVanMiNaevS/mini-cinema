import {Route, Routes} from "react-router-dom";
import {Movies} from "./pages/Movies";
import {Layout} from "./pages/Layout";
import {Serials} from "./pages/Serials";
import {MyList} from "./pages/MyList";
import {PleerPage} from "./pages/PleerPage";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Movies />} />
				<Route path="serials" element={<Serials />} />
				<Route path="my-list" element={<MyList />} />
				<Route path="pleer/:id" element={<PleerPage />} />
			</Route>
		</Routes>
	);
}

export default App;
