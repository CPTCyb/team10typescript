//Téglalap kerületet területe (paraméteres, visszatéséri érték nélküli eljárás)
function TeglalapKeruletTerulet(aOldal:number, bOldal:number):void{    
    document.write(`<br>Az ${aOldal}, ${bOldal} egységnyi oldalú téglalap kerülete: ${2*(aOldal+bOldal)} egység`);
    document.write(`<br>Az ${aOldal}, ${bOldal} egységnyi oldalú téglalap területe: ${aOldal*bOldal} egység<sup>2</sup>`);
}

TeglalapKeruletTerulet(4,5);
TeglalapKeruletTerulet(10,12);
//Pozitív negatív nulla(paraméteres visszatéséri érték nélküli eljárás
function PozitivNegativNulla(vizsgaltSzam:number):void{
    if(vizsgaltSzam<0)
    {
        document.write(`<br>A ${vizsgaltSzam}: negatív`);
    }
    else if(vizsgaltSzam>0)
    {
        document.write(`<br>A ${vizsgaltSzam}: pozitív`);
    }
    else
    {
        document.write(`<br>A ${vizsgaltSzam} értéke pontosan NULLA!`);
    }
}
PozitivNegativNulla(-3);
PozitivNegativNulla(5);
PozitivNegativNulla(0);

function UniverzalisTombGenerator(alsoHatar:number, felsoHatar:number, tombMeret:number):number[]{
    let generaltTomb:number[]=[];
    for(let i=0;i<tombMeret;i++){
        let generaltSzam:number=Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
        generaltTomb.push(generaltSzam);
    }
    return generaltTomb;
}
var vizsgalandoTomb=UniverzalisTombGenerator(10,50,5);
document.write("<br>A generált tömb elemei:"+vizsgalandoTomb);
//Összegzés tétele (paraméteres és visszatérési értékes függvény)
function OsszegzesTetele(vizsgalandoTomb:number[]):number
{
    let osszeg:number=0;
    for(let i=0;i<vizsgalandoTomb.length;i++)
    {
        osszeg+=vizsgalandoTomb[i];
    }
    return osszeg;
}
document.write("<br>A tömbben lévő elemek összege:" +OsszegzesTetele(vizsgalandoTomb));
//Páros számok megszámlása (paraméteres és visszatérési értékes függvény)
function MegszamlalasTeteleParos(vizsgalandoTomb:number[]):number{
    let parosMennyiseg:number=0;
    for(let i=0;i<vizsgalandoTomb.length;i++)
    {
        if(vizsgalandoTomb[i]%2==0)
        {
            parosMennyiseg++;
        }
    }
    return parosMennyiseg;
}
document.write("<br>A tömbben lévő páros elemeknek a mennyisége:"+MegszamlalasTeteleParos(vizsgalandoTomb));
//Szorgalmi, az összes többi progtételes függvény megírása


