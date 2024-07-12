import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/store';
import Header from './components/common/header';
import AppRoutes from './utils/routes';
import Footer from './components/common/footer';
import './pages/movie-page/index.css';
import './assets/index.css';
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
