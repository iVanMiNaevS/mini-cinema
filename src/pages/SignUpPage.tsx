import React, {FC} from "react";
import styles from "../global.module.scss";
import {SignUp} from "../components/SignUpForm/SignUp";

export const SignUpPage: FC = () => {
	return (
		<div className={styles.container} style={{paddingTop: "100px"}}>
			<SignUp />
		</div>
	);
};
