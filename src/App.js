import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation, withRouter } from 'react-router-dom';

import { HomePage, HumanPage, CryptoPage, CollectivePage } from './pages';
import { Header, Footer } from './components';

import './styles/main.scss';

function _ScrollToTop(props) {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo({ top: 0 });
	}, [pathname]);
	return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

function App() {
	return (
		<div className="hodl">
			<Router>
				<ScrollToTop>
					<Header />

					<Switch>
						<Route path="/human">
							<HumanPage />
						</Route>
						<Route path="/legacy">
							<HomePage />
						</Route>
						<Route path="/crypto">
							<CryptoPage />
						</Route>
						<Route path="/collective">
							<CollectivePage />
						</Route>
						<Route path="/">
							<HomePage />
						</Route>
					</Switch>

					<Footer />
				</ScrollToTop>
			</Router>
		</div>
	);
}

export default App;
