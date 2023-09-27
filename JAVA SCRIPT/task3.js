function press1() {
    let a = document.getElementById('typeInput1').value;
    let b = document.getElementById('typeInput2').value;
    document.getElementById("answer").innerHTML = a * b;
}
function press2() {
    let a = document.getElementById('typeInput1').value;
    let b = document.getElementById('typeInput2').value;
    document.getElementById("answer").innerHTML = a / b;
}