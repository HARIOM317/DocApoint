// const firebaseConfig = {
//     apiKey: "AIzaSyCKpnoJWlRU9FIG8M9dt9myuEvKsQZsaI4",
//     authDomain: "docapoint-948f9.firebaseapp.com",
//     databaseURL: "https://docapoint-948f9-default-rtdb.firebaseio.com",
//     projectId: "docapoint-948f9",
//     storageBucket: "docapoint-948f9.appspot.com",
//     messagingSenderId: "153021935171",
//     appId: "1:153021935171:web:f9f724b2715b12213baef6"
// };

// // initialize firebase
// firebase.initializeApp(firebaseConfig);

// // reference for database
// const docApointDB =  firebase.database().ref('DocApoint');

// document.getElementById('appointmentForm').addEventListener('submit', submitAppointmentForm);

// function submitAppointmentForm(e){
//     e.preventDefault();

//     var name = getElementVal('username');
//     var phone = getElementVal('phoneNumber');
//     var age = getElementVal('age');
//     var date = getElementVal('date-field');
//     var address = getElementVal('address');

//     saveMessages(name, phone, age, date, address);
// }


// const saveMessages = (name, phone, age, date, address) => {
//     // push data to the db
//     var newAppointmentForm = docApointDB.push();

//     newAppointmentForm.ser({
//         name: name,
//         phone: phone,
//         age: age,
//         date: date,
//         address: address
//     })
// }


// const getElementVal = (id) => {
//     return document.getElementById(id).value;
// }



import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";


const firebaseConfig = {
    apiKey: "AIzaSyCKpnoJWlRU9FIG8M9dt9myuEvKsQZsaI4",
    authDomain: "docapoint-948f9.firebaseapp.com",
    databaseURL: "https://docapoint-948f9-default-rtdb.firebaseio.com",
    projectId: "docapoint-948f9",
    storageBucket: "docapoint-948f9.appspot.com",
    messagingSenderId: "153021935171",
    appId: "1:153021935171:web:f9f724b2715b12213baef6"
};

const app = initializeApp(firebaseConfig);

