const correctPassword = "jeff";

function checkPassword() {
  const userInput = prompt("Enter the password:")
  if (userInput !== correctPassword) {
    alert("Oopsie! wrong password");
    window.location.href = "https://www.google.com"; // redirect if incorrect
  } else {
    // show content, remove black overlay
    document.getElementById("overlay").style.display = "none"; //hide
    document.getElementById("mainContent").style.display = "block"; //visible, show the real page content by setting it to block
  }
}
window.onload = checkPassword;