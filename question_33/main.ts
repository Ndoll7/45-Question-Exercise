// creating a array
let number = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];

//using for-loop
for(let oneNumber of number){
    let oridinalEnding: string;

    if(oneNumber === 1){
        oridinalEnding = "st"
    }
    else if(oneNumber === 2){
        oridinalEnding = "nd"
    }
    else if(oneNumber === 3){
        oridinalEnding = "rd"
    }
    else{
        oridinalEnding = "th"
    }

    console.log(`${oneNumber}${oridinalEnding}`);
}