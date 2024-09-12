//creating array
var userName = ["alishba", "kashish", "admin", "nisha"];
//using forEach loop on array
userName.forEach(function (oneUser) {
    if (oneUser === "admin") {
        console.log("Hello ".concat(oneUser, ", Would you like to see a status report"));
    }
    else {
        console.log("Hello ".concat(oneUser, "Thank You for logging in again"));
    }
});
