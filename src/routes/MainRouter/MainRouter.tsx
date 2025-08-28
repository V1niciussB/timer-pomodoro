import { BrowserRouter, Route, Routes, useLocation } from 'react-router';
import { Home } from '../../components/pages/Home/home';
import { AboutPomodoro } from '../../components/pages/AboutPomodoro/aboutPomodoro';
import { NotFound } from '../../components/pages/NotFound/notFound';
import { useEffect } from 'react';
import { History } from '../../components/pages/History/history';
import { Settings } from '../../components/pages/Settings/settings';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return null;
}

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/history' element={<History />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='about-pomodoro' element={<AboutPomodoro />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}
