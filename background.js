let isDarkMode = false;

chrome.action.onClicked.addListener((tab) => {
  isDarkMode = !isDarkMode;

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: toggleDarkMode,
    args: [isDarkMode],
  });

  chrome.action.setIcon({
    path: isDarkMode ? "icons/icon.png" : "icons/icon.png",
  });
});

function toggleDarkMode(enableDark) {
  if (enableDark) {
    document.body.style.filter = "invert(1) hue-rotate(180deg)";
  } else {
    document.body.style.filter = "none";
  }
}
