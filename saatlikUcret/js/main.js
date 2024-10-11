let calisanSaat = Number(prompt("bir gunde kac saat calistiginizi giriniz"));
let saatUcret = Number(prompt("saatlik ucretinizi giriniz"));

let gunlukUcret = (calisanSaat * saatUcret);
let haftalikUcret = (gunlukUcret * 7);
let aylikUcret = (haftalikUcret * 4);

console.log("gunluk icretiniz: " + gunlukUcret + "\nhaftalik hucretiniz: " + haftalikUcret + "\naylik ucretiniz: " + aylikUcret);