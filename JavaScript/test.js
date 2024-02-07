let numberOne = 0;
let numberTwo = 0;


updateMath();
function updateMath(){
numberOne = getMath();
numberTwo = getMath();
document.getElementById('mathRDisplay').innerHTML = numberOne;
document.getElementById('mathRDisplay2').innerHTML = numberTwo;

}

function getMath(){
return Math.floor(Math.random() * 100+1)
}