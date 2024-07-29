import React, {useState} from "react";

export const MyDate = () => {
	const [date, setDate] = useState(new Date());

	setInterval(() => {
		if (new Date().getSeconds() >= 59) {
			setDate(new Date());
		}
	}, 1000);

	const style = {
		width: "fit-content",
		margin: "0 auto",
		fontSize: "32px",
		fontWeight: 300,
		color: "rgba(0,0,0,0.6)",
		alignText: "center",
		padding: "48px 0px 20px 0px",
	};
	return (
		<div style={style}>
			{date.getMinutes() < 10
				? date.getHours() + ":0" + date.getMinutes()
				: date.getHours() + ":" + date.getMinutes()}
		</div>
	);
};
