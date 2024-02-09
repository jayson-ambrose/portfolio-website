import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter as Router } from "react-router-dom"
import {RecoilRoot} from 'recoil'
import 'semantic-ui-css/semantic.min.css'
import './styles/App.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
    <Router>
      <App />
    </Router>
  </RecoilRoot>
);
