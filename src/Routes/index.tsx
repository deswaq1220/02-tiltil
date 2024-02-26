import { Route, Routes } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';

function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>

        <Route path="/" element={<div>홈페이지</div>}></Route>
        <Route path='/tils/:tilId' element={<div>디테일</div>}></Route>
        <Route path='/auth/sign-up' element={<div>회원가입</div>}></Route>
        <Route path='/auth/login' element={<div>로그인</div>}></Route>

      </Route>
    </Routes>
  )
}

export default Router;