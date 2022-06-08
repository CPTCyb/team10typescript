//Négyzet kerület terület(szekvenciális) 1-10Random
var aOldal:number=Math.round(Math.random()*10);
document.write(`Az ${aOldal} egységnyi oldalú négyzet kerülete: ${aOldal*4} egység`);
document.write(`<br>Az ${aOldal} egységnyi oldalú négyzet területe: ${aOldal*aOldal} egység`);
//Páros páratlan(szelekciós) 1-100Random
var vizsgaltSzam:number=Math.round(Math.random()*100);
if(vizsgaltSzam%2==0)
{
    document.write(`<br>A ${vizsgaltSzam} páros`);
}
else{
    document.write(`<br>A ${vizsgaltSzam} páratlan`);
}
//Prím-e(iterációs) 1-100Random
var oszto:number=0;
for(let i=1;i<=vizsgaltSzam;i++){
    if(vizsgaltSzam%i==0)
    {
        oszto++;
    }
}
if(oszto==2)
{
    document.write(`<br>A ${vizsgaltSzam} prím`);
}
else
{    
    document.write(`<br>A ${vizsgaltSzam} NEM prím`);
}

//Víz halmazállapot
var fok:number=Math.round(Math.random()*200)-50;
if(fok<0)
{
    document.write(`<br>A víz halmazállapota ${fok}C° esetén szilárd(jég)`);
}
else if(fok>100)
{
    document.write(`<br>A víz halmazállapota ${fok}C° esetén légnemű(gőz)`);
}
else
{
    document.write(`<br>A víz halmazállapota ${fok}C° esetén folyékony(víz)`);
}
//Koordináta meghatározó
var x:number=Math.round(Math.random()*2)-1;
var y:number=Math.round(Math.random()*2)-1;
if(x>0 && y>0){
    document.write(`<br>A ${x}, ${y} pont az első síknegyedben van.`);
}
else if(x<0 && y>0){
    document.write(`<br>A ${x}, ${y} pont az második síknegyedben van.`);
}
else if(x<0 && y<0){
    document.write(`<br>A ${x}, ${y} pont az harmadik síknegyedben van.`);
}
else if(x>0 && y<0){
    document.write(`<br>A ${x}, ${y} pont az negyedik síknegyedben van.`);
}
else if(x==0 && y==0){
    document.write(`<br>A ${x}, ${y} pont az origóban van.`);
}
else if(x==0){
    document.write(`<br>A ${x}, ${y} pont az y tengelyen van.`);
}
else{
    document.write(`<br>A ${x}, ${y} pont az x tengelyen van.`);
}

//Számtani sorozat
//kezdőérték (0-100)
//kvóciens(1-10)
//mennyiség (2-20)
var kezdoErtek:number=Math.round(Math.random()*100);
var kvociens:number=Math.round(Math.random()*9)+1;
var mennyiseg:number=Math.round(Math.random()*18)+2;
document.write("<br>A generált számtani sorozat:");
for(let i=0;i<mennyiseg;i++)
{
    document.write(kezdoErtek+",");
    kezdoErtek+=kvociens;
}
