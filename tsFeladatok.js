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
//Víz halmazállapot
var fok = Math.round(Math.random() * 200) - 50;
if (fok < 0) {
    document.write("<br>A v\u00EDz halmaz\u00E1llapota ".concat(fok, "C\u00B0 eset\u00E9n szil\u00E1rd(j\u00E9g)"));
}
else if (fok > 100) {
    document.write("<br>A v\u00EDz halmaz\u00E1llapota ".concat(fok, "C\u00B0 eset\u00E9n l\u00E9gnem\u0171(g\u0151z)"));
}
else {
    document.write("<br>A v\u00EDz halmaz\u00E1llapota ".concat(fok, "C\u00B0 eset\u00E9n foly\u00E9kony(v\u00EDz)"));
}
//Koordináta meghatározó
var x = Math.round(Math.random() * 2) - 1;
var y = Math.round(Math.random() * 2) - 1;
if (x > 0 && y > 0) {
    document.write("<br>A ".concat(x, ", ").concat(y, " pont az els\u0151 s\u00EDknegyedben van."));
}
else if (x < 0 && y > 0) {
    document.write("<br>A ".concat(x, ", ").concat(y, " pont az m\u00E1sodik s\u00EDknegyedben van."));
}
else if (x < 0 && y < 0) {
    document.write("<br>A ".concat(x, ", ").concat(y, " pont az harmadik s\u00EDknegyedben van."));
}
else if (x > 0 && y < 0) {
    document.write("<br>A ".concat(x, ", ").concat(y, " pont az negyedik s\u00EDknegyedben van."));
}
else if (x == 0 && y == 0) {
    document.write("<br>A ".concat(x, ", ").concat(y, " pont az orig\u00F3ban van."));
}
else if (x == 0) {
    document.write("<br>A ".concat(x, ", ").concat(y, " pont az y tengelyen van."));
}
else {
    document.write("<br>A ".concat(x, ", ").concat(y, " pont az x tengelyen van."));
}
//Számtani sorozat
//kezdőérték (0-100)
//kvóciens(1-10)
//mennyiség (2-20)
var kezdoErtek = Math.round(Math.random() * 100);
var kvociens = Math.round(Math.random() * 9) + 1;
var mennyiseg = Math.round(Math.random() * 18) + 2;
document.write("<br>A generált számtani sorozat:");
for (var i = 0; i < mennyiseg; i++) {
    document.write(kezdoErtek + ",");
    kezdoErtek += kvociens;
}
