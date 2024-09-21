document.addEventListener("DOMContentLoaded", () => {
  const icons = document.querySelectorAll(".icon");

  icons.forEach(icon => {
    icon.addEventListener("click", () => {
      const isPlus = icon.classList.contains("plus");
      const answerParagraph = icon.closest(".question").nextElementSibling.querySelector("p");

      icons.forEach(i => {
        i.src = "images/icon-plus.svg";
        i.alt = "Plus Icon";
        i.classList.remove("minus");
        i.classList.add("plus");
        i.closest(".question").nextElementSibling.querySelector("p").classList.remove("show");
        i.closest(".question").nextElementSibling.querySelector("p").classList.add("hide");
      });

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