import './styles/root.css';
import './styles/globals.css';
import ReactDOM from 'react-dom/client';
import RoutesApp from './app/routes/index.tsx';
import store from './middlewares/redux/store';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <HashRouter>
      <RoutesApp />
    </HashRouter>,
  </Provider>
)
