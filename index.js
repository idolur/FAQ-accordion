document.addEventListener("DOMContentLoaded", () => {
  const faqItem = document.querySelectorAll(".faq-item");

  faqItem.forEach((item) => {
    const questions = item.querySelector(".faq-question");
    const answer = item.querySelector(".answer");
    const toggleIcon = item.querySelector(".toggle-icon");

    questions.addEventListener("click", () => {
      answer.classList.toggle("hidden");
      if (answer.classList.contains("hidden")) {
        toggleIcon.src = "/assets/images/icon-plus.svg";
        toggleIcon.alt = "Expand answer";
      } else {
        toggleIcon.src = "/assets/images/icon-minus.svg";
        toggleIcon.alt = "Collapse answer";
      }
    });
  });
});
