var username;
var userresult;

username = prompt("お名前を教えてください。");
if(username == ""){
    username = "名無し";
}
document.getElementById("name").innerHTML = username;

var rand = Math.floor( Math.random() * 5); //Math.floorは小数点以下切り捨て、randomは0以上1未満のランダムな値
if (rand == 0) {
    userresult = "大吉";
}
if (rand == 1) {
    userresult = "中吉";
}
if (rand == 2) {
    userresult = "小吉";
}
if (rand == 3) {
    userresult = "吉";
}
if (rand == 4) {
    userresult = "凶";
}
document.getElementById("result").innerHTML = userresult;