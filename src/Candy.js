import React, { useState } from 'react';
import './style.css';

function Candy() {
	const [ count, setCount ] = useState(0);
	const add = () => {
		setCount((count) => count + 1);
	};
	return (
		<div className="candyDiv">
			<h1>Candy</h1>
			<img
				className="image"
				src="https://media0.giphy.com/media/LqgrRiLbCwrCcopc79/200w.webp?cid=ecf05e47ncn4kc7noe887b1bxaibcc712udofsuslcnkwegb&rid=200w.webp&ct=g"
				alt="Candy overflow"
			/>
			<h3>Perfect, Let's get some!</h3>
			<button onClick={add}>Add</button>
			<div>
				{count === 1 ? <h4>{count} candy</h4> : <h4>{count} candies</h4>}
				
			</div>
		</div>
	);
}

export default Candy;
