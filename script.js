const btn = document.querySelector("#submit-btn");
const fname = document.querySelector("#fname");
const form = document.querySelector("#contact-form");

function handleFormSubmission() {
  alert(`${fname.value} says fuisdhfsdf`);
}

form.addEventListener("submit", handleFormSubmission);


// ---------------------------------------------------------------------
// PHONE NUMBER VALIDATION

// let user type in only numbers and navigation/editing keys
let validKeystrokes = [];

//add numbers to list of valid keystrokes
const keypadZero = 48;
const numpadZero = 96;

for (let i = 0; i < 10; i++) {
  validKeystrokes.push(keypadZero + i);
  validKeystrokes.push(numpadZero + i);
}

//add other valid keys
const navKeystrokes = {
  backspace: 8,
  tab: 9,
  delete: 46,
  "left arrow": 37,
  "right arrow": 39
};

for (const key in navKeystrokes) {
  validKeystrokes.push(navKeystrokes[key]);
}

// check if key is valid. if not, do not display in input
function onKeyDown(e) {
  if (validKeystrokes.indexOf(e.keyCode) < 0) {
    e.preventDefault();
    return false;
  }
}

function formatPhoneText(value) {
	value = value.trim().replace(/-/g,'')

	if(value.length > 3 && value.length < 7){
		value = `${value.slice(0,3)}-${value.slice(3)}`
	}
	else if(value.length >=7){
		value = `${value.slice(0,3)}-${value.slice(3,6)}-${value.slice(6)}`
	}
	return value
}

function validatePhone(p){
  let phonePattern = /\d{3}-\d{3}-\d{4}/;

  return phonePattern.test(p)
}

function onKeyUp(e) {
  let input = e.target;
  let formatted = formatPhoneText(input.value);
  let isValid = (validatePhone(formatted) || formatted.length == 0);
  let color = isValid ? 'grey' : 'red';
  var borderWidth = isValid ? '1px' : '3px';
  input.style.borderColor = color;
  input.style.borderWidth = borderWidth;
  input.value = formatted;
}

const phone = document.querySelector('#phone');
phone.addEventListener('keydown', onKeyDown);
phone.addEventListener('keyup', onKeyUp);

