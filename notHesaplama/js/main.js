let vizeNot = Number(prompt("vize notunu giriniz"));
let finalNot = Number(prompt("final notunu giriniz"))

let vizeYuzde = (vizeNot * .4)
let finalYuzde = (finalNot * .6)

let ortalama = ((vizeNot + finalNot) / 2);

if (ortalama >= 50) {
    console.log("donem ortalamasi: " + ortalama + " " + "donemi gectiniz")
}
else{
    console.log("donem ortalamasi: " + ortalama + " " + "donemi gecemediniz")
}

