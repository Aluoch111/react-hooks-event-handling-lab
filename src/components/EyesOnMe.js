// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe() {
	const blur = (event) => {
		console.log("Hey! Eyes on me!");
	};
	const focus = () => {
		console.log("Good!");
	};
	return (
		<>
			<button onBlur={blur} onFocus={focus}>
				Eyes on me
			</button>
		</>
	);
}
export default EyesOnMe;