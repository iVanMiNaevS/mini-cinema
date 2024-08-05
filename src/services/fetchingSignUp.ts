import axios from "axios";

type data = {
	password: string;
	username: string;
};

export async function fetchSignUp(url: string, username: string, password: string) {
	try {
		// console.log(data);
		const res = await axios.post(url, {
			username,
			password,
		});
		return res;
	} catch (err) {
		console.log(err);
	}
}
