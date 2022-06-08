
//Paraméter és visszatérési érték nélküli eljárás
function ILoveTypeScript(): void { //Visszatérési érték nélküli eljárás : VOID kulcsszó!
    document.write("<br>Szeretem a TypeScriptet!");
}
ILoveTypeScript();

//Paraméteres és visszatérési érték nélküli eljárás
function NegyzetKeruletTerulet(aOldal: number): void {
    document.write(`<br>Az ${aOldal} egységnyi oldalú négyzet kerülete: ${aOldal * 4} egység`);
    document.write(`<br>Az ${aOldal} egységnyi oldalú négyzet területe: ${aOldal * aOldal} egység`);
}
NegyzetKeruletTerulet(5);

//Paraméternélküli és viszatérési értékes függvény
function Random100(): number {
    return Math.round(Math.random() * 100);
}

document.write("<br>Generált random szám V1: "+ Random100());

//Paraméteres és visszatérési értékes függvény
function Rn(alsoHatar: number, felsoHatar: number): number {
    return Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
}
document.write("<br>Generált random szám V2: "+ Rn(1,20));