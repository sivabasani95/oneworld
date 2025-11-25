console.log("Start");
for (let i = 0; i < 3; i++) {
    console.log("Iteration", i);
}
console.log("End");

function changeMessage() {
  const msg = document.getElementById("message");
  msg.textContent = "You clicked the button!";
}
