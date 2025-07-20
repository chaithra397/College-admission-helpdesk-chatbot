async function sendMessage() {
    const inputField = document.getElementById("userInput");
    const userText = inputField.value.trim();
    if (!userText) return;

    appendMessage("user", userText);
    inputField.value = "";

    const response = await fetch('http://localhost:3000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText })
    });

    const data = await response.json();
    appendMessage("bot", data.reply);
}

function appendMessage(sender, text) {
    const chatbox = document.getElementById("chatbox");
    const message = document.createElement("div");
    message.className = sender;
    message.innerText = text;
    chatbox.appendChild(message);
    chatbox.scrollTop = chatbox.scrollHeight;
}
