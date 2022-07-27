
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyC6SLhJsGTfHn_9EX5BnL0alqIbbppgF5U",
      authDomain: "kwitter-fe433.firebaseapp.com",
      databaseURL: "https://kwitter-fe433-default-rtdb.firebaseio.com",
      projectId: "kwitter-fe433",
      storageBucket: "kwitter-fe433.appspot.com",
      messagingSenderId: "291000948178",
      appId: "1:291000948178:web:bec1cd5f2ae7b6518fa40b"
    };

    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room name", room_name);

      window.location = "kwitter_page.html";
}
3
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_name);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}