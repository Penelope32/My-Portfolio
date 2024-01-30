
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";

import {
    getFirestore,
    collection,
    getDocs,
    onSnapshot,
    addDoc,
    deleteDoc,
    doc,
    getDoc,
    updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

const firebaseConfig = {

    apiKey: "AIzaSyBjeNy0N6TnDsELvL0SLseuFyvlm4eWsLc",
    authDomain: "web-portfolio-60c9a.firebaseapp.com",
    projectId: "web-portfolio-60c9a",
    storageBucket: "web-portfolio-60c9a.appspot.com",
    messagingSenderId: "573826370353",
    appId: "1:573826370353:web:be23f5659d1c2966e7fe10",
    measurementId: "G-DVHM1FDQBE"
  
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();

/**
 * 
 * Prints all users in the NoSQL database
 */
async function printAllUsers() {

    let data = await getDocs(collection(db, "bbd1"));
    data.forEach((doc) => {
        console.log((doc.id + "    " + doc.data().userName));
    });
}

printAllUsers();



/**
 * 
 * Onclick event to Add New User to database
 */
document.getElementById('btnAddNewUser').addEventListener('click', () => {

    var varUserName = document.getElementById("userName").value;
    var varUserEmail = document.getElementById("userEmail").value;
    var varUserMessage = document.getElementById("userMessage").value;
   


    let newUser = {
        userName: varUserName,
        userEmail: varUserEmail,
        userMessage: varUserMessage

    }
    addDoc(collection(db, "bbd1"), newUser)
    printAllUsers()
    const msg = document.getElementById("msg")
    
    msg.innerHTML= "message sent successfully"
    setTimeout(function(){
      msg.innerHTML = ""
    },5000)

    const div = document.getElementById("myForm");
    const formElements = div.querySelectorAll("input, textarea");

    formElements.forEach(element => {
    if (element.type === "text" || element.type === "email" || element.tagName === "TEXTAREA") {
        element.value = "";
    }
});
    
});