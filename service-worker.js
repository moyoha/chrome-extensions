chrome.action.onClicked.addListener((tab) => {
  console.log(tab);
  // 在当前标签页执行脚本
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['toc/toc.js']
  });

  // 在当前标签页注入CSS
  chrome.scripting.insertCSS({
    target: { tabId: tab.id },
    files: ['toc/toc.css']
  });
});

console.log('Extension icon clicked!');