const salesFormValidation = () => {
const name = document.getElementById("quantity")

let nameRegex = /^[a-zA-Z\s]{1,50}$/;

if (nameRegex.test(name.value) ==false) {
    name.style.border = "1px solid red"
}
}