import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/swiper.min.css';
import './css/main.css';
import './css/reset.css';
import { AppContainer, } from 'react-hot-loader';
import App from './App';
import reportWebVitals from './reportWebVitals';



const render = (Component: any) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    render(require('./App'));
  });
}

reportWebVitals();

if ('ethereum' in window) {
  //(window.ethereum as any).autoRefreshOnNetworkChange = false;
  (window.ethereum as any).on('chainChanged', () => window.location.reload());
  (window.ethereum as any).on('networkChanged', () => window.location.reload());
  (window.ethereum as any).on('accountsChanged', () => window.location.reload());
}
