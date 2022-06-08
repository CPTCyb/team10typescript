//Téglalap kerületet területe (paraméteres, visszatéséri érték nélküli eljárás)
function TeglalapKeruletTerulet(aOldal, bOldal) {
    document.write("<br>Az ".concat(aOldal, ", ").concat(bOldal, " egys\u00E9gnyi oldal\u00FA t\u00E9glalap ker\u00FClete: ").concat(2 * (aOldal + bOldal), " egys\u00E9g"));
    document.write("<br>Az ".concat(aOldal, ", ").concat(bOldal, " egys\u00E9gnyi oldal\u00FA t\u00E9glalap ter\u00FClete: ").concat(aOldal * bOldal, " egys\u00E9g<sup>2</sup>"));
}
TeglalapKeruletTerulet(4, 5);
TeglalapKeruletTerulet(10, 12);
//Pozitív negatív nulla(paraméteres visszatéséri érték nélküli eljárás
function PozitivNegativNulla(vizsgaltSzam) {
    if (vizsgaltSzam < 0) {
        document.write("<br>A ".concat(vizsgaltSzam, ": negat\u00EDv"));
    }
    else if (vizsgaltSzam > 0) {
        document.write("<br>A ".concat(vizsgaltSzam, ": pozit\u00EDv"));
    }
    else {
        document.write("<br>A ".concat(vizsgaltSzam, " \u00E9rt\u00E9ke pontosan NULLA!"));
    }
}
PozitivNegativNulla(-3);
PozitivNegativNulla(5);
PozitivNegativNulla(0);
function UniverzalisTombGenerator(alsoHatar, felsoHatar, tombMeret) {
    var generaltTomb = [];
    for (var i = 0; i < tombMeret; i++) {
        var generaltSzam = Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
        generaltTomb.push(generaltSzam);
    }
    return generaltTomb;
}
var vizsgalandoTomb = UniverzalisTombGenerator(10, 50, 5);
document.write("<br>A generált tömb elemei:" + vizsgalandoTomb);
//Összegzés tétele (paraméteres és visszatérési értékes függvény)
function OsszegzesTetele(vizsgalandoTomb) {
    var osszeg = 0;
    for (var i = 0; i < vizsgalandoTomb.length; i++) {
        osszeg += vizsgalandoTomb[i];
    }
    return osszeg;
}
document.write("<br>A tömbben lévő elemek összege:" + OsszegzesTetele(vizsgalandoTomb));
//Páros számok megszámlása (paraméteres és visszatérési értékes függvény)
function MegszamlalasTeteleParos(vizsgalandoTomb) {
    var parosMennyiseg = 0;
    for (var i = 0; i < vizsgalandoTomb.length; i++) {
        if (vizsgalandoTomb[i] % 2 == 0) {
            parosMennyiseg++;
        }
    }
    return parosMennyiseg;
}
document.write("<br>A tömbben lévő páros elemeknek a mennyisége:" + MegszamlalasTeteleParos(vizsgalandoTomb));
//Szorgalmi, az összes többi progtételes függvény megírása
