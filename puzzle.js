window.addEventListener('load', puzzle, false);

const pieces = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
var emptyPiece;
var complete = false

function puzzle() {
  complete = false;

  for(let i=0; i < 16; i++){
    let temp = document.getElementById(i);
    if(temp) {temp.className = "piece";}
  }

  let rando = pieces.sort(
    function(){
      return(Math.round(Math.random())-0.5)
    });

  for(let i=0; i < 16; i++){
    let temp = document.getElementById(i);
    if(temp){
      if(rando[i] == 16) {
        temp.className = "empty";
        temp.innerHTML = "";
        emptyPiece = i;
      }
      else
        temp.innerHTML = rando[i];
    }
  }
}

function clickPiece(n) {
  if(n.id != emptyPiece) {
    let clicked = Number(n.id);
    let emptyDivide = Math.floor(emptyPiece/4);
    let emptyRemain = emptyPiece % 4;
    let clickedDivide = Math.floor(clicked/4);
    let clickedRemain = clicked % 4;

    if((Math.abs(emptyDivide - clickedDivide) == 1 && emptyRemain == clickedRemain) ||
     (Math.abs(emptyRemain - clickedRemain) == 1 && emptyDivide == clickedDivide)) {
       document.getElementById(emptyPiece).className = "piece";
       document.getElementById(emptyPiece).innerHTML = n.innerHTML;

       n.className = "empty";
       n.innerHTML = "";

       emptyPiece = clicked;
     }
     else if (emptyRemain == clickedRemain) {
       //  vertical line
       if(Math.abs(emptyDivide - clickedDivide) == 2) {
        //  two vertical spaces from empty space
        if(emptyDivide == 0) {
          let firstSpace = document.getElementById(emptyPiece);
          let secondSpace = document.getElementById(emptyPiece + 4);
          firstSpace.className = "piece";
          firstSpace.innerHTML = secondSpace.innerHTML;
          secondSpace.innerHTML = n.innerHTML;
          n.className = "empty";
          n.innerHTML = "";
          emptyPiece = clicked;
        }
        else if (emptyDivide == 3) {
           let firstSpace = document.getElementById(emptyPiece);
           let secondSpace = document.getElementById(emptyPiece - 4);
           firstSpace.className = "piece";
           firstSpace.innerHTML = secondSpace.innerHTML;
           secondSpace.innerHTML = n.innerHTML;
           n.className = "empty";
           n.innerHTML = "";
           emptyPiece = clicked;
        }




       } else if (Math.abs(emptyDivide - clickedDivide) == 3) {
        //  three vertical spaces from empty space
       }
     }
     else if (emptyDivide == clickedDivide) {
      // horizontal line
      if(Math.abs(emptyRemain - clickedRemain) == 2) {
        //  two horizontal spaces from empty space
      }
      else if (Math.abs(emptyRemain - clickedRemain) == 3) {
        // three horizontal spaces from empty space
      }
     }
  }
}
