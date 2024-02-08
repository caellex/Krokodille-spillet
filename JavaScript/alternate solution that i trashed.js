
let showResult =  Math.floor(Math.random() * 100+1);
let showResult2 =  Math.floor(Math.random() * 100+1);
const reloadResult = showResult + " er ditt tilfeldige nummer.";
let inputBox = document.getElementById("answer").value;

// Første Math.random tall - Kjører math.random og outputter et tall mellom 1-100 til div#mathRDisplay
showMathRandom();
function showMathRandom() {
    document.getElementById('mathRDisplay').innerHTML = /*HTML*/`
${showResult} er ditt tilfeldige nummer.
`
}
function reloadMathRandom(){
Math.floor(Math.random() * 100+1);
showResult = Math.floor(Math.random(1, 30) * 100+1);
showMathRandom();
}
// Andre Math.random tall - gjør akkurat det samme som over, bare for div#mathRDisplay
showMathRandom2();
function showMathRandom2() {
    document.getElementById('mathRDisplay2').innerHTML = /*HTML*/`
${showResult2} er ditt tilfeldige nummer.
`
}
function reloadMathRandom2(){
Math.floor(Math.random() * 100+1);
showResult2 = Math.floor(Math.random() * 100+1);
showMathRandom2();
}
