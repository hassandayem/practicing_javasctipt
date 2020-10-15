const tabs = document.querySelectorAll("[data-tab-target]");
const tabsContent = document.querySelectorAll("[data-tab-content]");

// 1. Loop through the tabs
tabs.forEach((tab) => {
  // 2. Listen to the click event on each tab
  tab.addEventListener("click", () => {
    // 3. Selcet the tab content (the target) to add the active class
    const target = document.querySelector(tab.dataset.tabTarget);
    // 5. Loop through the content divs to add or remove active class
    tabsContent.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    // 6. Loop through the tab itself (the clickable tab) to add or remove active class
    tabs.forEach((tab) => {
      // 7. Remove the active class from the tab
      tab.classList.remove("active");
    });

    // 8. Add the active class from the tab
    tab.classList.add("active");
    // 4. Add active class to the content
    target.classList.add("active");
  });
});
