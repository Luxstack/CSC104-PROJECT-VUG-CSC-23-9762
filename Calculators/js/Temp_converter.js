" temperature conversion programme"
// document.getElementById("submitBtn").onclick = function(){

//     let temp;
//     let text = document.getElementById("tempLabel")
   
//     if(document.getElementById("cBtn").checked){
//         temp = document.getElementById("textBox").value;
//         temp = Number(temp);
//         temp = toCelsius(temp);
//         text.innerHTML = temp + "°C"//° is alt+0176 on the numeric key pad on the key board
//     }
//     else if(document.getElementById("fBtn").checked){
//         temp = document.getElementById("textBox").value;
//         temp = Number(temp);
//         temp = toFahrenheit(temp);
//         text.innerHTML = temp + "°F"//° is alt+0176 on the numeric key pad on the key board
//     }
//     else{
//         text.innerHTML = "Select a unit";
//     }
// }

// let temp =32;
// temp = toCelsius(temp);
// console.log(temp);

// function toCelsius(temp){
//     return (temp - 32) * (5/9);
// }

// function toFahrenheit(temp){
//     return temp * 9 / 5 + 32;
// }

let option = window.prompt("What would you like to convert to? \n choose: \nC : Celsius \nF : Fahrenheit");

option = option.toUpperCase();

if(option == "F"){
    temp = window.prompt("Celsius: ");

    temp = Number(temp);

    let result = (temp - 32) * (5/9)

    let result2 = "In Fahrenheit: "+ result + "°F";

    window.prompt(result2);

    console.log(result2);
        
    let value = document.getElementById("value");

    value.innerHTML = `<h5>Fahrenheit to Celsius</h5> Celsius = ${temp} °C<br> Fahrenheit = ${result} °F`;
    
}else if(option == "C"){
    let temp = window.prompt("Celsius: ");

    temp = Number(temp);

    let y = temp * 9 / 5;

    let result = y + 32;

    let result2 = "In Celsius: "+ result + "°C";

    window.prompt(result2);

    console.log(result2);

    let value = document.getElementById("value");

    value.innerHTML = `<h5>Celsius to Fahrenheit</h5> Fahrenheit = ${temp} °F <br>Celsius = ${result} °C<br> `;
    
}else{

    prompt("Something went wrong");

}