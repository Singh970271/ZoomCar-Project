function navbar(){
    return `<div id="pointer"  >
                <!-- <img src="https://img.icons8.com/ios-glyphs/30/000000/menu--v1.png"/> onclick="opensideber()" -->
                <i class="fa fa-bars"></i>
            </div>
            <h1 id="logo">
                
                <a href="./index.html">ZOOMCAR</a>  
            </h1>
            <nav>
                
                <ul>
                    <li>
                        <!-- Make a onclick function of become a host -->
                        <a href="./becomeHost.html">Become a Host</a>
                    </li>
                    <li>
                        <!-- Make a onclick function of zms -->
                        <a href="./zsm/zsm.html">ZMS</a>
                    </li>
                    <li>
                        <!-- Make a onclick function of login and signup -->
                        <a href="./signin_signup.html">Login/Signup</a>
                    </li>
                </ul>
            </nav>`
}

function sidebarf(){

    return `<div class="sidemenu">
                
    <div class="blank"></div>
<div class="menuelements">
    <div class="profileclick" onclick='window.location.href="./profile.html"'>
        <div class="menudetails">
            <div id="sidelogo"><i class="fa-solid fa-credit-card"></i></div>
            <div id="sidedetails">Credits</div>
            <div id="amount">0</div>
        </div>
        <div class="menudetails">
            <div id="sidelogo"><i class="fa-solid fa-circle-dollar-to-slot"></i></div>
            <div id="sidedetails">Z-POINTS</div>
            <div id="amount">0</div>
        </div>
        <div class="menudetails">
            <div id="sidelogo"><i class="fa-solid fa-wallet"></i></div>
            <div id="sidedetails">Payment Wallet</div>
            <div id="amount">Link Wallet</div>
        </div>
    </div>
    <div class="profileclick">
        <div class="menudetails">
            <div id="sidelogo"><i class="fa-solid fa-car"></i></div>
            <div id="sidedetails">My Trips</div>
            <div id="amount"></div>
        </div>
        <div class="menudetails">
            <div id="sidelogo"><i class="fa-solid fa-circle-check"></i></div>
            <div id="sidedetails">Profile erification</div>
            <div id="amount"></div>
        </div>
        <div class="menudetails">
            <div id="sidelogo"><i class="fa-solid fa-location-dot"></i></div>
            <div id="sidedetails" onclick="displaycity()">Change City</div>
            <div id="amount"></div>
        </div>
        <div class="menudetails">
            <div id="sidelogo"> <i class="fa-brands fa-shirtsinbulk"></i> </div>
            <div id="sidedetails">Supermiler Club</div>
            <div id="amount"></div>
        </div>
    </div>
    <div class="profileclick">
        <div class="menudetails">
            <div id="sidelogo"> <i class="fa-solid fa-book"></i></div>
            <div id="sidedetails">ZoomCar Fleet Vehicles Polocies</div>
            <div id="amount"></div>
        </div>
        <div class="menudetails">
            <div id="sidelogo"> <i class="fa-solid fa-book"></i> </div>
            <div id="sidedetails">ZoomCar Host Vehicles Polocies</div>
            <div id="amount"></div>
        </div>
        <div class="menudetails">
            <div id="sidelogo"><i class="fa-solid fa-handshake-angle"></i></div>
            <div id="sidedetails">Help & Support</div>
            <div id="amount"></div>
        </div>
    </div>
</div>
</div>
<div id="sidebarmore"></div>
`
}

function citybarf(){
    return `<div class="city-inner">
    <div class="citysection">
        <div class="title">Select Your Country/City</div>
        <div class="input">
            <div class="inputcountry">
                <div class="location"><i class="fa-solid fa-location-dot"></i></div>
                <div class="inputbox">
                    <select name="" id="country">
                        <option value="">Select a Country</option>
                        <option value="india">India</option>
                    </select>
                </div>
            </div>
            <div class="inputcountry">
                <div class="location"><i class="fa-solid fa-location-dot"></i></div>
                <div class="inputbox">
                    <select name="" id="city">
                        <option value="">Select a City</option>
                        <option value="delhi">Delhi</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="bangalore">Bangalore</option>
                        <option value="hyderabad">Hyderabad</option>
                        <option value="Pune">Pune</option>
                        <option value="Ahmedabad">Ahmedabad</option>
                        <option value="Kolkata">Kolkata</option>
                       
                    </select>
                </div>
            </div>
        </div>
        <div class="comform">
            <Button id="confirm" >CONFIRM</Button>
        </div>
    </div>
</div>`
}



export  {navbar,sidebarf,citybarf};