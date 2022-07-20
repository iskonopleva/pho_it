// Initialize button with the specified color
let START = document.getElementById("START");
START.style.backgroundColor = "#F1AB86";

//  When the button is clicked, send message to background.js to start replacing selections with Pho
START.addEventListener("click", async () => {
  window.close();
  chrome.runtime.sendMessage(
    {from: "popup", action: "START_SELECTION"}
  );
});