let türkçedoğru,türkçeyanlış=0;
let matematikdoğru,matematikyanlış=0;
let sosyaldoğru,sosyalyanlış=0;
let fendoğru;fenyanlış=0;
let okulpuanı=0;

let satır="\r\n"

let mesaj="TYT puan hesaplama uygulamasına hoşgeldiniz"+satır
+"1-puan hesaplama"+satır
+"2-çıkış yap"

let seçim=prompt(mesaj)

switch(seçim){


case "1":

let okulpuanı=Number(prompt("okul puanınız"))
let türkçedoğru=Number(prompt("türkçe doğru sayısı"))
let türkçeyanlış=Number(prompt("türkçe yanlış sayısı"))

let matematikdoğru=Number(prompt("matematik doğru"))
let matematikyanlış=Number(prompt("matematik yanlış"))

let fendoğru=Number(prompt("fen doğru"))
let fenyanlış=Number(prompt("fen yanlış"))

let sosyaldoğru=Number(prompt("sosyal doğru"))
let sosyalyanlış=Number(prompt("sosyal yanlış"))

let doğrusayısı=türkçedoğru+matematikdoğru+fendoğru+sosyaldoğru;
let yanlışsayısı=türkçeyanlış+matematikyanlış+fenyanlış+sosyalyanlış;
 let kalandoğru=doğrusayısı-(yanlışsayısı/4)
puan=(kalandoğru*4)+100

alert("tyt puanınız="+puan) 
break;


case "2": 
alert("çıkış yapılıyor...")

break;


default:
    alert("geçerli bir işlem seçiniz")





}





