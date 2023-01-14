import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Tempaaa } from "./components/Tempaaa";

function App() {
  return (
    <>

    <div>
      <div className='sticky top-0 bg-white z-10'>
        <Navbar/>
      </div>
      <Home/>
      <Tempaaa/>


    {/* </div> */}
    </div>
    
    </>
  );
}

export default App;
