const btn = document.querySelector('#submit-btn')
const fname = document.querySelector('#fname')
const form = document.querySelector('#contact-form')

function handleFormSubmission(){
  alert(`${fname.value} says fuisdhfsdf`)
}

form.addEventListener('submit', handleFormSubmission);
