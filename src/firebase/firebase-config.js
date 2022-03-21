import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDdi-hj6lUryix7D_bfML1iu39z1ZT3SpI",
  authDomain: "kaapo-dev.firebaseapp.com",
  projectId: "kaapo-dev",
  storageBucket: "kaapo-dev.appspot.com",
  messagingSenderId: "909199548597",
  appId: "1:909199548597:web:5de067fb83e496ff74defc",
});

export const auth = app.auth();
export default app;
