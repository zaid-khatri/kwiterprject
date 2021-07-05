
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyD7nJcChKaZrOuKmyM6BthyJC5qAPEMvcQ",
      authDomain: "kwitter-fb3ee.firebaseapp.com",
      projectId: "kwitter-fb3ee",
      storageBucket: "kwitter-fb3ee.appspot.com",
      messagingSenderId: "862374422424",
      appId: "1:862374422424:web:f92247796c1a2a55696ded"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
