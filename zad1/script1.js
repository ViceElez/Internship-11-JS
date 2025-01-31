function CreateBook(name,price,type) {
   return{
        name : name,
        price : price,
        type : type
   };
}

let book=[];
while(true){
   bookName=prompt("Upisi naslov knjige")
   if(bookName===null)
      break;

   while(true){
      if(bookName===""){
         alert("Niste unjeli naslov knjige")
         bookName=prompt("Upisi naslov knjige")
      }
      else if(!isNaN(bookName)){
         alert("Nemoze naslov biti broj")
         bookName=prompt("Upisi naslov knjige")
      }
      else
         break
   }
   bookName=bookName.trim()
   
   bookPrice=prompt("Upisi cijenu knjige")
   while(true){
         if(isNaN(Number(bookPrice))){
            alert("Niste unjeli broj")
            bookPrice=prompt("Upisi cijenu knjige")
         }
         else if(bookPrice===""){
            alert("Niste unjeli cijenu knjige")
            bookPrice=prompt("Upisi cijenu knjige")
         }
         else if(bookPrice===null){
            alert("Nemozete sada prekinuti upis knjige")
            bookPrice=prompt("Upisi cijenu knjige")
         }
         else
            break
   }
   bookPrice=bookPrice.trim()

   bookType=prompt("Upisi tip knjige")
   while(true){
         if(bookType===""){
            alert("Niste unjeli tip knjige")
            bookType=prompt("Upisi tip knjige")
         }
         else if(bookType===null){
            alert("Nemozete sada prekinuti upis knjige")
            bookType=prompt("Upisi tip knjige")
         }
         else if(!isNaN(bookType)){
            alert("Nemoze tip biti broj")
            bookType=prompt("Upisi tip knjige")
         }
         else
            break
   }
   bookType=bookType.trim()

   book.push(CreateBook(bookName,bookPrice,bookType))
}
let sum = 0;
book.forEach(book => {
   sum += Number(book.price);
});
let avrg = sum/book.length;
console.log("Prosjecna cijena:"+avrg);

let maxPriceBook = book[0];
book.forEach(item => {
   if(Number(item.price)>Number(maxPriceBook.price))
      maxPriceBook=item;
});

console.log("Knjiga s najvecim odstupanjem:"+maxPriceBook.name);
book.sort((a,b) =>Number(b.price)-Number(a.price));
console.log("Sortirane knjige po cijeni odstupanja:");
book.forEach(item => {
   console.log(item.name);
});


