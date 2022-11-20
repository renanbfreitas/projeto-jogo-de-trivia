import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import GlobalStyle from './styles/global';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <Provider store={ store }>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </Provider>,
  );
