function CreateTools(name,price,status){
    return{
        name : name,
        price : price,
        status : status
    };
}

let tools=[];
while(true){
    toolName=prompt("Upisi ime alata")
    if(toolName===null)
        break;

    while(true){
        if(toolName===""){
            alert("Niste unjeli ime alata")
            toolName=prompt("Upisi ime alata")
        }
        else if(!isNaN(toolName)){
            alert("Nemoze ime biti broj")
            toolName=prompt("Upisi ime alata")
        }
        else
            break
    }
    toolName=toolName.trim()
    
    toolPrice=prompt("Upisi cijenu alata")
    while(true){
        if(isNaN(Number(toolPrice))){
            alert("Niste unjeli broj")
            toolPrice=prompt("Upisi cijenu alata")
        }
        else if(toolPrice===""){
            alert("Niste unjeli cijenu alata")
            toolPrice=prompt("Upisi cijenu alata")
        }
        else if(toolPrice===null){
            alert("Nemozete sada prekinuti upis alata")
            toolPrice=prompt("Upisi cijenu alata")
        }
        else
            break
    }
    toolPrice=toolPrice.trim()

    let toolStatus=prompt("Upisi status alata")
    while(true){
        if(toolStatus===""){
            alert("Niste unjeli status alata")
            toolStatus=prompt("Upisi status alata")
        }
        else if(toolStatus===null){
            alert("Nemozete sada prekinuti upis alata")
            toolStatus=prompt("Upisi status alata")
        }
        else if(!isNaN(toolStatus)){
            alert("Nemoze status biti broj")
            toolStatus=prompt("Upisi status alata")
        }
        else if(toolStatus.toLowerCase().trim() !=="dostupan" && toolStatus.toLowerCase().trim()!=="nedostupan"){
            alert("Status moze biti samo dostupan  ili nedostupan")
            toolStatus=prompt("Upisi status alata")
        }
        else
            break
    }
    tools.push(CreateTools(toolName,toolPrice,toolStatus))
}



for(let i=0;i<tools.length;i++){
   if(tools[i].status.toLowerCase().trim()==="nedostupan")
       console.log(++i)
}

let availabeTools=[]
tools.forEach(item => {
    if(item.status.toLowerCase().trim()==="dostupan")
        availabeTools.push(item)
});


availabeTools.sort((a, b) => {
    if (Number(a.price) !== Number(b.price)) {
        return Number(b.price) - Number(a.price); 
    }
    return a.name.localeCompare(b.name); 
});

console.log("Sortirani dostupni alati:")
availabeTools.forEach(item => {
    console.log(item.name)
});




let sumOfUnavailableTools = 0;
tools.forEach(items => {
    if(items.status.toLowerCase().trim()==="nedostupan")
        sumOfUnavailableTools += Number(items.price);
});



let sumOfAvailableTools = 0;
availabeTools.forEach(items => {
    sumOfAvailableTools += Number(items.price);
});
console.log("Postotak cijene nedostupnih alata:"+(sumOfUnavailableTools/(sumOfAvailableTools+sumOfUnavailableTools))*100+"%");



let cheap=0
let midPrice=50
let expensive=100
let cheapTools=[]


availabeTools.forEach(item => {
    if(Number(item.price)>=cheap && Number(item.price)<midPrice)
        cheapTools.push(item)
});
console.log("Jeftini alati:")
cheapTools.forEach(items => {
    console.log(items.name)
});



let midPriceTools=[]
availabeTools.forEach(item => {
    if(Number(item.price)>=midPrice && Number(item.price)<expensive)
        midPriceTools.push(item)
});
console.log("Alati srednje cijene:")
midPriceTools.forEach(items => {
    console.log(items.name)
});



let expensiveTools=[]
availabeTools.forEach(item => {
    if(Number(item.price)>=expensive)
        expensiveTools.push(item)
});
console.log("Skupi alati:")
expensiveTools.forEach(items => {
    console.log(items.name)
});

//malo ispis steka
