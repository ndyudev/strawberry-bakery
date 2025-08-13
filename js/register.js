function kiemtra() {
  let kt = true;

  // Kiểm tra name
  let name = document.getElementById("name");
  if (name.value.length == 0) {
    name.classList.add("borderWarning");
    kt = false;
  } else {
    name.classList.remove("borderWarning");
  }

  // Kiểm tra sdt
  let sodt = document.getElementById("sodt");
  if (sodt.value.length == 0) {
    sodt.classList.add("borderWarning");
    kt = false;
  } else {
    sodt.classList.remove("borderWarning");
  }

  // Kiểm tra email
  let email = document.getElementById("email");
  if (email.value.length == 0) {
    email.classList.add("borderWarning");
    kt = false;
  } else {
    email.classList.remove("borderWarning");
  }

  // Kiểm tra mật khẩu
  let pw = document.getElementById("pw");
  if (pw.value.length < 8) {
    pw.classList.add("borderWarning");
    kt = false;
  } else {
    pw.classList.remove("borderWarning");
  }

  // Kiểm tra mật khẩu nhập lại
  let repw = document.getElementById("repw");
  if (repw.value.length < 8) {
    repw.classList.add("borderWarning");
    kt = false;
  } else {
    repw.classList.remove("borderWarning");
  }
  if (repw.value != pw.value) {
    repw.classList.add("borderWarning");
    kt = false;
  } else {
    repw.classList.remove("borderWarning");
  }

  //Nhập liệu hợp lệ
  let user = {
    name: name.value,
    sodt: sodt.value,
    email: email.value,
    pw: pw.value,
    role: 1,
  };

  //Kiểm tra email được đăng ký chưa
  let arrUser = localStorage.getItem("arrUser");
  if (arrUser == null) {
    arrUser = [];
  } else {
    arrUser = JSON.parse(localStorage.getItem("arrUser"));
  }
  for (let i = 0; i < arrUser.length; i++) {
    const ele = arrUser[i];
    if (ele.email == user.email) {
      alert("Email đã đăng ký");
      email.classList.add("borderWarning");
      kt = false;
      break;
    }
  }
  if (kt == true) {
    arrUser.push(user);
    localStorage.setItem("arrUser", JSON.stringify(arrUser));
  }

  return kt;
}
