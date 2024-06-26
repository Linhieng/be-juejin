renderElementToPage()

// 监听浏览器前进回退
window.addEventListener('popstate', (evt) => {
    console.log(evt)
    console.log('你好？');
    renderElementToPage()
}, false)

function renderElementToPage() {
    if (!(
        location.origin === 'https://juejin.cn' && location.pathname === '/creator/home'
    )) {
        return
    }

    const eleTopUl = document.querySelector(".nav-list .right-side-nav");

    const eleGotoPin = document.createElement("li");
    eleGotoPin.classList.add("nav-item", "linhieng");
    eleGotoPin.innerHTML = ` <a target="_blank" href="https://juejin.cn/pins">发沸点</a> `;

    const eleGotoCode = document.createElement("li");
    eleGotoCode.classList.add("nav-item", "linhieng");
    eleGotoCode.innerHTML = ` <a target="_blank" href="https://code.juejin.cn/">写代码</a> `;

    const eleGotoDraft = document.createElement("li");
    eleGotoDraft.classList.add("nav-item", "linhieng");
    eleGotoDraft.innerHTML = ` <a target="_blank" href="https://juejin.cn/editor/drafts/7269743983189786660">文章草稿</a> `;

    eleTopUl.prepend(eleGotoDraft, eleGotoCode, eleGotoPin);
}
