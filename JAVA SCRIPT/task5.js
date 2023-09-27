function validate() {
    var name = document.getElementById("inName").value;
    var email = document.getElementById("inEmail").value;
    var website = document.getElementById("inWebsite").value;
    var msg = document.getElementById("inMsg").value;

    var flag = true;

    if (name == "") {
        document.getElementById("errname").innerHTML = "This field is required";
        addRedName();
        flag = false;
    }
    if (email == "") {
        document.getElementById("erremail").innerHTML = "A valid Email is required";
        addRedEmail();
        flag = false;
    }
    if (email.indexOf("@") == -1) {
        document.getElementById("erremail").innerHTML = "A valid Email is invalid";
        addRedEmail();
        flag = false;
    }
    if (website == "") {
        document.getElementById("errwebsite").innerHTML = "A valid URL is required";
        addRedWebsite();
        flag = false;
    }
    if (website.indexOf(".") == -1) {
        document.getElementById("errwebsite").innerHTML = "A valid URL is invalid";
        addRedWebsite();
        flag = false;
    }
    if (msg == "") {
        document.getElementById("errmsg").innerHTML = "This field is required";
        addRedMsg();
        flag = false;
    }
    return flag;
}
function addRedName() {
    document.getElementById("inName").style.borderColor = "red";
}
function removeRedName() {
    document.getElementById("inName").style.borderColor = "black";
}
function addRedEmail() {
    document.getElementById("inEmail").style.borderColor = "red";
}
function removeRedEmail() {
    document.getElementById("inEmail").style.borderColor = "black";
}
function addRedWebsite() {
    document.getElementById("inWebsite").style.borderColor = "red";
}
function removeRedWebsite() {
    document.getElementById("inWebsite").style.borderColor = "black";
}
function addRedMsg() {
    document.getElementById("inMsg").style.borderColor = "red";
}
function removeRedMsg() {
    document.getElementById("inMsg").style.borderColor = "black";
}