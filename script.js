const shareButton = document.querySelector('[data-js="share-button"]');
const shareSection = document.querySelector('[data-js="share-section"]');

shareButton.addEventListener("click", () => {
  const isOpen = shareButton.getAttribute("aria-expanded") === "true";
  shareButton.setAttribute("aria-expanded", !isOpen);

  if (isOpen) {
    shareButton.setAttribute("aria-label", "Open share options");
  } else {
    shareButton.setAttribute("aria-label", "Close share options");
  }
});

[shareButton, shareSection].forEach((element) => {
  element.addEventListener("keyup", (e) => {
    if (e.code === "Escape") {
      shareButton.setAttribute("aria-expanded", false);
      shareButton.setAttribute("aria-label", "Open share options");
    }
  });
});
