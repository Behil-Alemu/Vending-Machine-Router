import React from 'react';
import './style.css';
import { Link } from "react-router-dom";


function Soda() {
	return (
		<div className="sodaDiv">
			<h1>Soda</h1>
			<img src="https://i.giphy.com/DbD6EnlEQmjTi.gif" alt="Diet coke exploding everywhere." />

            <h3>Not sweet enought</h3>
            <h4 >Go back to <Link to="/">home</Link> page</h4>
		</div>
	);
}

export default Soda;
