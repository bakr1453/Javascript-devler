let türkçedoğru,türkçeyanlış=0
let matematikdoğru,matematikyanlış=0
let unipuanı=0


let satır="\r\n"


let mesaj="DGS puan hesaplamaya hoşgeldiniz"+satır
+"1-puan hesaplama"+satır
+"2-çıkış"



let seçim=prompt(mesaj)

switch(seçim){

case "1":

let unipuanı=Number(prompt("okul puanınızı giriniz"))

let matematikdoğru=Number(prompt("matematik doğru sayısını giriniz"))
let matematikyanlış=Number(prompt("matematik yanlış sayısını giriniz"))

let türkçedoğru=Number(prompt("türkçe doğru sayınızı giriniz"))
let türkçeyanlış=Number(prompt("türkçe yanlış sayısını giriniz"))

let yanlışsayısı=(matematikdoğru+türkçedoğru)-(türkçeyanlış+matematikyanlış)
let türkçenet=türkçedoğru-(türkçeyanlış/4)
let matematiknet=matematikdoğru-(matematikyanlış/4)


let okulpu=(okulpuanı*0.6)
let matematikpuan=(matematiknet*1.575)
let türkçepuan=(türkçenet*0.336)
puan=(matematiknet+türkçenet+okulpu)+105

alert("dgs puanınız="+puan)









break;

case "2":

alert("çıkış yapılıyor")



break;


default:

alert("lütfen geçerli bir işlem seçiniz")













}










