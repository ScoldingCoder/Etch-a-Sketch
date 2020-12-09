let root = document.documentElement;

rowNum = getComputedStyle(root).getPropertyValue("--rows");
columnNum = getComputedStyle(root).getPropertyValue("--columns");

count = rowNum*columnNum ;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

container = document.querySelector('.container');

  for(i = count-1; i>=0; i--){

   div = document.createElement('div');
   div.setAttribute ('class', 'divs');
   //div.style.borderStyle = "solid";
   div.style.borderColor = "rgb(238, 232, 232)";
   //div.style.boxSizing = "box-border";
  // div.style.borderWidth = "0.25px";
   div.style.backgroundColor ="white";
   container.appendChild(div);

  }


  let paint = document.getElementsByClassName("divs");

  for (var i = 0 ; i < count; i++) {
      
    paint[i].addEventListener("mouseenter", function( event ){
         
        let r = getRandomInt(255)
        let g = getRandomInt(255)
        let b = getRandomInt(255)
        /*event.target.style.backgroundColor = "black";*/
        event.target.style.borderColor = `rgb(${r},${g},${b})`;
        event.target.style.backgroundColor =`rgb(${r},${g},${b})`;
    
      },false);
    
 }

  