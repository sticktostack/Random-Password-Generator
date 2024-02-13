let inputBox = document.getElementById("inputbox");
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "1234567890";
let all = uppercase + lowercase + numbers;

document.getElementById("Generate").addEventListener("click", function () {
  copybtn.innerHTML = "copy";
  let password = "";
  password += uppercase[Math.floor(Math.random() * uppercase.length)];
  password += lowercase[Math.floor(Math.random() * lowercase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  for (length = 12; length > password.length; ) {
    password += all[Math.floor(Math.random() * all.length)];
  }
    inputBox.value = password;
});
let copybtn = document.getElementById("copy");
copybtn.addEventListener("click", function () {
  inputBox.select();
  document.execCommand("copy");
  inputBox.value = "";
  copybtn.innerHTML = "copied";
});


