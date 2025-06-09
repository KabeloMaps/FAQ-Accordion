var buttons = document.querySelectorAll(".faq-button");
var answers = document.querySelectorAll(".faq-answer");
var icons = document.querySelectorAll("#plus_icon");
var prompts = document.querySelectorAll('[id^="Prompt-"]'); // Target Prompt-1, Prompt-2, etc.

buttons.forEach(function (button, index) {
  button.onclick = function toggleInformation() {
    var p = answers[index];
    var img = icons[index];

    if (p.style.display === "none" || p.style.display === "") {
      p.style.display = "grid";
      img.setAttribute("src", "./assets/images/icon-minus.svg");
      button.setAttribute("aria-expanded", "true");
    } else {
      p.style.display = "none";
      img.setAttribute("src", "./assets/images/icon-plus.svg");
      button.setAttribute("aria-expanded", "false");
    }
  };

  button.onkeydown = function (event) {
    if (
      event.key === "Enter" ||
      event.key === " " ||
      event.keyCode === 13 ||
      event.keyCode === 32
    ) {
      event.preventDefault();
      button.onclick();
    }
  };
});

// Allow prompt containers to toggle answer as well
prompts.forEach(function (prompt, index) {
  prompt.onkeydown = function (event) {
    if (
      event.key === "Enter" ||
      event.key === " " ||
      event.keyCode === 13 ||
      event.keyCode === 32
    ) {
      event.preventDefault();
      buttons[index].onclick(); // Trigger same toggle
    }
  };
});
