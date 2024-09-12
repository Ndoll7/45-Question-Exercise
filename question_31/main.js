var userName = ["zaid", "shehroz", "admin", "abdul bari"];
userName = [];
if (userName.length === 0) {
    console.log("Your array is empty You need to find some users!");
}
else {
    //using forEach loop on array
    userName.forEach(function (oneUser) {
        if (oneUser === "admin") {
            console.log("Hello ".concat(oneUser, ", Would you like to see a status report"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", Thank You for logging in again"));
        }
    });
}
