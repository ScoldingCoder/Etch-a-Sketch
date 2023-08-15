let root = document.documentElement;

let paintBlack = true; //paint squares black by default
let paintRainbow = false; //paint squares random rgb when true 
let paintWhite = false; //paint squares white (erase) when true
let paintSelect = false; // paints grid to colour selected by the user 

let colorSelect =  "";


let rowNum = getComputedStyle(root).getPropertyValue("--rows");
let columnNum = getComputedStyle(root).getPropertyValue("--columns");

count = rowNum*columnNum;



function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

// Function to creates the initial grid  
function createDivs(divCount) {
  for(i = divCount-1; i>=0; i--){

    div = document.createElement('div');
    div.classList.add("divs");
   
    div.style.borderColor = "rgb(238, 232, 232)";
   
    div.style.backgroundColor ="white";
    container.appendChild(div);
 
   }

}

//Selecting the Conatiner div
container = document.querySelector('.container');

//Creating divs
createDivs(count);

let divAct = container.getElementsByClassName("divs"); // div to take action on

//paints the div on hover
function paint (){

  for (var i = 0 ; i < divAct.length; i++) {
      
    divAct[i].addEventListener("mouseenter", function( event ){
  
    
     
    if (paintRainbow == true){  
        let r = getRandomInt(256);
        let g = getRandomInt(256);
        let b = getRandomInt(256);
        event.target.style.backgroundColor =`rgb(${r},${g},${b})`;
      
    }
  
    else if (paintBlack == true){
  
        event.target.style.backgroundColor = "black";
        
  
  
    } 
  
    else if (paintWhite == true){
  
      event.target.style.backgroundColor ="white";
  
    }

    else {
  
      event.target.style.backgroundColor =colorSelect;
  
    }
    
      },false);
    
  }


}


const buttons = document.querySelectorAll('button');

//Listening for the button Clicks
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
  Action=button.id;

  if (Action =="reset"){

    for (var i = 0 ; i < divAct.length; i++) {
    
      divAct[i].style.backgroundColor = "white";
     
      
      }    

  } 

  else if (Action =="gridNumber"){

    for (var i = 0 ; i < divAct.length; i++) {
    
      divAct[i].style.backgroundColor = "white";
      
      
      } 

    
    number = prompt("How many grids per row/column? Please enter a whole number between 1 and 100")

    if ((number > 0) && (number < 101) && (number%1 ==0) ){

    // Remove all divs 


    container.innerHTML = "";

      //Create new grid based on number entered
    container.style.setProperty("--rows",number);
    container.style.setProperty("--columns",number);
    


    //Populate new grid 
    count = number**2;
    createDivs(count);

    //listen for hover and colour appropiate div
    paint();
      
    }

    else{
      alert("Whoops,Looks like you made an error");
    }
  }

  else if (Action =="erase"){
    paintBlack = false; 
    paintRainbow = false; 
    paintWhite = true; 
    paintSelect = false; 

  }


  else if (Action =="rainbow"){
    paintBlack = false; 
    paintRainbow = true; 
    paintWhite = false; 
    paintSelect = false; 

  }


  else {
    paintBlack = true; 
    paintRainbow = false; 
    paintWhite = false; 
    paintSelect = false; 

  }

  });

});


document.getElementById("colorPicked").oninput = function() {

  colorSelect = this.value;

  paintBlack = false; 
  paintRainbow = false; 
  paintWhite = false; 
  paintSelect = true;


}




// Listens for the hover on the the grid (paints the intially created grid)
paint();



