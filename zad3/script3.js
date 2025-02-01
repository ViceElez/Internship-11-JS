function CresteWorker(firstname, lastname,sector,pay) {
    return{  firstname: firstname,
      lastname: lastname,
      sector: sector,
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
  
      sector=prompt("Upisi sektor radnika")
      sector=InputCheck(sector,"Krivi unos sektora","Upisi sektor")
  
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
      worker.push(CresteWorker(firstName,lastname,sector,pay))
  }
  let sum=0

  worker.forEach(item => {
    sum+=Number(item.pay)
  });

  let sectorStats={}
  worker.forEach(item => {
    if(!sectorStats[item.sector]){
        sectorStats[item.sector]={
            name:item.sector,
            totalSalary:0,
            cout:0,
            workers:[]
        }
    }

    sectorStats[item.sector].totalSalary+=Number(item.pay)
    sectorStats[item.sector].cout++;
    sectorStats[item.sector].workers.push(item)
  });

  let sortedSectors = Object.values(sectorStats).sort((a, b) => b.totalSalary - a.totalSalary);

  sortedSectors.forEach(item => {
    console.log("Ime sektora:"+item.name)
    console.log("Doprinos:"+((item.totalSalary/sum)*100).toFixed(2) +"%")
    console.log()
  });

  sortedSectors.forEach(item => {
    console.log("Sektor:"+item.name)
    item.workers.forEach(item1 => {
        console.log("Ime:"+item1.firstname+""+item1.lastname)
        console.log("Doprinos"+((item1.pay/item.totalSalary)*100).toFixed(2) +"%")
    });
    console.log()
  });



  
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
  
  
  