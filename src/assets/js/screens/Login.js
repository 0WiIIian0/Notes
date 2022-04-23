'use-strict';

const signupForm = document.getElementById('signup');
const signinForm = document.getElementById('signin');

signinForm.onsubmit = (e) => {
  e.preventDefault();
}

signupForm.onsubmit = (e) => {
  e.preventDefault();
}

const data = {
  name: 'Renault',
  email: 'renault@test.com',
  password: '123654789'
};

const urlParams = encodeURI((() => {

  let params = '';

  for (let prop in data) {
    params += `${prop}=${data[prop]}&`;
  }

  return params.substring(0, params.length-1);

})());

fetch(`/api/user/signup.php?${urlParams}`, {
  method: 'GET'
}).then((response) => {

  response.text().then((result) => {
    console.log(result);
  });

});

