/**
 * Created by Ylva on 2016-03-11.
 */

var boardDiv = document.getElementById("board");
var board = document.createElement("table");
boardDiv.appendChild(board);

var height = 5, width = 5;

for(var i = 0; i < height; i++){
    var row = document.createElement("tr");

    for(var j = 0; j < width; j++){
        var id = [i,j];
        var cell = document.createElement("td");
        cell.setAttribute("id", id.toString());
        cell.setAttribute("class", "on");
        cell.addEventListener("click", function(){
            getCellId(this)});
        cell.addEventListener("click", function(){
            lightSwitch(this)});
        cell.addEventListener("click", checkIfWon);
        row.appendChild(cell);
    }
    board.appendChild(row);
}

function lightSwitch(cell){
    cell.className === "on" ? cell.className = "off" : cell.className = "on";
}

function getCellId(cell) {
    var cellId = cell.getAttribute("id");
    var rowNumber = parseInt(cellId.charAt(0)); // cellId.charAt(1) upptas av ","
    var colNumber = parseInt(cellId.charAt(2));
    var cellIdArray = [rowNumber, colNumber];
    return switchAdjacentCells(cellIdArray);
}

function switchAdjacentCells(currentCellId){
    var aboveCellId = ((currentCellId[0] - 1) + "," + currentCellId[1]);
        if ((currentCellId[0] - 1) >= 0) {
            lightSwitch(document.getElementById(aboveCellId));
        }

    var rightCellId = (currentCellId[0] + "," + (currentCellId[1] + 1));
        if ((currentCellId[1] + 1) < width) {
           lightSwitch(document.getElementById(rightCellId));
        }

    var belowCellId = ((currentCellId[0] + 1) + "," + currentCellId[1]);
        if ((currentCellId[0] + 1) < height){
           lightSwitch(document.getElementById(belowCellId));
    }

    var leftCellId = (currentCellId[0] + "," + (currentCellId[1] - 1));
        if ((currentCellId[1] - 1) >= 0) {
            lightSwitch(document.getElementById(leftCellId));
    }
}
   function checkIfWon(){
       var sizeOfBoard = width * height;
       var lightsOff = document.getElementsByClassName("off");
       if(lightsOff.length == sizeOfBoard){
           var message = confirm("Congratulations! You switched off all the lights! \n Play again?");
           if(message){
               document.location.reload();
           }
       }
   }