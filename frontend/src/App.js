import "./App.css";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { CommittesOverview } from "./components/CommittesOverview";
import { PastYearPaper } from "./components/PastYearPaper";
import { Events } from './components/Events';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { Login } from "./components/Authentication/Login";

function App() {
  const [progress, setProgress] = useState(0);


  return (
    <>
      <Router>
      <LoadingBar
        color='#3F00FF'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Routes>
          <Route exact path="/login" element={<Login/>} />
          
        <div>
          <div className="sticky top-0 bg-white z-10">
            <Navbar />
          </div>

          <Routes>
            <Route exact path="/committesOverview" element={<CommittesOverview setProgress={setProgress}/>}/>
            <Route exact path="/" element={<Home setProgress={setProgress}/>} />
            <Route exact path="/pastYearPapers" element={<PastYearPaper setProgress={setProgress}/>} />
            <Route exact path="/events" element={<Events setProgress={setProgress}/>} />
          </Routes>
        </div>
        
      </Routes>
      </Router>
    </>
  );
}

export default App;
