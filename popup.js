import { addToc } from './toc/toc.js';
let isAddStyle = false;
// 生成目录
document.getElementById("toggleButton").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: addToc,
  });
  // 注入CSS文件
  if (!isAddStyle) {
    chrome.scripting.insertCSS({
      target: { tabId: tab.id },
      files: ["toc/toc.css"]
    });
    isAddStyle = true;
  } else {
    chrome.scripting.removeCSS({
      target: { tabId: tab.id },
      files: ["toc/toc.css"]
    });
    isAddStyle = false;
  }
});

// 签章
document.getElementById("checkButton").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  // 在当前标签页执行脚本
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['check/check.js']
  });
});

