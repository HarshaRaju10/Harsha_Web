const userName = prompt("Please enter your name:");
if (userName) {
  document.getElementById("username").textContent = userName;
} else {
  document.getElementById("username").textContent = "Stranger!";
}
