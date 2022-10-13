import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import { 
  Routes,
  Route,
  HashRouter,
} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <HashRouter>
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
  </HashRouter>

);
