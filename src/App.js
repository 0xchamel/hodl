import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  withRouter,
} from "react-router-dom";

import {
  HomePage,
  HumanPage,
  TermsPage,
  ContestPage,
  CryptoPage,
  CollectivePage,
  AuthPage,
  ProfilePage,
  LegacyPage,
} from "./pages";
import { Header, Footer } from "./components";

import "./styles/main.scss";
import AuthRoute from "./routes/AuthRoute";

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
              <LegacyPage />
            </Route>
            <Route path="/contest">
              <ContestPage />
            </Route>
            <Route path="/terms">
              <TermsPage />
            </Route>
            <Route path="/crypto">
              <CryptoPage />
            </Route>
            <Route path="/collective">
              <CollectivePage />
            </Route>
            <Route path="/auth">
              <AuthPage />
            </Route>
            <AuthRoute path="/profile" component={ProfilePage} />
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
