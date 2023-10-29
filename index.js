// Add your code here
function submitData(name,email){
    const apiUrl= "http://localhost:3000";

const data = {
    name:name,
    email: email,
};

return fetch(apiUrl, {
    method: "POST",
    headers:{
        "Content-Type":"application/json",
        "Accept" : "application/json",
    },
    body:JSON.stringify(data),
})

.then(response=> response.json())
.then((data)=> {
    const id = data.id;
    const idElement= document.createElement("p");
    idElement.textContent = `New ID:${id}`;
    document.appendChild(idElement);
    return data;

})

.catch((error)=> {
    const errorElement = document.createElement("p");
    errorElement.textContent= `Error:${error.message}`;
    document.body.appendChild(idElement);
    throw error;
});

}

const userName = "Angela Shirao";
const userEmail = "angelashirao1@gmail.com";

submitData(userName,userEmail)
.then(response=> console.log(response))
.catch(error => console.error(error))