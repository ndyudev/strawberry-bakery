let listSubNav = [
  { title: "Sweetbox" },
  { title: "Cake" },
  { title: "Pastry" },
  { title: "Cookies" },
  { title: "Donuts" },
];

let listsubnav = '';
for (let i = 0; i < listSubNav.length; i++) {
  listsubnav += `<li><a href="#">${listSubNav[i].title}</a></li>`;
}

document.querySelector("#subnav-list").innerHTML = listsubnav;
