let token=localStorage.getItem("token");

if(token){
    display_profile();
}




async function display_profile(){
    try{
       
        // booking_json_data=JSON.stringify(bookingdata);
        let res=await fetch("http://localhost:5000/users",{

                  method:"GET",

        //    body:booking_json_data,


            headers:{
              "Content-Type":'application/json',

              authorization:token,

              
            },
            
        });
        let data=await res.json();
        console.log(data);
        display(data)
    }
    catch(err){
        console.log("err:",err);
    }
}


function display(data){

    let mobile=document.getElementById("mobile");
    let name=document.getElementById("name");
    let email=document.getElementById("email");
    mobile.textContent=data.mobilenumber;
    name.textContent=data.fullname;
    email.textContent=data.email;
}



async function get_bookingdata(){
    try{
       
        // booking_json_data=JSON.stringify(bookingdata);
        let res=await fetch("http://localhost:5000/bookings",{

                  method:"GET",

        //    body:booking_json_data,


            headers:{
              "Content-Type":'application/json',
              authorization:token,

              
            },
            
        });
        let data=await res.json();
        console.log(data);
        
    }
    catch(err){
        console.log("err:",err);
    }
}



function display_bookingdata(data){
    let left=document.getElementById("right");
    
    data.map((ele) =>{
let div=document.createElement("div");
        let image=document.createElement("img");
        let name=document.createElement("p");
        let address=document.createElement("p");
        let startdate=document.createElement("p");
        let enddate=document.createElement("p");
        let price=document.createElement("p");
image.src=ele.carid.carimage;
name.innerHTML=ele.carid.carname;
address.innerHTML=ele.address;
startdate.innerHTML=ele.startdate;
enddate.innerHTML=ele.enddate;
price=ele.price;

    })
}