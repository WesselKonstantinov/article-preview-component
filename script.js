const shareButton = document.querySelector('[data-js="share-button"]');
const shareSection = document.querySelector('[data-js="share-section"]');

shareButton.addEventListener("click", (e) => {
  const isOpen = shareButton.getAttribute("aria-expanded") === "true";
  shareButton.setAttribute("aria-expanded", !isOpen);
  isOpen
    ? shareButton.setAttribute("aria-label", "Open share options")
    : shareButton.setAttribute("aria-label", "Close share options");
});
