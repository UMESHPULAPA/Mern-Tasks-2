function showDate() {
    let date = new Date()
    const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    let d = date.getDate()
    let m = months[date.getMonth()]
    let y = date.getFullYear()
    let res = d + '/' + m + '/' + y 
    document.getElementById("outputDate").innerHTML = res
}

function showTime() {
    let date = new Date()
    document.getElementById("outputTime").innerHTML = date.toString()
}