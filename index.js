let sideMenuManipulation = (function () {
  let openSideMenuBtn = document.querySelector(".mobile-nav__open-nav-btn");
  let closeSideMenuBtn = document.querySelector(".mobile-nav__close-nav-btn");
  let mobileNavList = document.querySelector(".mobile-nav__list");

  openSideMenuBtn.addEventListener("click", () => {
    mobileNavList.classList.remove("invisible");
    closeSideMenuBtn.classList.remove("invisible");
    openSideMenuBtn.classList.add("invisible");
  });
    
  closeSideMenuBtn.addEventListener("click", () => {
    mobileNavList.classList.add("invisible");
    openSideMenuBtn.classList.remove("invisible");
    closeSideMenuBtn.classList.add("invisible");
  });

  /** to close side menu if the page is resized to desktop without reloading */
  const observer = new ResizeObserver((entries) => {
    if (entries[0].contentRect.width < 850) {
    } else if (entries[0].contentRect.width > 850) {
      mobileNavList.classList.add("invisible");
      closeSideMenuBtn.classList.add("invisible");
      openSideMenuBtn.classList.remove("invisible");
    }
  });
  observer.observe(document.body, { box: "border-box" });
})();
