function createPlant(name,color,calories){
    return {
        name:name,
        color:color,
        calories:calories
    }
}

let plant=[]
while(true){
   let name=prompt("Upisi ime biljke")
    if(name===null)
        break;
    while(true){
        if(name===""){
            alert("Niste unjeli ime biljke")
            name=prompt("Upisi ime biljke")
        }
        else if(!isNaN(name)){
            alert("Nemoze ime biti broj")
            name=prompt("Upisi ime biljke")
        }
        else
            break
    }
    name=name.trim()

    color=prompt("Upisi boju biljke")
    while(true){
        if(color===""){
            alert("Niste unjeli boju biljke")
            color=prompt("Upisi boju biljke")
        }
        else if(color===null){
            alert("Nemozete sada prekinuti upis biljke")
            color=prompt("Upisi boju biljke")
        }
        else if(!isNaN(color)){
            alert("Nemoze boja biti broj")
            color=prompt("Upisi boju biljke")
        }
        else
            break
    }

    calories=prompt("Upisi kalorije biljke")
    while(true){
        if(isNaN(Number(calories))){
            alert("Niste unjeli broj")
            calories=prompt("Upisi kalorije biljke")
        }
        else if(calories===""){
            alert("Niste unjeli kalorije biljke")
            calories=prompt("Upisi kalorije biljke")
        }
        else if(calories===null){
            alert("Nemozete sada prekinuti upis biljke")
            calories=prompt("Upisi kalorije biljke")
        }
        else
            break
    }
    calories=calories.trim()
    plant.push(createPlant(name,color,calories))
}

let plantStats={}
plant.forEach(item => {
    if(!plantStats[item.color]){
        plantStats[item.color]={
            name:item.color,
            count:0,
            allCals:0
        }
    }
    plantStats[item.color].count++
    plantStats[item.color].allCals+=Number(item.calories)

});

let plantStatsArray = Object.values(plantStats)
plantStatsArray.sort((a, b) => a.name.localeCompare(b.name));

plantStatsArray.forEach(plant => {
    console.log(`Boja: ${plant.name},\nUkupno kalorija: ${plant.allCals}`)
});

plantStatsArray.sort((a,b) => b.allCals - a.allCals)

console.log("Najvise kalorija imaju biljka boje:")
for (let i = 0; i < Math.min(3, plantStatsArray.length); i++) {
    console.log(`Boja: ${plantStatsArray[i].name},\nUkupno kalorija: ${plantStatsArray[i].allCals}`);
}



