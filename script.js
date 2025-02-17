document.addEventListener("DOMContentLoaded", () => {
  const ratingButtons = document.querySelectorAll("button[data-value]");
  const submitButton = document.getElementById("submit-button");
  const thankYouState = document.querySelector("#thank-you-state");
  const ratingState = document.getElementById("rating-state");
  const selectedRatingElement = document.getElementById("rating");

  let selectedRating = null;

  ratingButtons.forEach((button) => {
    button.addEventListener("click", () => {
      ratingButtons.forEach((btn) =>
        btn.classList.remove("bg-white", "text-black")
      );
      button.classList.add("bg-white", "text-black");
      selectedRating = button.dataset.value;
    });
  });

  submitButton.addEventListener("click", () => {
    if (selectedRating !== null) {
      selectedRatingElement.textContent = selectedRating;
      ratingState.classList.add("hidden");
      thankYouState.classList.remove("hidden");
    }
  });
});
