//YOUR FIREBASE LINKS
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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4> "+name +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 c;ass='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+"onclick='updateLike(this.id)'>";
span_with_tag = "<span class-'gllyphicon glyphicon-thumbs-up'>Like: "+ like +"</span><button><hr>";
row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      }; });  }); }
getData();

function updateLike(message_id)
{
      console.log("clicked on like button -" + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().red(room_name).chiled(message_id).update({
            like : updated_likes
      });
 }
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
            });

      document.getElementById("msg").value = "";
}
