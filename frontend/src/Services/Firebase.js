import "../config/firebase-config";

onAuthStateChanged(getAuth(), async(user)=>{
    setCurrentUser(user);
    console.log(user);
  })