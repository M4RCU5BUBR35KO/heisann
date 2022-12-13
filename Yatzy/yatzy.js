// Array / Liste
// Bildene av de hvite terningene
const terningBilder = [
    "./Terning bilder/Terning1hvit.png",
    "./Terning bilder/Terning2hvit.png",
    "./Terning bilder/Terning3hvit.png",
    "./Terning bilder/Terning4hvit.png",
    "./Terning bilder/Terning5hvit.png",
    "./Terning bilder/Terning6hvit.png"
]
// Bildene av de svarte terningene
const velgTerninger = [
    "./Terning bilder/Terning1svart.png",
    "./Terning bilder/Terning2svart.png",
    "./Terning bilder/Terning3svart.png",
    "./Terning bilder/Terning4svart.png",
    "./Terning bilder/Terning5svart.png",
    "./Terning bilder/Terning6svart.png"
]

//Array som setter alle terningene som false
let holdTerning = [
    false, false, false, false, false
]
//Array som setter statusen til alle terningene til 0 som standard 
let terningStatus = [
    0, 0, 0, 0, 0
]
// Array for alle radene i html koden
let seksjonArray = [
    document.getElementsByClassName("rad1"),
    document.getElementsByClassName("rad2"),
    document.getElementsByClassName("rad3"),
    document.getElementsByClassName("rad4"),
    document.getElementsByClassName("rad5"),
    document.getElementsByClassName("rad6"),
    document.getElementsByClassName("rad7"),
    document.getElementsByClassName("rad8"),
    document.getElementsByClassName("rad9"),
    document.getElementsByClassName("rad10"),
    document.getElementsByClassName("rad11"),
    document.getElementsByClassName("rad12"),
    document.getElementsByClassName("rad13"),
    document.getElementsByClassName("rad14"),
    document.getElementsByClassName("rad15"),
    document.getElementsByClassName("rad16"),
    document.getElementsByClassName("rad17"),
    document.getElementsByClassName("rad18"),
]

// For bruk senere
let spillere = document.getElementsByClassName("spillere");

//Hvor mange og hvem spiller?
let antallSpillere = 0;
function hvorSpiller() {
    for (let i = 0; i < spillere.length; i++) {
        spillere[i].innerHTML = prompt("navn på spiller")
        if (spillere[i].innerHTML !== "") {
            antallSpillere++;
        }
    }
    var x = document.getElementById("spillernavn");
    x.remove(x.selectedIndex);

}


// Kaster terningene og viser hvor mange kast du har. Du har maks 3 kast
let antallKast = 3;
function kastTerningene() {
    if (antallKast > 0) {
        kastTerning1() + kastTerning2() + kastTerning3() + kastTerning4() + kastTerning5();
        antallKast = antallKast - 1;
        document.getElementById("kastTerning").innerHTML = "Du har " + antallKast + " kast igjen";
    }
}

/*Funksjoner for å kaste terningene */
function kastTerning1() {
    if (holdTerning[0] == false) {
        let randomTerning = Math.ceil(Math.random() * 6);
        terningStatus[0] = randomTerning
        let bildeNummer = randomTerning - 1;
        imgBilde1.src = terningBilder[bildeNummer];
        document.getElementById("terningNummer1").innerHTML = bildeNummer;
    }
}
function kastTerning2() {
    if (holdTerning[1] == false) {
        let randomTerning = Math.ceil(Math.random() * 6);
        terningStatus[1] = randomTerning
        let bildeNummer = randomTerning - 1;
        imgBilde2.src = terningBilder[bildeNummer];
        document.getElementById("terningNummer2").innerHTML = bildeNummer;
    }
}
function kastTerning3() {
    if (holdTerning[2] == false) {
        let randomTerning = Math.ceil(Math.random() * 6);
        terningStatus[2] = randomTerning
        let bildeNummer = randomTerning - 1;
        imgBilde3.src = terningBilder[bildeNummer];
        document.getElementById("terningNummer3").innerHTML = bildeNummer;
    }
}
function kastTerning4() {
    if (holdTerning[3] == false) {
        let randomTerning = Math.ceil(Math.random() * 6);
        terningStatus[3] = randomTerning
        let bildeNummer = randomTerning - 1;
        imgBilde4.src = terningBilder[bildeNummer];
        document.getElementById("terningNummer4").innerHTML = bildeNummer;
    }
}
function kastTerning5() {
    if (holdTerning[4] == false) {
        let randomTerning = Math.ceil(Math.random() * 6);
        terningStatus[4] = randomTerning
        let bildeNummer = randomTerning - 1;
        imgBilde5.src = terningBilder[bildeNummer];
        document.getElementById("terningNummer5").innerHTML = bildeNummer;
    }
}
/**/

/* Funksjon som lagrer terningene */
function lagreTerning1() {
    imgBilde1.src = velgTerninger[document.getElementById("terningNummer1").innerHTML];
    holdTerning[0] = true
}

function lagreTerning2() {
    imgBilde2.src = velgTerninger[document.getElementById("terningNummer2").innerHTML];
    holdTerning[1] = true
}

function lagreTerning3() {
    imgBilde3.src = velgTerninger[document.getElementById("terningNummer3").innerHTML];
    holdTerning[2] = true
}

function lagreTerning4() {
    imgBilde4.src = velgTerninger[document.getElementById("terningNummer4").innerHTML];
    holdTerning[3] = true
}

function lagreTerning5() {
    imgBilde5.src = velgTerninger[document.getElementById("terningNummer5").innerHTML];
    holdTerning[4] = true
}
/**/


