let root = document.documentElement;



rowNum = getComputedStyle(root).getPropertyValue("--rows");
columnNum = getComputedStyle(root).getPropertyValue("--columns");

count = rowNum*columnNum ;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

// Function to creates the initial grid  
function createDivs(divCount) {
  for(i = divCount-1; i>=0; i--){

    div = document.createElement('div');
    div.setAttribute ('class', 'divs');
    
    div.style.borderColor = "rgb(238, 232, 232)";
   
    div.style.backgroundColor ="white";
    container.appendChild(div);
 
   }

}

//Selecting the Conatiner div
container = document.querySelector('.container');

//Creating divs
createDivs(count) ;

let divAct = document.getElementsByClassName("divs"); // div to take action on


const buttons = document.querySelectorAll('button');

//Listening for the button Clicks
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
  Action=button.id;

  if (Action =="reset"){

    for (var i = 0 ; i < divAct.length; i++) {
    
      divAct[i].style.backgroundColor = "white";
      //divAct[i].style.borderColor = "rgb(238, 232, 232)";
      
      }    

  } 

  else if (Action =="gridNumber"){

    for (var i = 0 ; i < divAct.length; i++) {
    
      divAct[i].style.backgroundColor = "white";
      //divAct[i].style.borderColor = "rgb(238, 232, 232)";
      
      } 

    
    number = window.prompt("How many grids per row/column? Please enter a whole number between 1 and 100")

    if ((number > 0) && (number < 65) && (number%1 ==0) ){

    document.querySelectorAll('.divs').forEach(function(a){
      a.remove()
      }) 
      createDivs(number**2);
    }

    else{
      window.alert("Whoops,Looks like you made an error")
    }
  }

  });

});

// Listens for the hover on the the grid
  for (var i = 0 ; i < count; i++) {
      
    divAct[i].addEventListener("mouseenter", function( event ){
         
        let r = getRandomInt(255)
        let g = getRandomInt(255)
        let b = getRandomInt(255)
        /*event.target.style.backgroundColor = "black";*/
        //event.target.style.borderColor = `rgb(${r},${g},${b})`;
        event.target.style.backgroundColor =`rgb(${r},${g},${b})`;
    
      },false);
    
 }

  





