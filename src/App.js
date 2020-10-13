import React from 'react';
import { Route } from 'react-router-dom';

import { HomePage } from './pages';
import { Header, Footer } from './components';

import './styles/main.scss'

function App() {
  return (
    <div className="hodl">
      <Header />
      <Route path="/" component={HomePage} />
      <Footer />
    </div>
  );
}

export default App;
