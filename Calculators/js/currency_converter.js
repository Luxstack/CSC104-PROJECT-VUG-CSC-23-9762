option = window.prompt("What would you like to convert to?\nN : Naira :\nD : Dollar: ");

option = option.toUpperCase();

if (option == "D") {
    let naira = prompt("Enter amount NGN : ");

    naira = Number(naira);

    calc = Math.ceil(naira * 0.00068);

    prompt(naira + " NGN = " + calc + "USD" );

    let value = document.getElementById("value");

    value.innerHTML = naira + " NGN = " + calc + " USD"

}else if(option == "N") {
    let dollar = prompt("Enter amount USD : ");

    dollar = Number(dollar);

    calc = Math.ceil(dollar / 0.0068);
    
    prompt(dollar + " USD = " + calc + " NGN");

    let value = document.getElementById("value");

    value.innerHTML = dollar + " USD = " + calc + " NGN"
}
