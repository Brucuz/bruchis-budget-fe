import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, addDoc, collection, Timestamp } from "firebase/firestore";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyB6EvtHxDZctIHI6fqtf34jPxPZF81sgvE",
    authDomain: "bruchis-budget-be.firebaseapp.com",
    projectId: "bruchis-budget-be",
    storageBucket: "bruchis-budget-be.appspot.com",
    messagingSenderId: "159875145722",
    appId: "1:159875145722:web:a23c6ede1e73c51779ce43"
});

const auth = getAuth(firebaseApp);

onAuthStateChanged(auth, user => {
    if (user != null) {
        console.log("logged in");
    } else {
        console.log("not logged in");
    }
})

const signIn = async (email, pwd) => {
    console.log("IN");
    const result = await signInWithEmailAndPassword(auth, email, pwd);
    console.log(result.user)
    return result.user.accessToken;
    //console.log("fasdfsad" + JSON.stringify() + "----" + JSON.stringify(result.user.stsTokenManager.expirationTime));
};

const db = getFirestore(firebaseApp);

const addExpenses = async (amount, category, description, date) => {
    await addDoc(collection(db, "expenses"), {
        amount,
        category,
        description,
        date: Timestamp.fromDate(date)
    });
}
export { signIn, addExpenses };
