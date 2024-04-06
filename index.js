// Generate 2 random numbers
  
var random1 = Math.floor(Math.random()*6+1) ;
var random2 = Math.floor(Math.random()*6+1);
 

if(random1 > random2) {
  document.querySelector("h1") .textContent= "player 1 wins"
}

else if(random2 > random1 ) {
    document.querySelector("h1") .textContent= "player 2 wins"

}

else {
    document.querySelector("h1") .textContent= "Draw!"

    

}

document.querySelector(".img1").setAttribute("src","images/dice"+random1 + ".png")
document.querySelector(".img2").setAttribute("src","images/dice"+random2 + ".png")