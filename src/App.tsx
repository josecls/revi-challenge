import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from "@/components/ui/sonner";
import { AppLayout } from './components/layout/AppLayout';

import MonstersPage from './pages/Monsters';
import BattlePage from './pages/Battle';
import HomePage from './pages/Home';
import NotFoundPage from './pages/NotFound';

import { MonsterProvider } from './contexts/MonsterContext';

function App() {
  return (
    <MonsterProvider>
      <Toaster richColors position="top-center" />
      <BrowserRouter>
        <Routes>
          {/* Routes that doesnt have SideNav */}
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
          {/* Routes that have SideNav */}
          <Route element={<AppLayout />}>
            <Route path="/monsters" element={<MonstersPage />} />
            <Route path="/battlefield" element={<BattlePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MonsterProvider>
  );
}

export default App;
