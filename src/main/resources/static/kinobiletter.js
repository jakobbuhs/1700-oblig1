
let liste = [];
function valideringEpost() {
    let epost = document.getElementById("epost").value;
    if(epost.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        return true;
    }else {
        document.getElementById("feilmeldingEpost").innerHTML = "Du har skrevet inn en ugyldig epost";
        return false;
    }
}
function valideringNummer(){
    let nummer = Number(document.getElementById("nummer").value);
    if(10000000 <= nummer <= 99999999){
        return true;
    }else {
        document.getElementById("feilmeldingNummer").innerHTML = "Du har skrevet inn et ugyldig telefonnummer.";
        return false;
    }
}
function billettKjop(){

    const film = document.getElementById("filmer").value;
    const antall = document.getElementById("antall").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const nummer = document.getElementById("nummer").value;
    const epost = document.getElementById("epost").value;


    let pers = {
        film_dict: film,
        antall_dict: antall,
        fornavn_dict: fornavn,
        etternavn_dict:etternavn,
        nummer_dict:nummer,
        epost_dict:epost
    }
    liste.push(pers)
    let ut = "";
    for (let i of liste){
        ut += i.fornavn_dict + " " + i.etternavn_dict + " Skal se: " + i.film_dict  + " og har med seg: " + i.antall_dict + " personer,";
        ut += " Kontakt info: epost: " + i.epost_dict + " tlf: " + i.nummer_dict + "</br>";

    }
    if (valideringEpost() || valideringNummer()){
        document.getElementById("billetter").innerHTML = ut;
        console.log(1)
    }else {
        return document.getElementById("billetter").innerHTML = "Du har ikke skrevet inn feil informasjon.";
    }

}
function slettBilletter(){
    liste = [];
    document.getElementById("billetter").innerHTML = "";
}

