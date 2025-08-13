let nameAcc = localStorage.getItem("Name");
let userRole = localStorage.getItem("role");
let account = "";
let accountSubnav = "";

if (nameAcc == null || nameAcc == "") {
  account = `<a href="#" id="login">
                <i class="fa-solid fa-user"></i>
                Account
              </a>`;
  accountSubnav = `
                <li><a href="login.html">Login</a></li>
                <li><a href="register.html">Register</a></li>
              `;
} else {
  account = `<a href="#" id="login">
                <i class="fa-solid fa-user"></i>
                ${nameAcc}
              </a>`;
  accountSubnav = `
                <li><a href="logout.html" onclick="removeNameAccountLogout()">Logout</a></li>
              `;
}

let menu = `
    <ul>
            <li><a href="index.html">Home</a></li>
            <li>
              <a href="product.html">
                Menu
                <i class="fa-solid fa-caret-down"></i>
              </a>
              <ul class="subnav" id="subnav-list">
                <li><a href="#" onclick="showProduct()">Sweetbox</a></li>
                <li><a href="#">Cake</a></li>
                <li><a href="#">Flan Gato</a></li>
              </ul>
            </li>
            <li><a href="#">Delivery</a></li>
            <li><a href="#">About</a></li>
            <li>
              ${account}
              <ul class="subnav">
                ${userRole == "1" ? '<li><a href="admin.html">Add Product</a></li>' : ''}
                ${accountSubnav}
              </ul>
            </li>
          </ul>
`;

document.querySelector(".nav").innerHTML = menu;
