/*benzin=25,9
lpg=23,6
dizel=24,5 */


/*kullanıcıdan alınan bilgiler

yakıt tipi ve yüklenecek yakıt miktarı*/


let benzin = 25.9, lpg = 23.6, dizel = 24.5
const satır = "\r\n"

const yakıtmetni = "1-benzin" + satır
    + "2-lpg" + satır
    + "3-dizel" + satır
    + "Lütfen almak istediğiniz yakıt tipini seçiniz"
let yakıttipi = prompt(yakıtmetni)
let yakıtlitresi = Number(prompt("yakıt litresinigiriniz"))
let bakiye = Number(prompt("bakiyenizi giriniz"))

if (yakıttipi == "1") {

    let ödenecektutar = benzin * yakıtlitresi

    if (ödenecektutar < bakiye) {
 bakiye - ödenecektutar

        bakiye 
        alert("yakıt alma işlemi başarılı" + satır

            + "kalan bakiye= " + bakiye)



    } else {

        alert("bakiyeniz yeterli değildir" + satır
            + "ödenecek tutar=" + ödenecektutar + satır
            + "bakiye=" + bakiye + satır
            + "eksik tutar=" + (ödenecektutar - bakiye)

        )
    }



} else if (yakıttipi == "2") {
    let ödenecektutar = lpg * yakıtlitresi

    if (ödenecektutar < bakiye) {

        bakiye = bakiye - ödenecektutar

        alert("yakıt alma işlemi başarılı" + satır

            + "kalan bakiye= " + bakiye)



    } else {

        alert("bakiyeniz yeterli değildir" + satır
            + "ödenecek tutar=" + ödenecektutar + satır
            + "bakiye=" + bakiye + satır
            + "eksik tutar=" + (ödenecektutar - bakiye)

        )


    }
}




else if (yakıttipi == "3") {




    let ödenecektutar = dizel * yakıtlitresi

    if (ödenecektutar < bakiye) {

        bakiye = bakiye - ödenecektutar

        alert("yakıt alma işlemi başarılı" + satır

            + "kalan bakiye= " + bakiye)



    } else {

        alert("bakiyeniz yeterli değildir" + satır
            + "ödenecek tutar=" + ödenecektutar + satır
            + "bakiye=" + bakiye + satır
            + "eksik tutar=" + (ödenecektutar - bakiye)

        )





    }
}






