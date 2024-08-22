//step 1
const mainEl = document.querySelector("main");
//step 2 - apply background color
mainEl.style.backgroundColor = "var(--main-bg)";
//step 3 - add h1
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
//step 4 - add flex class list
mainEl.setAttribute("class", "flex-ctr");