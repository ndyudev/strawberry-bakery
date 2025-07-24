let listSubNav = [
  { title: "Sweetbox", key: "sweetbox" },
  { title: "Sweetin", key: "sweetin" },
  { title: "Flan", key: "flan" },
  { title: "Cookies", key: "cookies" },
  { title: "Cakes", key: "cakes" },
  { title: "Healthy", key: "healthy" },
];
let listsubnav = "";
for (let i = 0; i < listSubNav.length; i++) {
  listsubnav += `
    <li>
      <a href="#" onclick="showProduct_SubNav('${listSubNav[i].key}')">
        ${listSubNav[i].title}
      </a>
    </li>
  `;
}
document.querySelector(".subnav").innerHTML = listsubnav;
