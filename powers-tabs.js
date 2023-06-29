document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const tabLinks = [...document.querySelectorAll(".powers-tab-link")];

    tabLinks.forEach((link) => {
      link.onmouseover = () => {
        link.click();
      };
    });
  }, 1000);
});
