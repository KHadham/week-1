var jamban ="k!a-s,ur' ru*s_ ak"
var rapetin 
var ngebalik

function palingdrom(textnya) {

    //menampung regular expresiion
    var Regexp = /[^A-Za-z0-9]/g; 

    //merapatkan tulisan ,merapihkan,dan membuang karakter yang ga jelas
    rapetin =textnya.toLowerCase().replace(Regexp, '')

    //membalik tulisanya
    ngebalik= rapetin.split("").reverse().join("")
    
        if (rapetin==ngebalik) {
            return true;
        }
        else return false;
    }

console.log(palingdrom(jamban))


