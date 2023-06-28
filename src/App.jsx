import { ReactComponent as AuxureLogo } from './assets/svg/logo.svg';
import { Routes, Route} from 'react-router-dom';
import Signup from './pages/authPages/Signup';


function App() {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center gap-4 bg-background-color'>
      <Routes>
        <Route path='/' exact element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
