var named = document.getElementById("name");
var lastName = document.getElementById("lastName");
var userName = document.getElementById("userName");



named.addEventListener("keyup", function() {
    userName.value = named.value + lastName.value;
});


lastName.addEventListener("keyup", function() {
    userName.value = named.value + lastName.value;
});