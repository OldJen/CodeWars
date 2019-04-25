// Sum Numbers
//
//Add each item in array to total and return the total at the end. 
//
function sum (numbers) {
    "use strict";
    let total=0;
    numbers.forEach(element => total += element);
    return total;  
};
