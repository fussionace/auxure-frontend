import { ReactComponent as AuxureLogo } from './assets/svg/logo.svg';
import { Routes, Route} from 'react-router-dom';
import Signup from './pages/authPages/Signup';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' exact element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
