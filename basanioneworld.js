<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Website</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>Welcome to My Website</h1>
    <p>This is a simple webpage built with HTML, CSS, and JavaScript.</p>
  </header>

  <main>
    <button onclick="changeMessage()">Click Me!</button>
    <p id="message">Hello, world!</p>
  </main>

  <footer>
    <p>&copy; 2025 My First Website</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>

/* Basic page styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background: #f0f2f5;
  color: #333;
}

header, footer {
  background-color: #282c34;
  color: white;
  text-align: center;
  padding: 1rem 0;
}

main {
  padding: 2rem;
  text-align: center;
}

button {
  padding: 0.7rem 1.5rem;
  font-size: 1rem;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

function changeMessage() {
  const msg = document.getElementById("message");
  msg.textContent = "You clicked the button!";
}
