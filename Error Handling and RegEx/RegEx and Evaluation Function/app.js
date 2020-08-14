document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("zipcode").addEventListener("blur", validateZipcode);
document.getElementById("phone").addEventListener("blur", validatePhone);

function validateName() {
  const name = document.getElementById("name");
  const re = /^[a-zA-Z, ]{5,30}$/;

  if (!re.test(name.value)) {
    name.classList.add("is-invalid");
  } else {
    name.classList.remove("is-invalid");
  }
}

function validateEmail() {
  const email = document.getElementById("email");
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (!re.test(email.value)) {
    email.classList.add("is-invalid");
  } else {
    email.classList.remove("is-invalid");
  }
}
function validateZipcode() {
  const zip = document.getElementById("zipcode");
  const re = /^\d{4}$/;

  if (!re.test(zip.value)) {
    zip.classList.add("is-invalid");
  } else {
    zip.classList.remove("is-invalid");
  }
}
function validatePhone() {
  const phone = document.getElementById("phone");
  const re1 = /^\(?\+?\d{2}\)?[-. ]?\d{10}$/;
  const re2 = /^\d{11}$/;
  console.log(phone.value);

  if (!re1.test(phone.value) && !re2.test(phone.value)) {
    phone.classList.add("is-invalid");
  } else {
    phone.classList.remove("is-invalid");
  }
}
