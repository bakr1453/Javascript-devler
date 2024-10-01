

// let yas = Number(prompt("yaşınız:"))


// let bütçe = Number(prompt("Bütçeniz:"))


// if(yas>18 && bütçe>3500){

//    document.write( "ehliyet sınavına katılabilirsiniz");

// }

// else{

//     alert("ehliyet sınvına giirmeye hak kazanamadınız")
// }
let vize = Number(prompt("vize notunuzu giriniz "))

let vize1=Number(prompt("vize1 notunuzu giriniz"))

let final =Number(prompt("final notunuzu giriniz"))

let ortalama= (vize*0.3) +(vize1*0.3)+(final*0.4)

if(ortalama>50) {

    alert( ortalama + "=dersten geçtiniz")
}

else{

alert(ortalama+"=dersten kaldınız")
}



