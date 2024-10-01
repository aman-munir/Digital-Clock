var hours=document.getElementById("hr");
var minutes=document.getElementById("min");
var seconds=document.getElementById("sec");
var PA_m=document.getElementById("PmAm");
var month=document.getElementById("month")
var day=document.getElementById("day")
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
var date=document.getElementById("date")
setInterval(()=>{
var time= new Date();
var count=12;
if(time.getHours()>12){
    hours.innerText=time.getHours()-count;
    count++
}
minutes.innerText=time.getMinutes();
seconds.innerText=time.getSeconds();
month.innerText=months[time.getMonth()];
day.innerText=days[time.getDay()];
date.innerText=time.getDate();
if(time.getDate()<24 && time.getDate()<12){
    PA_m.innerText="AM";
}
else{
    PA_m.innerText="PM";
}
},1000)