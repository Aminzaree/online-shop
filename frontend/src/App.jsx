import './App.css'
import Routers from './Routers/Routers';
import MainNavbar from './SharedLayout/Navbar/MainNavbar';

function App() {
  return (
    <div className='bg-customBg dark:bg-customBg-dark'>
      <Routers />
    </div>
  );
};

export default App
