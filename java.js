var fullName = document.getElementById('full-name');
var phoneNumber = document.getElementById('phone-number');
var email = document.getElementById('email');

document.getElementById('signup-form').addEventListener("submit", submitFunction);

function submitFunction() {
    alert("Name: " + fullName.value + "\nPhone number: " + phoneNumber.value + "\nEmail: " + email.value);
}