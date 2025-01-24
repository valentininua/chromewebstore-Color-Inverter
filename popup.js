document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("toggleButton");
    button.addEventListener("click", () => {
      chrome.action.getTitle({}, (title) => {
        const isInverted = title === "Inverted";
        chrome.action.setTitle({ title: isInverted ? "Normal" : "Inverted" });
  
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            func: toggleInvertColors,
            args: [!isInverted],
          });
        });
  
        button.textContent = isInverted
          ? "Включить инверсию"
          : "Выключить инверсию";
      });
    });
  });
  
  function toggleInvertColors(isInverted) {
    document.body.style.filter = isInverted ? "invert(1)" : "none";
  }
  