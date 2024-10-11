let input1 = Number(prompt("ilk sayiyi giriniz"))
let input2 = Number(prompt("ikinci sayiyi giriniz"))
let input3 = Number(prompt("ucuncu sayiyi giriniz"))

if (input1 > input2 && (input1 > input3)) {
    console.log("girilen sayilardan en buyugu: " + input1)
}
else if (input2 > input1 && (input2 > input3) ){
    console.log("girilen sayilardan en buyugu: " + input2)
}
else if ( input3 > input1 && (input3 > input2)) {
    console.log("girilen sayilardan en buyugu: " + input3)
}
else{
    console.log("sayilar birbirine esit lutfen tekrar deneyin")
}