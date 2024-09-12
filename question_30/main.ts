//creating array

let userName = ["alishba", "kashish", "admin", "nisha"]

//using forEach loop on array
userName.forEach(oneUser =>{
    if(oneUser ==="admin"){
        console.log(`Hello ${oneUser}, Would you like to see a status report`)
    }else{
        console.log(`Hello ${oneUser}, Thank You for logging in again`)
    }
})