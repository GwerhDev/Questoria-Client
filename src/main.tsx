import './styles/root.css';
import './styles/globals.css';
import ReactDOM from 'react-dom/client';
import RoutesApp from './app/routes/index.tsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <RoutesApp />
  </BrowserRouter>,
)
