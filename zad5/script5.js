function CreateStudent(name, surname, point) {
    return{
        name: name,
        surname: surname,
        point: point
    };
}

let student = [];
let student25 = [];
let student50 = [];
let student75 = [];
let student100 = [];
let sum=new Array(4).fill(0);

while(true){
    let name = prompt("Upisi ime studenta");
    if(name === null)
        break;
    while(true){
        if(name === ""){
            alert("Niste unjeli ime studenta");
            name = prompt("Upisi ime studenta");
        }
        else if(!isNaN(name)){
            alert("Nemoze ime biti broj");
            name = prompt("Upisi ime studenta");
        }
        else
            break;
    }
    name = name.trim();

    let surname = prompt("Upisi prezime studenta");
    while(true){
        if(surname === ""){
            alert("Niste unjeli prezime studenta");
            surname = prompt("Upisi prezime studenta");
        }
        else if(surname === null){
            alert("Nemozete sada prekinuti upis studenta");
            surname = prompt("Upisi prezime studenta");
        }
        else if(!isNaN(surname)){
            alert("Nemoze prezime biti broj");
            surname = prompt("Upisi prezime studenta");
        }
        else
            break;
    }

    let point = prompt("Upisi bodove studenta");
    while(true){
        if(isNaN(Number(point))){
            alert("Niste unjeli broj");
            point = prompt("Upisi bodove studenta");
        }
        else if(point === ""){
            alert("Niste unjeli bodove studenta");
            point = prompt("Upisi bodove studenta");
        }
        else if(point === null){
            alert("Nemozete sada prekinuti upis studenta");
            point = prompt("Upisi bodove studenta");
        }
        else
            break;
    }
    point = point.trim();

    student.push(CreateStudent(name, surname, point));
}

student.forEach(item => {
    if(item.point<=25){
        student25.push(item);
        sum[0]+=Number(item.point);
    }
    else if(item.point<=50 && item.point>25){
        student50.push(item);
        sum[1]+=Number(item.point);
    }
    else if(item.point<=75 && item.point>50){
        student75.push(item);
        sum[2]+=Number(item.point);
    }
    else{
        student100.push(item);
        sum[3]+=Number(item.point);
    }
});

student25.sort((a, b) => a.surname.localeCompare(b.surname));
student50.sort((a, b) => a.surname.localeCompare(b.surname));
student75.sort((a, b) => a.surname.localeCompare(b.surname));
student100.sort((a, b) => a.surname.localeCompare(b.surname));



console.log("Studenti sa 0-25 bodova su imali prosjek bodova:"+sum[0]/student25.length);
console.log("To su:")
student25.forEach(item => {
    console.log(item.surname + " " + item.name);
});

console.log("Studenti sa 26-50 bodova su imali prosjek bodova:"+sum[1]/student50.length);
console.log("To su:")
student50.forEach(item => {
    console.log(item.surname + " " + item.name);
});

console.log("Studenti sa 51-75 bodova su imali prosjek bodova:"+sum[2]/student75.length);
console.log("To su:")
student75.forEach(item => {
    console.log(item.surname + " " + item.name);
});

console.log("Studenti sa 76-100 bodova su imali prosjek bodova:"+sum[3]/student100.length);
console.log("To su:")
student100.forEach(item => {
    console.log(item.surname + " " + item.name);
});