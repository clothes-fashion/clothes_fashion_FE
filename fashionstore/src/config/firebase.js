import {initializeApp} from "firebase/app"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyC-bCNEYWDwySjwPWrhipCsw7mvQLI0Wj8",
    authDomain: "demofirebase1998.firebaseapp.com",
    projectId: "demofirebase1998",
    storageBucket: "demofirebase1998.appspot.com",
    messagingSenderId: "860391439919",
    appId: "1:860391439919:web:ead8c4edf132c3fca650da"
}
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
