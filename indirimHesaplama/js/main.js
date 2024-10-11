let urunFiyat = Number(prompt("urunun fiyatini giriniz"))
let indirimYuzde = Number(prompt("urunun indirim yuzdesini giriniz "))

let indrimFiyat = urunFiyat * (1 - indirimYuzde / 100);

alert("urunun indirimli fiyati: " + indrimFiyat + " " + "TL")