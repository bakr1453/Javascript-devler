let satır="\r\n"
let bakiye=1250;
let metin ="1-bakiye"+satır
+"2-para çekme"+satır
+"3-para yatırma"+satır
+"4-çıkış"


let seçim=prompt(metin)
switch(seçim){

case "1":

alert("bakiyeniz="+" "+bakiye)
break;

case "2":

let cekiecektutar=Number(prompt("lütfen çekiceğiniz tutarı giriniz"))

if(cekiecektutar<bakiye){
 bakiye=bakiye-cekiecektutar
alert("işleminiz başarıyla gerçekleşmiştir"+satır
   + "kalan bakiyeniz="+bakiye
)

}else{

alert("bakiyeniz yetersiz lütfen geçerli bir para miktarı giriniz")





} break;

case "3":

let yatırılıcaktutar=Number(prompt("lütfen çekmek istediğiniz tutarı giriniz"))
bakiye=bakiye+yatırılıcaktutar
 alert("güncel bakiyeniz="+" "+bakiye)
 break;

 case "4":

 alert("çıkış işlemi gerçekleştiriliyor")
 break;

 default:
    alert("geçerli bir işlem giriniz")













}

















