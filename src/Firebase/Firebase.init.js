// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBkzg__fJDz3YKABN2YKJ4srRW3l7y-ajM",
//   authDomain: "linkers-sell.firebaseapp.com",
//   projectId: "linkers-sell",
//   storageBucket: "linkers-sell.appspot.com",
//   messagingSenderId: "122747257712",
//   appId: "1:122747257712:web:a55de88c2cd1bbabe945b5",
// };
 export const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;