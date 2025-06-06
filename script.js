const signupForm = document.getElementById('signupForm');
const loginForm = document.getElementById('loginForm');
const responseText = document.getElementById('response');

signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(signupForm).entries());

  const res = await fetch('/signup', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  });

  const text = await res.text();
  responseText.innerText = text;
});

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(loginForm).entries());

  const res = await fetch('/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  });

  if (res.ok) {
    window.location.href = `/home.html?username=${encodeURIComponent(data.username)}`;
  } else {
    const text = await res.text();
    responseText.innerText = text;
  }
});
