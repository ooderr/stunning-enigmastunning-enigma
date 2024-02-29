
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { InitSpin } from './initial-spin/initial-spin';
// import { Solution } from './solu';
import { SolutionTwo } from './solu1';


ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <Suspense fallback={< InitSpin /> }>
      <SolutionTwo />
    </Suspense>
  </React.StrictMode>
);

reportWebVitals();