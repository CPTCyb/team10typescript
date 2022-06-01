//Négyzet kerület terület(szekvenciális) 1-10Random
var aOldal = Math.round(Math.random() * 10);
document.write("Az ".concat(aOldal, " egys\u00E9gnyi oldal\u00FA n\u00E9gyzet ker\u00FClete: ").concat(aOldal * 4, " egys\u00E9g"));
document.write("<br>Az ".concat(aOldal, " egys\u00E9gnyi oldal\u00FA n\u00E9gyzet ter\u00FClete: ").concat(aOldal * aOldal, " egys\u00E9g"));
//Páros páratlan(szelekciós) 1-100Random
var vizsgaltSzam = Math.round(Math.random() * 100);
if (vizsgaltSzam % 2 == 0) {
    document.write("<br>A ".concat(vizsgaltSzam, " p\u00E1ros"));
}
else {
    document.write("<br>A ".concat(vizsgaltSzam, " p\u00E1ratlan"));
}
//Prím-e(iterációs) 1-100Random
var oszto = 0;
for (var i = 1; i <= vizsgaltSzam; i++) {
    if (vizsgaltSzam % i == 0) {
        oszto++;
    }
}
if (oszto == 2) {
    document.write("<br>A ".concat(vizsgaltSzam, " pr\u00EDm"));
}
else {
    document.write("<br>A ".concat(vizsgaltSzam, " NEM pr\u00EDm"));
}
