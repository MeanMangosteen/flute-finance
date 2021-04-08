import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { LandingPage } from './pages/Landing';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" >
            <LandingPage />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </ThemeProvider>
  );
}


export default App;
