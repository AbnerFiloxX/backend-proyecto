const firebase = require("firebase")

const firebaseConfig = {
  apiKey: "AIzaSyBcsK-EEzO03kwK1kTQ-LOfO_0fWhnhXgo",
  authDomain: "proyecto-backfront-d2564.firebaseapp.com",
  projectId: "proyecto-backfront-d2564",
  storageBucket: "proyecto-backfront-d2564.appspot.com",
  messagingSenderId: "548382024195",
  appId: "1:548382024195:web:cf76825736677002876436"
};

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const User = db.collection('Users')

module.exports = User