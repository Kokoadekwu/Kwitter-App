
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAz91aVSEBsAsy4np9xPXBqdzPPhhc4jng",
      authDomain: "kwitter-7f217.firebaseapp.com",
      databaseURL: "https://kwitter-7f217-default-rtdb.firebaseio.com",
      projectId: "kwitter-7f217",
      storageBucket: "kwitter-7f217.appspot.com",
      messagingSenderId: "405829355632",
      appId: "1:405829355632:web:b55acc757d3e565262ccb5"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
