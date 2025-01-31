function CresteWorker(firstname, lastname,industry,pay) {
  return{  firstname: firstname,
    lastname: lastname,
    industry: industry,
    pay: pay
};
}

let worker=[]
while(true){
    firstName=prompt("Upisi ime radnika")
    if(firstName===null)
       break;
    while(true){
         if(firstName===""){
             alert("Niste unjeli ime radnika")
             firstName=prompt("Upisi ime radnika")
         }
         else if(!isNaN(firstName)){
             alert("Nemoze ime biti broj")
             firstName=prompt("Upisi ime radnika")
         }
         else
             break
    }
    firstName=firstName.trim()

    lastname=prompt("Upisi prezime radnika")
    lastname=InputCheck(lastname,"Krivi unos prezimena","Upisi prezime radnika")

    industry=prompt("Upisi industriju radnika")
    industry=InputCheck(industry,"Krivi unos industrije","Upisi industriju")

    pay=prompt("Upisi placu radnika")
    while(true){
         if(isNaN(Number(pay))){
             alert("Niste unjeli broj")
             pay=prompt("Upisi placu radnika")
         }
         else if(pay===""){
             alert("Niste unjeli placu radnika")
             pay=prompt("Upisi placu radnika")
         }
         else if(pay===null){
             alert("Nemozete sada prekinuti upis radnika")
             pay=prompt("Upisi placu radnika")
         }
         else
             break
    }
    pay=pay.trim()
    worker.push(CresteWorker(firstName,lastname,industry,pay))
}

 let sum=new Array(worker.length).fill(0)
for(let i=0;i<worker.length;i++){
    sum[i]=worker[i].pay
}
 


function InputCheck(input, alertMessage,promptMessage){
    while(true){
        if(input===""){
            alert(alertMessage)
            input=prompt(promptMessage)
        }
        else if(input===null){
            alert(alertMessage)
            input=prompt(promptMessage)
        }
        else if(!isNaN(input)){
            alert(alertMessage)
            input=prompt(promptMessage)
        }
        else
            break
    }
    return input.trim()
}


