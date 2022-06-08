//Paraméter és visszatérési érték nélküli eljárás
function ILoveTypeScript() {
    document.write("<br>Szeretem a TypeScriptet!");
}
ILoveTypeScript();
//Paraméteres és visszatérési érték nélküli eljárás
function NegyzetKeruletTerulet(aOldal) {
    document.write("<br>Az ".concat(aOldal, " egys\u00E9gnyi oldal\u00FA n\u00E9gyzet ker\u00FClete: ").concat(aOldal * 4, " egys\u00E9g"));
    document.write("<br>Az ".concat(aOldal, " egys\u00E9gnyi oldal\u00FA n\u00E9gyzet ter\u00FClete: ").concat(aOldal * aOldal, " egys\u00E9g"));
}
NegyzetKeruletTerulet(5);
//Paraméternélküli és viszatérési értékes függvény
function Random100() {
    return Math.round(Math.random() * 100);
}
document.write("<br>Generált random szám V1: " + Random100());
//Paraméteres és visszatérési értékes függvény
function Rn(alsoHatar, felsoHatar) {
    return Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
}
document.write("<br>Generált random szám V2: " + Rn(1, 20));
