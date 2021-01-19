var named = document.getElementById("name");
var lastName = document.getElementById("lastName");
var userName = document.getElementById("userName");
var mail = document.getElementById("mail");
var pass1 = document.getElementById("pass1");
var pass2 = document.getElementById("pass2");
var btn = document.getElementById("buttoncheck");
var cardBody = document.querySelector("card__body");



named.addEventListener("keyup", function() {
    userName.value = named.value + lastName.value;
});


lastName.addEventListener("keyup", function() {
    userName.value = named.value + lastName.value;
});

mail.addEventListener("focusout", function() {
    var check = mail.value;
    var check = check.search("@");
    if (check == -1) {
        mail.classList.add("input--red");
        alert("Geçerli bir mail giriniz.");
    } else {
        mail.classList.remove("input--red");
    }
});


btn.addEventListener("click", function() {
    if (pass1.value.length < 8 || pass2.value.length < 8 || pass1.value.length != pass2.value.length) {
        console.log("aa");
    }
});