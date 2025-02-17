// Aguarda o carregamento do DOM
document.addEventListener("DOMContentLoaded", () => {
  // Seleção dos elementos do DOM
  const ratingButtons = document.querySelectorAll("button[data-value]");
  const submitButton = document.getElementById("submit-button");
  const thankYouState = document.querySelector("#thank-you-state");
  const ratingState = document.getElementById("rating-state");
  const selectedRatingElement = document.getElementById("rating");

  // Armazena a avaliação selecionada
  let selectedRating = null;

  // Gerencia a seleção das avaliações
  ratingButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove seleção anterior
      ratingButtons.forEach((btn) =>
        btn.classList.remove("bg-white", "text-black")
      );
      // Aplica nova seleção
      button.classList.add("bg-white", "text-black");
      selectedRating = button.dataset.value;
    });
  });

  // Gerencia o envio da avaliação
  submitButton.addEventListener("click", () => {
    if (selectedRating !== null) {
      // Atualiza e exibe o estado de agradecimento
      selectedRatingElement.textContent = selectedRating;
      ratingState.classList.add("hidden");
      thankYouState.classList.remove("hidden");
    }
  });
});
