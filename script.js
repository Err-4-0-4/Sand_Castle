const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
signUpButton.addEventListener('click', () => {
container.classList.add("right-panel-active");
});
signInButton.addEventListener('click', () => {
container.classList.remove("right-panel-active");
});


function check() {
let displayea = document.getElementById("displaye");
let displaypa = document.getElementById("displayp");
let li = document.getElementById('link');
if ((displayea.value === "admin") && (displaypa.value === "admin")) {
        console.log(displaypa.value);
        console.log(displayea.value);
        li.href = "welcome.html";
}
else {
  alert("ACCESS DENIED");
}
}
