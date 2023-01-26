import { createApp } from "vue";
import { createPinia } from "pinia";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

//firebase

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

const provider = new GoogleAuthProvider();

signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
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
