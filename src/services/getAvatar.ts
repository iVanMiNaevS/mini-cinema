import axios from "axios";
export async function getAvatar() {
	const token = localStorage.getItem("token");
	try {
		const response = await axios.get("http://localhost:5000/get-avatar", {
			headers: {Authorization: `Bearer ${token}`},
		});
		return response.data;
	} catch (err) {
		if (axios.isAxiosError(err) && err.response) {
			throw err.response.data;
		}
	}
}
