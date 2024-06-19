let option = window.prompt("What would you like to calculate? \nChoose: \nC : Compound Interest \nS : Simple Interest");

option = option.toLocaleUpperCase()

if (option == "C") {
    let p = prompt("Principal amount : ");
    p = Number(p);

    let r = prompt("Interest rate : ");
    r = Number(r);

    let n = prompt("number of years the interest rate is applied over time : ");
    n = Number(n);

    let r2 = r/100;

    let a = p * 1 + r2;

    let result = Math.ceil(Math.pow(a,n));

    window.prompt("Compound Interest = " + result + "$");

    console.log("Compound Interest = " + result + "$");
    
    let value = document.getElementById("value");

    value.innerHTML = `<h5>Compound Interest calculator</h5> Amount = ${p}USD <br> Years = ${n}yrs <br> Rate=  ${r}% <br> Compound Interest =  ${result}$`

}else if (option == "S") {
    let p = prompt("Amount : ");
    p = Number(p);

    let t = prompt("Times in Years : ");
    t = Number(t);

    let r = prompt("Interest Rate : ");
    r = Number(r);

    let result = Math.ceil((p * t * r)/100);

    window.prompt("Simple Interest = " + result + "$");

    console.log("Simple Interest = " + result + "$");

    let value = document.getElementById("value");

    value.innerHTML = `<h5>Simple interest calculator</h5> Amount = ${p}USD <br> Years = ${t}yrs <br> Rate=  ${r}% <br> Simple Interest =  ${result}$`
}
