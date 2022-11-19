
const form = document.querySelector("form");
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");

email.addEventListener("input", (event) => {
  

  if (email.validity.valid) {
   
    emailError.textContent = ""; 
    emailError.className = "error"; 
  } else {
    
    showError();
  }
});

form.addEventListener("submit", (event) => {
 
  if (!email.validity.valid) {
    
    showError();
    
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    
    emailError.textContent = "You need to enter an e-mail address.";
  } else if (email.validity.typeMismatch) {

    emailError.textContent = "Entered value needs to be an e-mail address.";
  } else if (email.validity.tooShort) {
 
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }

  emailError.className = "error active";

}

//second eample about validating forms

function validate(){
    let input = document.getElementById("input")

    if(!input.validity.rangeOverFlow){
        document.getElementById("result").innerHTML = input.validationMessage
    }
}

//using fetch

 let fetchform = document.getElementById('form')

 fetchform.addEventListener('submit' ,function(e){
  
  e.preventDefault()

  let name =document.getElementById('userId').value
  let body = document.getElementById('body').value
  

  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: name,
    body: body,
    
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
    .then(function(response){
      return response.json()
    })
    .then(function(data){
      console.log(data)
      let result = document.getElementById('result')
      result.innerHTML = `<p>the title of the todo is ${data.title}</p>
      <p>the body of the todo is ${data.body}</p>`
    })
})
