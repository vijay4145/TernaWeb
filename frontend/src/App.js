import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Tempaaa } from "./components/Tempaaa";

function App() {
  return (
    <>
    <div>
      <div className='sticky top-0 bg-white'>
        <Navbar/>
      </div>
      <div className='sticky top-0 z-[-1]'>
        <Home/>
      </div>

    <div style={{zIndex: '3', backgroundColor: 'white'}}>
    <Tempaaa/>

    </div>
    </div>
    
    </>
  );
}

export default App;
