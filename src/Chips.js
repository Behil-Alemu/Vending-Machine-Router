import React from 'react';
import './style.css';
import Home from "./Home";
import { Link } from "react-router-dom";


function Chips() {
	return (
		<div className='chipDiv'>
			<h2>Chips</h2>
            <img  className='image' src="https://media2.giphy.com/media/l0HlNV9nU4gVZblKM/200w.webp?cid=ecf05e47rm91kdkh19hex492fixr7ei0qfv9galsp1o2ltmo&rid=200w.webp&ct=g" alt="Candy overflow" />
            <h3>To much salt</h3>
            <h4 >Go back to <Link to="/">home</Link> page</h4>
		</div>
	);
}


export default Chips;
