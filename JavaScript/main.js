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
    }

    document.getElementById("answer").value = "";
    updateMath();
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        checkMathCorrect(); 
    }
}

function failGame(){
    if(points <= -1){
    document.getElementById('gameContainer').innerHTML = /*HTML*/`
    `
    document.getElementById('mainContainer').innerHTML = /*HTML*/`
    <div style="margin: auto auto auto; border: solid black 2px; height: 150px; width: 150px; text-align: center; padding: 5px;"> You failed! Please press CTRL+R to refresh your page and restart. </div>
    <br><img src="rip.png" width="50px" height="50px" class="center"/>
    `
    }

}