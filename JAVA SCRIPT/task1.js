document.getElementById('check').addEventListener('click', () => {
    let a = document.getElementById('inputUser').value;

    const reverse = (a) => parseInt(String(a)
        .split("")
        .reverse()
        .join(""), 10);
    document.getElementById('result').innerHTML = reverse(a);
});