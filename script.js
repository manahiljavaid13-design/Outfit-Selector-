// making  a list of the file names for shirts & pants (using arrays/lists)
var shirtImages=["shirt1.png", "shirt2.png", "shirt3.png","shirt4.png","shirt5.png"];
var pantImages=["pant1.png", "pant2.png", "pant3.png","pant4.png","pant5.png"];
//counters for the array index of the clothing items
var currentShirtIndex = 0;
var currentPantIndex = 0;
function nextShirt() {
    //incrementing the shirt index
    currentShirtIndex +=1;
    if (currentShirtIndex >= shirtImages.length) {
        currentShirtIndex = 0; 
    }
    document.getElementById("shirt").src = shirtImages[currentShirtIndex];
}

function prevShirt() {
  currentShirtIndex -=1; //decrement indexx
  
  if (currentShirtIndex < 0) {
    currentShirtIndex = shirtImages.length - 1; 
  }
  document.getElementById("shirt").src = shirtImages[currentShirtIndex];
}
function nextPant() {
  currentPantIndex +=1;
  if (currentPantIndex >= pantImages.length) {
    currentPantIndex = 0;
  }
  document.getElementById("pant").src = pantImages[currentPantIndex];
}
function prevPant() {
  currentPantIndex-=1;
  if (currentPantIndex < 0) {
    currentPantIndex = pantImages.length - 1;
  }
  document.getElementById("pant").src = pantImages[currentPantIndex];
}
//connecting my buttons to their respective javascript functions!!
document.getElementById("next-top").onclick = nextShirt;
document.getElementById("prev-top").onclick = prevShirt;
document.getElementById("next-pants").onclick = nextPant;
document.getElementById("prev-pants").onclick = prevPant;