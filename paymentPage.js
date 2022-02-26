let totalFareprice=JSON.parse(localStorage.getItem("price"));
console.log(totalFareprice); 
let total=document.getElementById("totalFareprice");


    // let p=Number(totalFareprice);
    let totalPrice=document.createElement("h3");
    totalPrice.innerHTML=`    Pay INR ${totalFareprice}`
    total.append(totalPrice);