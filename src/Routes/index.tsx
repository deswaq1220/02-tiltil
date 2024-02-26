import { Route, Routes } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import TilDetailPage from '../pages/TilDetailPage';

function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>

        <Route path="/" element={<HomePage />}></Route>
        <Route path='/tils/:tilId' element={<TilDetailPage />}></Route>
        <Route path='/auth/sign-up' element={<SignUpPage />}></Route>
        <Route path='/auth/login' element={<LoginPage />}></Route>

      </Route>
    </Routes>
  )
}

export default Router;