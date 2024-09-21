document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".question");

  const resetIconsAndAnswers = () => {
    const icons = document.querySelectorAll(".icon");

    icons.forEach(icon => {
      const answerParagraph = icon.closest(".question").nextElementSibling.querySelector("p");
      icon.src = "images/icon-plus.svg"
      icon.alt = "Plus Icon";
      icon.classList.remove("minus");
      icon.classList.add("plus");
      answerParagraph.classList.remove("show");
      answerParagraph.classList.add("hide");
    });
  };

  questions.forEach(question => {
    question.addEventListener("click", () => {
      const icon = question.querySelector(".icon");
      const isPlus = icon.classList.contains("plus");
      const answerParagraph = question.nextElementSibling.querySelector("p");

      resetIconsAndAnswers();

      if (isPlus) {
        icon.src = "images/icon-minus.svg";
        icon.alt = "Minus Icon";
        icon.classList.remove("plus");
        icon.classList.add("minus");
        answerParagraph.classList.remove("hide");
        answerParagraph.classList.add("show");
      }
    });
  });
});