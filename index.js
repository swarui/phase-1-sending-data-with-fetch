// Add your code here
function submitData(name, email){
  return fetch('http://localhost:3000/users', {
      method : 'POST',
      headers : {

          "content-type" : "application/json",
          Accept : "application/json"
      },
      body : JSON.stringify({
          name : name,
          email: email
      }),
  })
  .then(res => res.json())
  .then((data) => {
      const dataID = document.createElement('p').textContent = `ID: ${data.id}`
      document.body.append(dataID)
  })
  .catch((error) => {
      const errorMesg = document.createElement('p').textContent = `Error: ${error.message}`
      document.body.append(errorMesg) 
  })
}
