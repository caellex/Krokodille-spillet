let numberOne = 0;
let numberTwo = 0;
let answerMath = "";
let points = 0;


updateMath();

function updateMath(){
numberOne = getMath();
numberTwo = getMath();
document.getElementById('mathRDisplay').innerHTML = numberOne;
document.getElementById('mathRDisplay2').innerHTML = numberTwo;
document.getElementById('Response').innerHTML = /*HTML*/`
        Points: ${points}`
        failGame();
}



function getMath(){
    return Math.floor(Math.random() * 100+1)

}

function updateAnswerMath() {
    answerMath = document.getElementById("answer").value;
}

function checkMathCorrect(){
    updateAnswerMath();
 
    if(numberOne >= numberTwo && answerMath === ">" || numberOne <= numberTwo && answerMath === "<"){
        points++;
        updateMath();
    } else {
        points--;
        updateMath();
        
        
    }
}

function failGame(){
    if(points <= -1){
    document.getElementById('mainContainer').innerHTML = /*HTML*/`
    <div style="margin: auto auto auto; border: solid black 2px; height: 100px; width: 100px;"> You failed! Please refresh the page to try again. </div>

    `
    }

}