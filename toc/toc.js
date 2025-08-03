// 创建目录容器
const tocContainer = document.createElement('div');
tocContainer.id = 'toc-container';

// 创建目录标题
const tocTitle = document.createElement('h2');
tocTitle.textContent = '目录';
tocContainer.appendChild(tocTitle);

// 创建目录列表
const tocList = document.createElement('ul');
tocList.id = 'toc-list';
tocContainer.appendChild(tocList);

let count = 0;
// 获取文章中的所有标题元素
const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

// 为每个标题生成目录项
headings.forEach(heading => {
  // 跳过h1标题（通常是文章标题）
  if (heading.tagName === 'H1') return;

  if (!heading.id) {
    heading.id = `toc-heading-${count++}`;
  }
  // 创建目录项
  const listItem = document.createElement('li');
  listItem.className = `toc-${heading.tagName.toLowerCase()}`;
  listItem.dataset.headingId = heading.id;
  listItem.textContent = heading.textContent;

  // 滚动到目标位置
  listItem.addEventListener('click', smoothScrollInto);
  tocList.appendChild(listItem);
});

document.body.appendChild(tocContainer);

function smoothScrollInto(e) {
  const headingId = e.target.dataset.headingId;
  const heading = document.getElementById(headingId);
  heading.scrollIntoView({
    behavior: 'smooth'
  });
}