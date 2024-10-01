let satır = "\r\n";
let metin = "1-Pazartesi" + satır
    + "2-Salı" + satır
    + "3-Çarşamba" + satır
    + "4-Perşembe" + satır
    + "5-Cuma" + satır
    + "6-Cumartesi" + satır
    + "7-Pazar" + satır
    + "Lütfen bir gün seçiniz"


let deger = prompt(metin);
switch (deger) {

    case "1":
        alert("pazartesi günü ")
        break;

    case "2":
        alert("salı günü")
        break;

    case "3":
        alert("çarşamba günü")
        break;
    case "4":
        alert("perşembe günü")
        break;
    case "5":
        alert("cuma günü")
        break;
    case "6":
        alert("cumartesi günü")
        break;
    case "7":
        alert("pazar g(ünü")
        break;

    default:
        alert("lütfen geçerli bir gün seçiniz")













}


