import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import HomePage from './pages/HomePage';
import AdventurePage from './pages/AdventurePage';
import UnauthorizedPage from './pages/UnauthorizedPage';
import AccountPage from './pages/AccountPage';
import AdventureDetailPage from './pages/AdventureDetailPage';

const AppContent = () => {
  return (
    <Routes>
      <Route path="/unauthorized" element={<UnauthorizedPage />} />
      <Route path="/*" element={
        <DashboardLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/u/account" element={<AccountPage />} />
            <Route path="/adventure" element={<AdventurePage />} />
            <Route path="/adventure/:adventureId" element={<AdventureDetailPage />} />
          </Routes>
        </DashboardLayout>
      } />
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;