const greet : String = "Hello 13BC!";
let isTrue : Boolean = true;
let age : Number = 25;
let pwd : HTMLInputElement = document.getElementById("password") as HTMLInputElement;
console.log(greet);


type Osztaly={
    evfolyam:number,
    betujel:'A'|'B'|'C'|'D'
}


type Diak = {
    name:string,
    age:number,
    class:Osztaly
}
let Peti: Diak;
Peti = {name: "Peti", age:16, class:{betujel:'A', evfolyam:10}};