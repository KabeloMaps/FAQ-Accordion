var buttons = document.querySelectorAll(".faq-button");
var answers = document.querySelectorAll(".faq-answer");
var icons = document.querySelectorAll("#plus_icon");

buttons.forEach(function (button, index) {
  button.onclick = function toggleInformation() {
    var p = answers[index]; // Get the corresponding answer
    var img = icons[index]; // Get the corresponding icon

    if (p.style.display === "none" || p.style.display === "") {
      // Show the paragraph and switch to the minus icon
      p.style.display = "grid";
      img.setAttribute("src", "./assets/images/icon-minus.svg");
    } else {
      // Hide the paragraph and switch to the plus icon
      p.style.display = "none";
      img.setAttribute("src", "./assets/images/icon-plus.svg");
    }
  };
});
