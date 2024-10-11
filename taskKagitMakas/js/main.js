let pcHamlesi = ["tas" , "makas" , "kagit"].at(Math.floor(Math.random() *3));

let oyuncuHamlesi = prompt("Hamleni gir")

if (pcHamlesi == oyuncuHamlesi) {
    console.clear();
    console.log("karşı tarafın hamlesi: " + pcHamlesi);
    console.log("berabere kalın");
}
else if ((oyuncuHamlesi == "Makas" || oyuncuHamlesi == "makas") && pcHamlesi == "tas") {
    console.log("rakibin hamlesi: " + pcHamlesi + " KAYBETTİN");
}
else if ((oyuncuHamlesi == "Makas" || oyuncuHamlesi == "makas") && pcHamlesi == "kagit") {
    console.log("rakibin hamlesi: " + pcHamlesi + " KAZANDIN");
}
else if ((oyuncuHamlesi == "Taş" || oyuncuHamlesi == "taş") && pcHamlesi == "makas") {
    console.log("rakibin hamlesi: " + pcHamlesi + " KAZANDIN");
}
else if ((oyuncuHamlesi == "Taş" || oyuncuHamlesi == "taş") && pcHamlesi == "kagit") {
    console.log("rakibin hamlesi: " + pcHamlesi + " KAYBETTİN");
}
else if ((oyuncuHamlesi == "Kağıt" || oyuncuHamlesi == "kağıt") && pcHamlesi == "makas") {
    console.log("rakibin hamlesi: " + pcHamlesi + " KAYBETTİN");
}
else if ((oyuncuHamlesi == "Kağıt" || oyuncuHamlesi == "kağıt") && pcHamlesi == "tas") {
    console.log("rakibin hamlesi: " + pcHamlesi + " KAZANDIN");
}
else {
    console.log("Geçersiz hamle girdin, lütfen sayfayı yenile");
}
