function signup(){
    console.log("welcom To Sign Up")
   var z= document.querySelector(".popUp-container");
   z.style.display="none"
   z.setAttribute('id','z-popUp')
    var y=document.querySelector(".main-register-popUp");
    y.setAttribute('id','dis-main-register');
    
}
function signin(e){
    event.preventDefault();
    var username=document.getElementById('name').value;
    var mobile=document.getElementById('enter-number').value;
    var user=localStorage.getItem('username1');
    var data=JSON.parse(user);
    // mobile!==data.mobile
    if(!data || mobile!==data.mobile ){
        var p=document.getElementById('text3');
        p.innerHTML='The mobile number +91'+mobile+' has not been registered with us. Lets create a new account.'
        var x=document.querySelector(".register_popUp");
        x.setAttribute('id','dis-register');
        document.getElementById('image1').addEventListener('click',function(){
            x.style.display="none"
        })
    }
    else if(mobile==data.mobile){
        var t=document.querySelector(".successfully-login-popUp");
        t.setAttribute('id','successfully_login')
        console.log("You are Successfully Login")
    }
}



function cross(){
    document.querySelector(".main-register-popUp").style.display="none";
}


function main_signup(e){
    e.preventDefault();
    var mobile=document.getElementById('registr-mobile').value;
    var email=document.getElementById('register-email').value;
    var username=document.getElementById('name').value;
    var password=document.getElementById('register-password').value;

    var user={
        mobile:mobile,
        email:email,
        username:username,
        password:password
    };

    var json=JSON.stringify(user);
    localStorage.setItem("username1",json)
    document.querySelector(".popUp-container").style.display="none";
    document.querySelector(".main-register-popUp").style.display="none";
    document.querySelector(".register_popUp").style.display="none";
}




//become host js
function hostFunc(e){
    e.preventDefault();
    var mobile=document.getElementById('hostNumber').value;
    var email=document.getElementById('hostEmail').value;

    var user=localStorage.getItem('username1');
    var data=JSON.parse(user);

    if(mobile==data.mobile&&email==data.email){
        var x=document.querySelector(".hostPopUp");
        x.setAttribute('id','hostPopUp1');
        console.log("You are successfully become a host")
    }
}

function cross1(){
    var x=document.querySelector(".hostPopUp");
    x.style.display="none"
}

function cross(){
    window.location.href="index.html";
}