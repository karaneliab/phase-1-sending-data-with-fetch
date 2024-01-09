// Add your code here
function submitData(name,email){
    const data = {
        name: name,
        email: email
    };
    const request ={
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body:JSON.stringify(data)
    
    };

   return fetch("http://localhost:3000/users",request)
    .then(function(response){
        return response.json()
    })
    
    .then(data => {
        document.body.innerHTML = data['id']
             
    
          
              
    })

    .catch(function(error){
        alert("there is an error");
        document.body.innerHTML= error.message
    })
    


}



const userName = "Steve";
const userEmail = "steve@steve.com";

submitData(userName, userEmail);