import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import MonstersPage from './pages/Monsters';
import BattlePage from './pages/Battle';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/monsters" element={<MonstersPage />} />
          <Route path="/battlefield" element={<BattlePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
