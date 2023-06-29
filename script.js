function setupTabs() {
  document.querySelectorAll(".tab-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const tabsBar = button.parentElement;
      const clickedTab = button.dataset.forTab;
      const contentContainer = document.querySelector(".main");
      const homeContent = document.querySelector(".home-content");
      const activeTab = contentContainer.querySelector(
        `.tabs[data-tab="${clickedTab}"]`
      );

      tabsBar.querySelectorAll(".tab-btn").forEach((button) => {
        button.classList.remove("tab-btn--active");
      });

      contentContainer.querySelectorAll(".tabs").forEach((tab) => {
        tab.classList.remove("tabs--active");
      });

      homeContent.querySelectorAll(".tab-btn").forEach((button) => {
        button.classList.remove("tab-btn--active");
      });

      button.classList.add("tab-btn--active");
      activeTab.classList.add("tabs--active");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupTabs();

  document.querySelectorAll(".tabs-bar").forEach((tabBtn) => {
    tabBtn.querySelector(".tab-btn").click();
  });

  document.querySelectorAll(".main").forEach((tabContent) => {
    tabContent.querySelector(".tabs").click();
  });
});
