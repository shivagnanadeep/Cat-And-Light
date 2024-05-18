let offSwitch=document.getElementById("offSwitch");
let onSwitch = document.getElementById("onSwitch");
let bulbImage=document.getElementById("bulbImage");
let catImage=document.getElementById("catImage");
let switchStatus=document.getElementById("switchStatus");
onSwitch.addEventListener("click",()=>{
    bulbImage.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    catImage.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    switchStatus.textContent="Switched On";
        lightStatus="on";
        onSwitch.style.backgroundColor="blue";
        offSwitch.style.backgroundColor="#cbd2d9";
        onSwitch.disabled=true;
        offSwitch.disabled=false;
});
offSwitch.addEventListener("click",()=>{
    bulbImage.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    catImage.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    switchStatus.textContent="Switched Off"
        lightStatus="off";
        offSwitch.style.backgroundColor="red";
        onSwitch.style.backgroundColor="#cbd2d9";
        offSwitch.disabled=true;
        onSwitch.disabled=false;
});
