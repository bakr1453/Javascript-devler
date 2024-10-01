let ad= prompt("İsminizi giriniz:")
let tc= prompt("Tc nizi giriniz")

kontrolEt(ad,tc)


function kontrolEt (ad,tc){


if( ad!==""){

// lenght türkçede uzunluk anlamına gelir ve yapmak istediğiniz karekter sayısını belirler
    if(tc.length==11){

        alert("isim ve tc sorunsuz girildi")
        return;//return kendisinden sonraki tüm kodları devre dışı bırakır
    }else{

        alert("lutfen tcnizi 11 haneli olduğundan emin olun")
        return;
    }


}else{
    alert("lütfen isminizi boş bırakmayınız")


}


}

