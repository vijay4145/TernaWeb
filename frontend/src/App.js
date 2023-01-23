import "./App.css";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { CommittesOverview } from "./components/CommittesOverview";
import { PastYearPaper } from "./components/PastYearPaper";
import { Events } from './components/Event/Events';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { useEffect, useState } from "react";
import "./config/firebase-config";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
function App() {
  const [progress, setProgress] = useState(0);
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const signInWithGoogle = async ()=>{

    if(auth.currentUser !== null){
      console.log(auth.currentUser.displayName);
      console.log(auth.currentUser.getIdToken());
    }else{

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log("current user is " + user.displayName);
        console.log("token is " + token);
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    }
  }


  return (
    <>
      <Router>
      <LoadingBar
        color='#3F00FF'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
          
        <div>
          <div className="sticky top-0 bg-white z-10">
            <Navbar signInWithGoogle={signInWithGoogle}/>
          </div>

          <Routes>
            <Route exact path="/committesOverview" element={<CommittesOverview setProgress={setProgress}/>}/>
            <Route exact path="/" element={<Home setProgress={setProgress}/>} />
            <Route exact path="/pastYearPapers" element={<PastYearPaper setProgress={setProgress}/>} />
            <Route exact path="/events" element={<Events setProgress={setProgress}/>} />
          </Routes>
        </div>
        
      </Router>
    </>
  );
}

export default App;