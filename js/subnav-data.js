let listSubNav = [
  { title: "Sweetbox", key: "sweetbox" },
  { title: "Sweetin", key: "sweetin" },
  { title: "Flan", key: "flan" },
  { title: "Cookies", key: "cookies" },
  { title: "Donuts", key: "donuts" },
  { title: "Healthy", key: "healthy" },
];

let listsubnav = '';
for (let i = 0; i < listSubNav.length; i++) {
  listsubnav += `<li><a href="#">${listSubNav[i].title}</a></li>`;
}

document.querySelector(".subnav").innerHTML = listsubnav;
