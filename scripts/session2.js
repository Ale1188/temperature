function multi(num, num1){
    console.log(num*num2);
}


function taxtCalculation(){
    var product=prompt("Enter the product's name:");
    var price=prompt("Enter the price:");
    var qty=prompt("Enter the quantity:");
    const taxes = 1.08;

    var subtotal=price*qty;//200
    var total=subtotal*taxes;

    console.log(product);
    console.log(price);
    console.log(total);
}


function add(){
    var num1= Number(prompt("Enter first number:"));
    var num2= Number(prompt("Enter second number:"));
    const total = num1 + num2;
    console.log("Result="+total);
}

function getGPA(){
    var name = prompt("Enter the name:");
    var grade101 = Number(prompt("Enter the 101 grade:"));
    var grade102 = Number(prompt("Enter the 102 grade:"));

    var gpa = (grade101+grade102)/2;

    document.getElementById("studentList").innerHTML+=`
    <p> Name: ${name}</p>
    <p> GPA: ${gpa}</p>
    `;
}