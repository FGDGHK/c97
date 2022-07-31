
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
      apiKey: "AIzaSyCsXoryvQLO6wKJkXv20Co1ak7_xEZux6c",
      authDomain: "kwitter-c57aa.firebaseapp.com",
      projectId: "kwitter-c57aa",
      storageBucket: "kwitter-c57aa.appspot.com",
      messagingSenderId: "244398625207",
      appId: "1:244398625207:web:06c7127c8f0b7eb3e09832"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    username = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + username;

    function addRoom()
    {
    

      room_name = document.getElementById("room_name").value;

    //firebase.database().ref("/").child(room_name).update({
    //      purpose : "adding room name"
    //});

          localStorage.setItem("room_name", room_name);
          //window.location = "kwitter_page.html";
      
    }

    
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location= "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}



