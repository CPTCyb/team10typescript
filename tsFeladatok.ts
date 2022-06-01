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