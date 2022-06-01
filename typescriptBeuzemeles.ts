var szam:number=2;
szam=4.4;
var szoveg:string="alma";
szoveg="4.4";//Karakterláncként megadva fogadja el CSAK A szám értéket a string típusú mező!
var logikai:boolean=true;
logikai=false;

//Veszélyes!!! Ha JS szintaxissal akarunk dolgozni
var barmi:any=false;
barmi="alma";
barmi=5;
console.log(barmi+szam);

//Helyette használjuk az "unknown" ismeretlen típusú változót!
var ismeretlen:unknown=false;
ismeretlen=5;
console.log(Number(ismeretlen)+szam);
ismeretlen="alma";
console.log(String(ismeretlen)+szam);

//Tömbök létrehozása
var tombNeve:string[]=["alma","körte","szilva","barack"];
var szamok:number[]=[1,5,12,21,42,13,69,99,3];
var barmilyenAdat:any[]=["alma",5,true];

//másik megadási lehetőség:
var jatekTipusok:Array<string>=["fps","tps","stratégia","szimulátor","túlélő","sport"]