import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './pages/movie-page/index.css';
import './assets/index.css';
import { Provider } from 'react-redux'
import store from './redux/store'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
