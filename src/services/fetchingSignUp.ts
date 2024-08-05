import axios from "axios";

export type data = {
	password: string;
	username: string;
};

export async function fetchSignUp(url: string, data: data) {
	try {
		const res = await axios.post(url, {
			...data,
		});

		return res;
	} catch (err) {
		if (axios.isAxiosError(err) && err.response) {
			throw err.response.data;
		}
	}
}
