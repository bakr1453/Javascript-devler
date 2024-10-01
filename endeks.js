let kilo= Number(prompt("Lütfen kilonuzu giriniz"))
let boy=Number(prompt("lütfen boyunuzu metre cinsinden giriniz"))

let sonuç =kilo/(boy*2)

if(sonuç<18,5){
    alert("ideal kılonun altındasınız="+ sonuç)
 
}
else if (sonuç>=18,5 && sonuç<=24,9){

    alert("ideal kilodsınız="+ sonuç)
     
}else if(sonuç>=25 && sonuç<=29,9){


    alert("ideal kilonun üstündesiniz="+sonuç)

}else if(sonuç>=30 && sonuç<=39,9){

alert("idael kilonun çok üstünde (obez)="+sonuç)

}else if(sonuç>=40){

alert("ideal kilonun çok üstünde (morbid obez)="+sonuç)
}
