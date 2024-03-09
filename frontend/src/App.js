import "./App.css";
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { MainHomePage } from "./components/MainHomePage";
import { Account_settings } from "./components/DropDownItems/Account_settings";
import { MyProfile } from "./components/DropDownItems/MyProfile";
import { EventDetailPage } from "./components/Event/EventDetailPage/EventDetailPage";
import { GoogleAdHead } from "./components/GoogleAdHead";



function App() {
  const [progress, setProgress] = useState(0);

  return (
    <>
      <Router>
        <div className="max-sm:max-w-[100vw] max-sm:overflow-hidden">

      <LoadingBar
        color='blue'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        />

        <GoogleAdHead/>
      <Routes>
        <Route exact path="*" element={<MainHomePage setProgress={setProgress}/>}/>
        <Route exact path="account-settings" element={<Account_settings/>}/>
        <Route exact path="my-profile" element={<MyProfile/>}/>
        <Route exact path="/events/eventdetail/:id" element={<EventDetailPage/>}/>
        <Route exact path="/:section/:subsection/:id/:email" element={<MyProfile/>}/>
      </Routes>
          
      </div>
      </Router>
    </>
  );
}

export default App;