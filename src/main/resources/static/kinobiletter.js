
let liste = [];
function valideringEpost() {
    let epost = document.getElementById("epost").value;
    if(epost.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        document.getElementById("feilmeldingEpost").innerHTML = "";
        return true;
    }else {
        document.getElementById("feilmeldingEpost").innerHTML = "Du har skrevet inn en ugyldig epost";
        return false;
    }
}
function valideringFornavn(){
    let fornavn = document.getElementById("fornavn").value;
    if(isNaN(fornavn)){
        document.getElementById("feilmeldingFornavn").innerHTML = "";
        return true;
    }else{
        document.getElementById("feilmeldingFornavn").innerHTML = "Du har tall i fornavnet ditt.";
        return false;
    }
}
function valideringEtternavn(){
    let etternavn = document.getElementById("fornavn").value;
    if(isNaN(etternavn)){
        document.getElementById("feilmeldingEtternavn").innerHTML = "";
        return true;
    }else{
        document.getElementById("feilmeldingEtternavn").innerHTML = "Du har tall i etternavnet ditt.";
        return false;
    }
}
function valideringNummer(){
    let nummer = Number(document.getElementById("nummer").value);
    if(10000000 < nummer && nummer < 99999999){
        document.getElementById("feilmeldingNummer").innerHTML = ""
        return true;
    }else {
        document.getElementById("feilmeldingNummer").innerHTML = "Du har skrevet inn et ugyldig telefonnummer.";
        return false;
    }
}
function billettKjop(){

    if (valideringEpost() && valideringNummer() && valideringFornavn() && valideringEtternavn()){
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
        document.getElementById("billetter").innerHTML = ut;
        console.log(1)}
    }
}
function slettBilletter(){
    liste = [];
    document.getElementById("billetter").innerHTML = "";
}

