import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import List from './pages/List';
import Mypage from './pages/Mypage';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/list' element={<List />} />
        <Route path='/mypage' element={<Mypage />} />
      </Routes>
    </>
  );
}

export default App
