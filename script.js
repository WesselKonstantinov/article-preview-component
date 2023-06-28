const shareButton = document.querySelector('[data-js="share-button"]');
const shareSection = document.querySelector('[data-js="share-section"]');

shareButton.addEventListener("click", () => {
  const isOpen = shareButton.getAttribute("aria-expanded") === "true";
  shareButton.setAttribute("aria-expanded", !isOpen);
});

[shareButton, shareSection].forEach((element) => {
  element.addEventListener("keyup", (e) => {
    if (e.code === "Escape") {
      shareButton.setAttribute("aria-expanded", false);
    }
  });
});
