// JavaScript to handle page navigation and interactivity

// Navigate from index.html to love.html
document.getElementById("continueButton").addEventListener("click", function() {
  window.location.href = "love.html"; // Redirect to love.html
});

// Navigate back from love.html to index.html
document.getElementById("backButton")?.addEventListener("click", function() {
  window.location.href = "index.html"; // Redirect back to index.html
});
