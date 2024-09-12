// array of current user
let current_user = ["alishba", "nisha", "kashish","fozia", "ifra"]

// array of new user
let new_user = ["zaid", "nisha", "shehroz", "kashish", "alishba"]

//loop through new user to check for username avaibility
new_user.forEach(new_one_user => {
    //making a condition for username already exist and save in our_condition variable
    let our_condition = current_user.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    if( our_condition){
        console.log(`Sorry ${new_one_user} is already taken!`)
    }else{
        console.log(`This username ${new_one_user} is available`)
    }
})