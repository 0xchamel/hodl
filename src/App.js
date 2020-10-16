import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { HomePage, CollectivePage, CryptoPage } from './pages';
import { Header, Footer } from './components';

import './styles/main.scss';

function App() {
	return (
		<div className="hodl">
			<Router>
				<Header />

				<Switch>
					<Route path="/collective">
						<CollectivePage />
					</Route>
					<Route path="/legacy">
						<HomePage />
					</Route>
					<Route path="/crypto">
						<CryptoPage />
					</Route>
					<Route path="/">
						<HomePage />
					</Route>
				</Switch>

				<Footer />
			</Router>
		</div>
	);
}

export default App;
