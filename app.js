var database = firebase.database();
var messagesDiv = document.getElementById("messages");
var messageForm = document.getElementById("message-form");
var messageInput = document.getElementById("message-input");
messageForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var messageText = messageInput.value;
    var message = {
        text: messageText,
        timestamp: Date.now()
    };
    database.ref("messages").push(message);
    messageInput.value = "";
});
database.ref("messages").on("child_added", function(snapshot) {
    var message = snapshot.val();
    var messageElement = document.createElement("div");
    messageElement.innerHTML = "<strong>" + message.timestamp + ":</strong> " + message.text;
    messagesDiv.appendChild(messageElement);
});