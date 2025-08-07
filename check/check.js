const checkboxs = document.querySelectorAll('input[type=checkbox]')

for(let node of checkboxs) {
    node.click();
}

const radio = document.querySelector('input[type=radio]')
radio.click()

const submitBtn = document.querySelector('.cxd-Button')
submitBtn.scrollIntoView({
    behavior: 'smooth'
});
submitBtn.click();