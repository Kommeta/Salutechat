import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    //AuthProvider,
    signOut,
    signInWithEmailAndPassword,
    //createUserWithEmailAndPassword
} from "firebase/auth";
import { getFirestore, initializeFirestore } from "firebase/firestore";
// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG9YhEuqQBLw0GH_Av4l9iJ076qXaMkrg",
  authDomain: "salutechat.firebaseapp.com",
  projectId: "salutechat",
  storageBucket: "salutechat.appspot.com",
  messagingSenderId: "481864672947",
  appId: "1:481864672947:web:b9707968fda3e59e05f2c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

//const provider = new AuthProvider()

// export const register = (email, password) => {
//     return createUserWithEmailAndPassword(auth, email, password)
// }

export const login = (email, password) => signInWithEmailAndPassword(auth, email, password)

export const logout = () => signOut(auth)
