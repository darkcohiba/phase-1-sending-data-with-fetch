
// const userData = {
//     userName: 'Sam',
//     userEmail: 'None ur Business',
// };
// const submitData = {
//     method: "POST",
//     headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//     },
//     body: JSON.stringify(userData)
// }

// fetch('http://localhost:3000/users',submitData)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(object){
//         console.log(object);
//     })
//     .catch(function(error){
//         alert('help me...help....bye');
//         console.log(error.message);
//     })





















function submitData( name, email ) {
    return fetch( 'http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify( {
          name,
          email
        } )
      } )
      .then(( response) => {
        return response.json()
      } )
      .then((object) => {
        document.body.innerHTML = object[ "id" ]
      } )
      .catch((error) => {
        document.body.innerHTML = error.message
      } )
  }



  // formats our POST
const postifyObject = (postObject) => {

  return {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
      },
      body: JSON.stringify(postObject),
  };
};

// push response to DOM
const pushToDOM = (response) => {
  console.log(response);
  let newH = document.createElement('h1');
  newH.innerText = response.id
  document.querySelector('body').appendChild(newH);

}

// takes the args and makes a call, pushing the 
const submitData = (inputName, inputEmail) => {

  let postObject = {
      name: inputName,
      email: inputEmail,
    }

return fetch("http://localhost:3000/users", postifyObject(postObject))
.then(resp => resp.json())
.then(resp => pushToDOM(resp))
.catch(error => pushToDOM(error.message));

}