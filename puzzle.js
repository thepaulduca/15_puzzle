window.addEventListener('load', puzzle, false);

const pieces = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
let emptyPiece;
let complete = false

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
  if(emptyPiece != n.id) {
    let clicked = Number(n.id);
    let emptyDivide = Math.floor(emptyPiece/4);
    let emptyRemain = emptyPiece % 4;
    let clickedDivide = Math.floor(clicked/4);
    let clickedRemain = clicked % 4;

    if((Math.abs(emptyDivide - clickedDivide) == 1 && emptyRemain == clickedRemain) ||
     (Math.abs(emptyRemain - clickedRemain) == 1 && emptyDivide == clickedDivide)) {
      //  clicked space is adjacent to empty space
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
        console.log(emptyDivide)
        if(emptyDivide == 0 || emptyDivide == 2) {
          // empty space is on top
          let firstSpace = document.getElementById(emptyPiece);
          let secondSpace = document.getElementById(emptyPiece + 4);
          firstSpace.className = "piece";
          firstSpace.innerHTML = secondSpace.innerHTML;
          secondSpace.innerHTML = n.innerHTML;
          n.className = "empty";
          n.innerHTML = "";
          emptyPiece = clicked;
        }
        else if (emptyDivide == 3 || emptyDivide == 1) {
          // empty space is on bottom
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
        if(emptyDivide == 0) {
          // empty space is on top
          let firstSpace = document.getElementById(emptyPiece);
          let secondSpace = document.getElementById(emptyPiece + 4);
          let thirdSpace = document.getElementById(emptyPiece + 8);
          firstSpace.className = "piece";
          firstSpace.innerHTML = secondSpace.innerHTML;
          secondSpace.innerHTML = thirdSpace.innerHTML;
          thirdSpace.innerHTML = n.innerHTML;
          n.className = "empty";
          n.innerHTML = "";
          emptyPiece = clicked;
        }
        else if (emptyDivide == 3) {
          // empty space is on bottom
          let firstSpace = document.getElementById(emptyPiece);
          let secondSpace = document.getElementById(emptyPiece - 4);
          let thirdSpace = document.getElementById(emptyPiece - 8);
          firstSpace.className = "piece";
          firstSpace.innerHTML = secondSpace.innerHTML;
          secondSpace.innerHTML = thirdSpace.innerHTML;
          thirdSpace.innerHTML = n.innerHTML;
          n.className = "empty";
          n.innerHTML = "";
          emptyPiece = clicked;
        }
       }
     }
     else if (emptyDivide == clickedDivide) {
      // horizontal line
      if(Math.abs(emptyRemain - clickedRemain) == 2) {
        //  two horizontal spaces from empty space
        if(emptyRemain == 0 || emptyRemain == 1) {
          // empty space is on the left
          let firstSpace = document.getElementById(emptyPiece);
          let secondSpace = document.getElementById(emptyPiece + 1);
          firstSpace.className = "piece";
          firstSpace.innerHTML = secondSpace.innerHTML;
          secondSpace.innerHTML = n.innerHTML;
          n.className = "empty";
          n.innerHTML = "";
          emptyPiece = clicked;
        }
        else if (emptyRemain == 3 || emptyRemain == 2) {
          // empty space is on the right
          let firstSpace = document.getElementById(emptyPiece);
          let secondSpace = document.getElementById(emptyPiece - 1);
          firstSpace.className = "piece";
          firstSpace.innerHTML = secondSpace.innerHTML;
          secondSpace.innerHTML = n.innerHTML;
          n.className = "empty";
          n.innerHTML = "";
          emptyPiece = clicked;
        }
      }
      else if (Math.abs(emptyRemain - clickedRemain) == 3) {
        // three horizontal spaces from empty space
        if(emptyRemain == 0){
          // empty space is on the left
          let firstSpace = document.getElementById(emptyPiece);
          let secondSpace = document.getElementById(emptyPiece + 1);
          let thirdSpace = document.getElementById(emptyPiece + 2);
          firstSpace.className = "piece";
          firstSpace.innerHTML = secondSpace.innerHTML;
          secondSpace.innerHTML = thirdSpace.innerHTML;
          thirdSpace.innerHTML = n.innerHTML;
          n.className = "empty";
          n.innerHTML = "";
          emptyPiece = clicked;
        }

      else if (emptyRemain == 3) {
        // empty space is on the right
        let firstSpace = document.getElementById(emptyPiece);
        let secondSpace = document.getElementById(emptyPiece - 1);
        let thirdSpace = document.getElementById(emptyPiece - 2);
        firstSpace.className = "piece";
        firstSpace.innerHTML = secondSpace.innerHTML;
        secondSpace.innerHTML = thirdSpace.innerHTML;
        thirdSpace.innerHTML = n.innerHTML;
        n.className = "empty";
        n.innerHTML = "";
        emptyPiece = clicked;
      }
    }
   }
  }
}
