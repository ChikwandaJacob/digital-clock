
window.onload = function(){setTime();}
function setTime(){
    /*Variables*/
    let today = new Date();
    let hour = document.querySelector(".hour");
    let minute = document.querySelector(".minute");
    let second = document.querySelector(".second");
    let date = document.querySelector(".date");
    let present_hour = today.getHours();
    let present_minute = today.getMinutes();
    let present_seconds = today.getSeconds();
    let present_date = today.toDateString();
    /*Check Time*/
    present_hour = checkTime(present_hour);
    present_minute = checkTime(present_minute);
    present_seconds = checkTime(present_seconds);
    hour.innerHTML = present_hour;
    minute.innerHTML = present_minute;
    second.innerHTML = present_seconds;
    date.innerHTML = present_date;
    setTimeout(function(){setTime();}, 1000);
}
function checkTime(value){ 
    if(value<10){
        value = "0"+value;
    }
    return value;
}