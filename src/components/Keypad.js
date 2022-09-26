// Code Keypad Component Here
import React from "react";

function Keypad (){
    const event = (e) => {
        console.log("Entering password...");
    };

    return (
        <div>
			<input type="password" onChange={event} />
        </div>
    );
}

export default Keypad;