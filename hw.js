// Khai báo object
function Student(name, age, gpa, level) {
  this.name = name;
  this.age = age;
  this.gpa = gpa;
  this.level = level;
  }
const student1 = new Student("Linh", 15, 9, "Kem");
const student2 = new Student("Mai", 18, 7, "Kem");
const student3 = new Student("Trang", 13, 6.5, "Kem");
const student4 = new Student("Anh", 13, 8, "Kem");
const student5 = new Student("Giang", 13, 5, "Kem");
const student6 = new Student("Trung", 13, 4, "Kem");

// Khai báo mảng
let students=[];
// Push object vào mảng
students.push(student1, student2, student3, student4, student5, student6);
// Tạo vòng lặp cho gpa, nếu gpa>8 thì in ra tên học sinh
for (let i = 0; i < students.length; i++) {
  if (students[i].gpa >= 8) {
    console.log("Tên học sinh giỏi: ", students[i].name)
    }
}

for (let i=0; i < students.length; i++) {
  if (students[i].gpa >= 8){
      students[i].level = "Giỏi"
      console.log("Học sinh giỏi",students[i])
  }
  else if (6.5 <= students[i].gpa && students[i].gpa < 8){
// Ngăn cách if bằng &&, không được gộp nghen
      students[i].level = "Khá"
      console.log("Học sinh khá",students[i])
  }
  else {
      students[i].level = "Kém"
      console.log("Học sinh kém",students[i])
  }
}



