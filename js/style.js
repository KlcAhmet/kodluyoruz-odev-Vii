var named = document.getElementById("name");
var lastName = document.getElementById("lastName");
var userName = document.getElementById("userName");
var mail = document.getElementById("mail");



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