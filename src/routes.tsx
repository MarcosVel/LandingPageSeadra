import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

// Landing Page
import LandingPage from './components/LandingPage';

const Routes = () => {
  return (
    <BrowserRouter>
        <Route component={LandingPage} path="/" exact />
    </BrowserRouter>
  );
}

export default Routes;