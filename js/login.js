function kiemtra(){
  // Kiểm tra email
  let user = document.getElementById('user');
  let pass = document.getElementById('pass');

  //Kiểm tra email
  if(user.value.length==0){
    alert("Nhập Tên Tài Khoản");
    return false;
  }

  //Kiểm tra pass
  if(pass.value.length==0){
    alert("Nhập Password");
    return false;
  }

  // Kiểm tra user và pass
  let arrUser = localStorage.getItem('arrUser');
  if(arrUser == null){
    arrUser = [];
    alert("Chưa có user đăng ký");
    window.location.href = "register.html";
    return false;
  }else{
    arrUser = JSON.parse(localStorage.getItem('arrUser'));
  }

  let flag = false;
  let role='';
  let name = '';
  for (let i = 0; i < arrUser.length; i++) {
    const ele = arrUser[i];
    if (ele.email==user.value && ele.pw==pass.value) {
        flag = true;
        role = ele.role;
        name = ele.name;
        break;
    } 
  }
  if(flag==true){
    localStorage.setItem('Name',name);
    localStorage.setItem('role',role);
    return true;
  }else{
    alert("Đăng nhập thất bại");
    return false;
  }
}
