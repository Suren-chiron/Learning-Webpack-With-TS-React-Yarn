import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css';

const domRoot = document.getElementById('root')!;
render(
  <React.StrictMode>
    <App name={'mohammad'} age={17} isStudent={true} />
  </React.StrictMode>,
  domRoot,
);
