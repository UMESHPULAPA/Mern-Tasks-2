function press() {
    let a = document.getElementById('typeInput').value;
    function sortString(a) {
        return a.split('').sort().join('');
    }
    document.getElementById("answer").innerHTML = sortString(a);
}