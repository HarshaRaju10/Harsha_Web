function greetUser() {
  const input = document.getElementById("nameInput");
  const name = input.value.trim();
  if (name) {
    const greeting = document.getElementById("greeting");
    greeting.textContent = `Hello, ${name} 👋`;
    input.style.display = "none";
    input.nextElementSibling.style.display = "none";
  } else {
    alert("Please enter a name!");
  }
}

window.onload = () => {
  const greeting = document.getElementById("greeting");
  const text = "Hello, Stranger 👋";
  let index = 0;

  const typing = setInterval(() => {
    greeting.textContent = text.slice(0, ++index);
    if (index === text.length) clearInterval(typing);
  }, 70);
};

