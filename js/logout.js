function removeNameAccountLogout() {
  localStorage.setItem("Name", "");
  localStorage.setItem("role", "");
  window.location.href = "index.html";
}
