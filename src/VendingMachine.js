import React from 'react';

import Home from './Home';
import Soda from './Soda';
import Chips from './Chips';
import Candy from './Candy';
import NavBar from './NavBar';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function VendingMachine() {
	return (
		<div className="mainVending">
			<BrowserRouter>
				<NavBar />
				<Routes>
					{/* <Route exact path="/soda">
						<Soda />
					</Route>
					<Route exact path="/chips">
						<Chips />
					</Route>
					<Route exact path="/candy">
						<Candy />
					</Route>

					<Route exact path="/">
						<Home />
					</Route> */}
					<Route path="/soda" element={<Soda />} />

					<Route path="/chips" element={<Chips />} />

					<Route path="/candy" element={<Candy />} />

					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}
export default VendingMachine;
