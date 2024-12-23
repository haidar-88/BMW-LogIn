const email = document.getElementById("email");

function redirectToWebsite() {
    
    const mail = email.value;
    const emailValue = email.value;
    if (!emailValue.includes("@") || !emailValue.includes(".com")) {
        alert("Invalid Email or Password");
        return;
    }
    window.location.href = "https://www.bmw.com"; 
}
