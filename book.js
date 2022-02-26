var carDataArray = JSON.parse(localStorage.getItem("carData"))

function update(){
  let start = document.getElementById("start").value;
  let end = document.getElementById("end").value;
  
  localStorage.setItem("start",JSON.stringify(start))
  localStorage.setItem("end",JSON.stringify(end))

}
let start = document.getElementById("start").value;
let end = document.getElementById("end").value;

localStorage.setItem("start",JSON.stringify(start))
localStorage.setItem("end",JSON.stringify(end))
displayData(carDataArray)
function displayData(carDataArray){
  document.getElementById("cars").innerText = null;

  

  carDataArray.map(function(elem){

    let car_box = document.createElement("div");
    car_box.id="car_box"

    let left_div = document.createElement("div");
    let image = document.createElement("img");
    image.src=elem.image;
    left_div.append(image)
    left_div.id="left_div"


    let middle_div = document.createElement("div");
    let pickup = document.createElement("div");
    pickup.innerText= elem.pickupadd
    pickup.id="pickup_div"
    middle_div.id="middle_div"

    let title_div = document.createElement("div");
    title_div.innerText = elem.carname+"."+elem.fuel+"."+elem.seats+" seats";
    let rating_div = document.createElement("div");
    rating_div.innerText = elem.kilometres+" Kms driven"

    middle_div.append(pickup,title_div,rating_div)

    let right_div = document.createElement("div");
    right_div.id="right_div"
     
     
    let price = document.createElement("p");
    price.innerText = "₹ "+elem.price
    let button = document.createElement("button")
    button.innerHTML= "Book now"
    button.addEventListener("click",()=>{
      localStorage.setItem("carsummary",JSON.stringify(elem));
      window.location.href = "checkout.html"
    })
    right_div.append(price,button)

    car_box.append(left_div,middle_div,right_div)
    document.getElementById("cars").append(car_box)

    

    
   
});

}