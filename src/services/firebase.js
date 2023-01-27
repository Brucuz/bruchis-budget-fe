import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyB6EvtHxDZctIHI6fqtf34jPxPZF81sgvE",
    authDomain: "bruchis-budget-be.firebaseapp.com",
    projectId: "bruchis-budget-be",
    storageBucket: "bruchis-budget-be.appspot.com",
    messagingSenderId: "159875145722",
    appId: "1:159875145722:web:a23c6ede1e73c51779ce43"
});

const auth = getAuth(firebaseApp);

onAuthStateChanged(auth, user =>{
    if(user != null){
        console.log("logged in");
    } else { 
        console.log("not logged in");
    }
})


const signIn = async (email, pwd) =>{
    console.log("IN");
    const result = await signInWithEmailAndPassword(auth, email, pwd);
    return result.user.accessToken;
    //console.log("fasdfsad" + JSON.stringify() + "----" + JSON.stringify(result.user.stsTokenManager.expirationTime));
};

export {signIn};
