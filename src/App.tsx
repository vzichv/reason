import { Routes, Route } from 'react-router-dom';

import Landing from './pages/landing/landing';
import Admin from './pages/admin/admin'

function App(): JSX.Element {
  return (
    <Routes>
      <Route path='/' element={ <Landing /> } />
      <Route path='/admin/*' element={ <Admin /> } />
    </Routes>
  );
}

export default App;