// Funksjon om tallene 1-6 
function enTilSex(radNummer, kolonneNummer) {
    let resultat = 0;
    let antallRiktige = 0;
    for (i = 0; i < 5; i++) {
        if (terningStatus[i] == radNummer) {
            resultat += radNummer
            antallRiktige++;
        }
    }
    if (resultat / antallRiktige == radNummer || resultat == 0) {
        seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = resultat
    }
    resetTerningene();
}

// summerer første summen fra 1-6 og legger til eventuell bonus
function sumForste(radNummer, kolonneNummer) {
    sum = 0
    if (seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML > 0) {

    }
    else {
        for (let i = 0; i < 7; i++) {
            sum += Number(seksjonArray[i][kolonneNummer - 1].innerHTML);
        }
        seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = sum;
        if (sum >= 63) {
            seksjonArray[radNummer][kolonneNummer - 1].innerHTML = 50;
        }
        seksjonArray[radNummer][kolonneNummer - 1].innerHTML = 0;
    }
    resetTerningene();
}

//Regner ut om du har 1 par og skriver det inn
function par1(radNummer, kolonneNummer) {
    var resultat = 0;
    for (let i = 0; i < holdTerning.length; i++) {
        if (holdTerning[i] == true) {
            resultat += terningStatus[i];
        }
        if (resultat / 2 == terningStatus[i] || resultat == 0) {
            seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = resultat;
        }
    }
    resetTerningene();
}
//Regner ut om du har 2 par og skriver det inn
function par2(radNummer, kolonneNummer) {
    var resultat = 0;
    let parArray = [];
    for (let i = 0; i < holdTerning.length; i++) {
        if (holdTerning[i] == true) {
            resultat += terningStatus[i];
            parArray.unshift(terningStatus[i]);
        }
        if (resultat / 2 == Math.max(...parArray) + Math.min(...parArray) || resultat == 0) {
            seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = resultat;
        }
    }
    resetTerningene();
}

//Regner ut både antall like for 3 like, 4 like og yatzy. hvis ikke = 0
function antallLike(radNummer, kolonneNummer, sumLike) {
    resultat = 0;
    antallValgte = 0;
    for (let i = 0; i < holdTerning.length; i++) {
        if (holdTerning[i] == true) {
            resultat += terningStatus[i]
            antallValgte++;
        }
    }
    for (let i = 0; i < holdTerning.length; i++) {
        if (antallValgte == sumLike || resultat == 0) {
            if (resultat / sumLike == terningStatus[i] || resultat == 0) {
                if (sumLike == 5 && antallValgte == 5) {
                    resultat = 50;
                }
                seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = resultat;
            }
        }
    }
    resetTerningene();
}
//Funksjon som regner ut om du har liten eller stor straight og skriver det inn i tabellen. hvis ikke = 0
function litenStorStraight(radNummer, kolonneNummer) {
    let svarArray = []
    for (let i = 0; i < holdTerning.length; i++) {
        if (holdTerning[i] == true) {
            svarArray.unshift(terningStatus[i]);
        }
    }
    seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = 0

    if (radNummer == 13) {
        if (svarArray.includes(1) && svarArray.includes(2) && svarArray.includes(3) && svarArray.includes(4) && svarArray.includes(5)) {
            seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = 15;
        }
    }
    if (radNummer == 14) {
        if (svarArray.includes(2) && svarArray.includes(3) && svarArray.includes(4) && svarArray.includes(5) && svarArray.includes(6)) {
            seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = 20;
        }
    }
    resetTerningene();
}
//Funksjon som regner ut hus og skriver det inn i tabellen derson du trykker der. hvis ikke = 0
function hus(radNummer, kolonneNummer) {
    let resultat = 0;
    let parArray = [];
    let antallValgte = 0;
    for (let i = 0; i < holdTerning.length; i++) {
        if (holdTerning[i] == true) {
            resultat += terningStatus[i];
            antallValgte++;
            parArray.unshift(terningStatus[i]);
        }
    }
    parArray.sort();
    seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = 0;

    if (antallValgte == 5) {
        if (parArray[2] == parArray[3]) {
            if (resultat / 2 == parArray[2] * 1.5 + parArray[1]) {
                seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = resultat;
            }
        }
        if (parArray[2] == parArray[1]) {
            if (resultat / 2 == parArray[2] * 1.5 + parArray[3]) {
                seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = resultat;
            }
        }
    }
    resetTerningene();
}
//Funksjon som regner ut sjanse og skriver inn det. hvis ikke = 0
function sjanse(radNummer, kolonneNummer) {
    resultat = 0;
    for (let i = 0; i < holdTerning.length; i++) {
        if (holdTerning[i] == true) {
            resultat += terningStatus[i]
        }
    }
    seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = resultat
    resetTerningene();
}
//Funskjon for å summere totalen per spiller. 
function totalSum(radNummer, kolonneNummer) {
    sum = 0
    for (let i = 6; i < 17; i++) {
        sum += Number(seksjonArray[i][kolonneNummer - 1].innerHTML);
    }
    seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = sum;
    resetTerningene();
}

//Resetter terningene når du trykker på en av rutene
function resetTerningene() {
    antallKast = 3;
    imgBilde1.src = terningBilder[document.getElementById("terningNummer1").innerHTML];
    imgBilde2.src = terningBilder[document.getElementById("terningNummer2").innerHTML];
    imgBilde3.src = terningBilder[document.getElementById("terningNummer3").innerHTML];
    imgBilde4.src = terningBilder[document.getElementById("terningNummer4").innerHTML];
    imgBilde5.src = terningBilder[document.getElementById("terningNummer5").innerHTML];

    holdTerning[0] = false;
    holdTerning[1] = false;
    holdTerning[2] = false;
    holdTerning[3] = false;
    holdTerning[4] = false;
    document.getElementById("kastTerning").innerHTML = "Kast terningene";
}