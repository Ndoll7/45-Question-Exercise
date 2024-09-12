// array of current user
var current_user = ["alishba", "nisha", "kashish", "fozia", "ifra"];
// array of new user
var new_user = ["zaid", "nisha", "shehroz", "kashish", "alishba"];
//loop through new user to check for username avaibility
new_user.forEach(function (new_one_user) {
    //making a condition for username already exist and save in our_condition variable
    var our_condition = current_user.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is available"));
    }
});
