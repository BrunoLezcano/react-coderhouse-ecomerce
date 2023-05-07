import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC-7QFo2zeDy4Xqp8DwfF1xtJctahJAOX4",
    authDomain: "ishio-85a86.firebaseapp.com",
    projectId: "ishio-85a86",
    storageBucket: "ishio-85a86.appspot.com",
    messagingSenderId: "296408412714",
    appId: "1:296408412714:web:6854c13ac4ba2c54cbc953",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
