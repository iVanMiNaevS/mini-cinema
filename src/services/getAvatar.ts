import axios from "axios";
export async function getAvatar() {
	const token = localStorage.getItem("token");
	const response = await axios.get("http://localhost:5000/get-avatar", {
		headers: {Authorization: `Bearer ${token}`},
	});
	return response.data;
}
