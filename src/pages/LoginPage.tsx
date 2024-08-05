import React, {FC} from "react";
import styles from "../global.module.scss";
import {Login} from "../components/loginForm/Login";

export const LoginPage: FC = () => {
	return (
		<div className={styles.container} style={{paddingTop: "100px"}}>
			<Login />
		</div>
	);
};
