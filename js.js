
function cal(operation) {
    let a1 = document.getElementById("a1").value;
    let a2 = document.getElementById("a2").value;

    

    a1 = Number(a1);
    a2 = Number(a2);

    if (isNaN(a1) || isNaN(a2)) {
        document.getElementById("result").value = "Invalid input. Please enter valid numbers.";
        return;
    }

    let result;

    if (operation === "add") {
        result = a1 + a2;
    } else if (operation === "mult") {
        result = a1 * a2;
    } 
    else if (operation === "sub") {
        result = a1 - a2;
    } 

    document.getElementById("result").value = result;
}
  /*
    if(result>50)
    {
        document.body.style.backgroundColor="blue"
    }
    else{
        document.body.style.backgroundColor="red"
    } */

