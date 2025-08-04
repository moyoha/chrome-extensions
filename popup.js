// 生成目录
document.getElementById("toggleButton").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  // 注入CSS文件
  await chrome.scripting.insertCSS({
    target: { tabId: tab.id },
    files: ["toc/toc.css"] // 相对于manifest.json的路径
  });
  // 在当前标签页执行脚本
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['toc/toc.js']
  });
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

