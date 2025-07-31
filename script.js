let currentScene = 1;
let storyStep = 0;
const messages = [
  "So today was a little silly...",
  "Maybe I did a thing 🙃",
  "But it wasn’t meant to bother you",
  "Just to make you smile... maybe laugh a little too loud"
];

function nextScene() {
  document.getElementById(`scene${currentScene}`).classList.add('hidden');
  currentScene++;
  document.getElementById(`scene${currentScene}`).classList.remove('hidden');
}

function nextMessage() {
  storyStep++;
  if (storyStep < messages.length) {
    document.getElementById("storyText").innerText = messages[storyStep];
  } else {
    nextScene(); // Move to apology
  }
}
