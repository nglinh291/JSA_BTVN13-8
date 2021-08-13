function User(name, age, email, password, repeatpassword) {
  this.name = name;
  this.age = age;
  this.email = email;
  this.password = password;
  this.repeatpassword = repeatpassword
}

// Lấy ID của button
let submit = document.querySelector("#submit"); 

// Gán sự kiện onclick vào button
submit.onclick = function () { 
// Lấy giá trị ở các input
  let name = document.getElementById("name").value; 
  let age = document.getElementById("age").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let repeatpassword = document.getElementById("repeatpassword").value;

// Tạo 1 object có value là ở ô input mình vừa lấy
  const user = new User(name, age, email, password, repeatpassword); 

//   let x = document.getElementById("age").value;
//   let text;
//   if (x < 100 && x > 0) {
//     text = " "
//     localStorage.setItem("user", JSON.stringify(user)); 
//   } else {
//     text = "Input not valid";
//   }
//   document.getElementById("text-age").innerHTML = text;
// };



  if (name==null || name==""){  
    alert("Name can't be blank");  
    return false;  
  }
  else if(age < 100 && age > 0){
    alert("Age must be between 0 and 100");  
    return false; 
  }
  else if(password.length<6){  
    alert("Password must be at least 6 characters long.");  
    return false;  
  } 
  // else if(repeatpassword # password){
  //   alert("Repeat password and password must be the same.");  
  //   return false;
  // }
  else{
    document.getElementById("text-age").innerHTML = text;
  }
  
}  