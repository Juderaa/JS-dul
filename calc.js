
var choice = prompt("Select an operator: \n +,  -,  * or /");
//Define the variables
let x, y;
x = parseFloat(parseInt(prompt("Enter the First number:")));
y = parseFloat(parseInt(prompt("Enter the Second number:")));

if (choice == '+') {
    let z = x + y;
    alert("The sum: \n" + x + "+" + y + "=" + z);
}
else if (choice == '-') {
    var a = x - y;
    alert("The difference: \n" + x + "-" + y + "=" + a);
}
else if (choice == '*') {
    let b = x * y;
    alert("The product: \n" + x + "*" + y + "=" + b);
}
else if (choice == "/") {
    let c = x / y;
    alert("The quotient: \n" + x + "*" + y + "=" + c);
}
else {
    alert("Invalid")
}

function calc() {

}


