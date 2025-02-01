let sizeOfArray=prompt("Upisite velicinu niza")

while(true){
    if(isNaN(Number(sizeOfArray))){
        alert("Niste unjeli broj")
        sizeOfArray=prompt("Upisite velicinu niza")
    }
    else if(sizeOfArray===""){
        alert("Velicina niza nemoze biti prazna")
        sizeOfArray=prompt("Upisite velicinu niza")
    }
    else
        break;
}

let minNum=1

let randomNum=Array.from({length: sizeOfArray}, () => Math.floor(Math.random() * (sizeOfArray-minNum+1)+minNum));
let randomSquareNum=randomNum.map(num=>num**2)

console.log("bez kvadriranja")
randomNum.forEach(item => {
    console.log(item)
});
console.log("kvadriran")
randomSquareNum.forEach(item => {
    console.log(item)
});



let sum=0
sum=randomSquareNum.reduce((acc,num)=>acc+num,0)
console.log("Suma niza je:"+sum)

console.log("Prosjecna vrijednost je:"+sum/randomSquareNum.length)

randomSquareNum.sort((a, b) => a - b)

console.log("sortiran")
randomSquareNum.forEach(item => {
    console.log(item)
});

let medianIndex=0
if(randomSquareNum.length%2===0){
   medianIndex= Math.floor(randomSquareNum.length/2)
   let equalArrayMedian=(randomSquareNum[medianIndex]+randomSquareNum[medianIndex-1])/2
   console.log("Medijan je:"+equalArrayMedian)
}
else{
    medianIndex=Math.floor(randomSquareNum.length/2)
    console.log("Medijan je:"+randomSquareNum[medianIndex])
}

