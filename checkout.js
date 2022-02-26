var carsummary = JSON.parse(localStorage.getItem("carsummary"));

console.log(carsummary)
let container = document.getElementById("container")
appendData(carsummary)
function appendData(element){
  let first = document.createElement("div");
  first.id="first";
  let cartitle = document.createElement("div");
  let p = document.createElement("h3");
  p.innerText= element.carname;


  let carimage = document.createElement("div");
  let image = document.createElement("img");
   image.src = element.image;

   let time = document.createElement("div");
   time.id= "time"
   let start = document.createElement("div")
   let start_time= document.createElement("p");
   let circle = document.createElement("div");
   circle.id = "green";
   

   start_time.innerText= JSON.parse(localStorage.getItem("start"))


   let end = document.createElement("div")
   let red = document.createElement("div")
   red.id="red"
   let end_time= document.createElement("p");
   end_time.innerText= JSON.parse(localStorage.getItem("end"))

   let rating = document.createElement("div");

   let rating_value = document.createElement("p");
   rating_value.innerText= "Rating-"+"5(234)"+" "+element.kilometres+" Kms driven"


   let price_div = document.createElement("div");
   price_div.id="price_div";
   let coupon = document.createElement("div")
   coupon.id="coupon";
   let coupon_input = document.createElement("input")
   let coupon_button = document.createElement("button")
   coupon_button.addEventListener("click",()=>{
       if(coupon_input.value=="Zoomcar30"){
           price_div.innerText= "";
        price_div.innerText= "Total Fare:-"+(element.price-(element.price/100)*30);
       }
       
   })
   coupon_button.innerHTML="Apply Coupon"
   coupon_button.id="coupon_button"
   coupon.append(coupon_input,coupon_button)
   

   let price_value = document.createElement("p");
   price_value.innerText="Total Fare:-"+element.price;
   price_value.style.fontWeight="bold"

   let checkout= document.createElement("div")
   checkout_button= document.createElement("button")
   checkout_button.innerHTML="Checkout"
   checkout.append(checkout_button)

     cartitle.append(p)
     carimage.append(image)
     first.append(cartitle,carimage);


     start.append(circle,start_time)
     start.id="start"
     end.append(red,end_time)
     end.id="end"
     time.append(start,end)


     rating.append(rating_value)

     price_div.append(price_value,coupon);

     container.append(first,time,rating,price_div,checkout)

}