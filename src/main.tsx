import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import Base from './components/Base';
import Route from './route';

ReactDOM.render(
  <React.StrictMode>
    <Base>
      <BrowserRouter>
        <Route />
      </BrowserRouter>
    </Base>
  </React.StrictMode>,
  document.querySelector('#root'),
);
