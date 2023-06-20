const shareButton = document.querySelector('[data-js="share-button"]');

shareButton.addEventListener("click", () => {
  const isOpen = shareButton.getAttribute("aria-expanded") === "true";
  shareButton.setAttribute("aria-expanded", !isOpen);

  if (isOpen) {
    shareButton.setAttribute("aria-label", "Open share options");
  } else {
    shareButton.setAttribute("aria-label", "Close share options");
  }
});
