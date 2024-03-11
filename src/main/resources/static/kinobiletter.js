
let liste = [];
function valideringEpost() {
    let epost = $("#epost").val();
    if(epost===""){
        $("#feilmeldingEpost").html("Du må huske å skrive inn eposten din!");
        return false;}
    else if(epost.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        $("#feilmeldingEpost").html("");
        return true;
    }else {
        $("#feilmeldingEpost").html("Du har skrevet inn en ugyldig epost");
        return false;
    }
}
function valideringFornavn(){
    let fornavn = $("#fornavn").val();
    if(fornavn===""){
        $("#feilmeldingFornavn").html("Du må huske å skrive inn fornavnet ditt!");
        return false;
    }
    else if(/\d/.test(fornavn)
    ){
        $("#feilmeldingFornavn").html("Du har tall i fornavnet ditt.");
        return false;
    }else{

        $("#feilmeldingFornavn").html("");
        return true;
    }
}
function valideringEtternavn(){
    let etternavn = $("#fornavn").val();
    if(etternavn===""){
        $("#feilmeldingEtternavn").html("Du må huske å skrive inn etternavnet ditt!");
        return false;}
    if(/\d/.test(etternavn)){
        $("#feilmeldingEtternavn").html("Du har tall i etternavnet ditt.");
        return false;

    }else{
        $("#feilmeldingEtternavn").html("");
        return true;
    }
}
function valideringNummer(){
    let nummer = Number($("#nummer").val());
    if(nummer===0){
        $("#feilmeldingNummer").html("Har du kanskje glemt å skrive inn nummeret ditt?!");
        return false;}
    if(10000000 < nummer && nummer < 99999999){
        $("#feilmeldingNummer").html("");
        return true;
    }else {
        $("#feilmeldingNummer").html("Du har skrevet inn et ugyldig telefonnummer.");
        return false;
    }
}
function valideringBillett(){
    let billett = Number($("#antall").val());
    if(billett === 0){
        $("#feilmeldingAntall").html("Du må huske å skrive inn hvor mange dere skal være!");
        return false;}
    else if(billett >0 && billett<11){
        $("#feilmeldingAntall").html("");
        return true;
    }
    else{
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
            ut += i.fornavn_dict + " " + i.etternavn_dict + " Skal se: " + i.film_dict  + " og er totalt " + i.antall_dict + " personer,";
            ut += " Kontakt info: epost: " + i.epost_dict + " tlf: " + i.nummer_dict + "</br>";
        $("#billetter").html(ut);
        }
    }
}
function slettBilletter(){
    liste = [];
    $("#billetter").html("");
}

