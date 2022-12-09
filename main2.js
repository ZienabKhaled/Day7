var months = ["January ", "February" ,"March","April", "May", "June", "July", "August","September", "October", "November", "December"];
var week = ["Sunday","Monday","Tuseday", "Wednesday","Thursday", "Friday","Saturday"];

function displayTime () {
    console.log("here");
    let now = new Date(),
     dname = now.getDay(),
     mo = now.getMonth(),
     dnum = now.getDate(),
     yr = now.getFullYear(),
     hou = now.getHours(),
     min = now.getMinutes(),
     sec = now.getSeconds(),
     pe= "AM";
    if (hou==0){
        hou=12;
    }
    if(hou>12){
        hou=hou-12;
        let pe= "PM";
    }
    
    document.getElementById("dayname").textContent= week[dname];
    document.getElementById("month").textContent=months[mo];
    document.getElementById("daynumber").textContent= dnum;
    document.getElementById("year").textContent= yr;
    document.getElementById("hour").textContent= hou;
    document.getElementById("min").textContent= min;
    document.getElementById("seconds").textContent= sec;
    document.getElementById("period").textContent= pe;
}
    setInterval(displayTime,1000);

    ////Alarm////
    const hours = document.querySelector("#hours");
const mins = document.querySelector("#minutes");
const secs = document.querySelector("#seconds");
const setTime = document.querySelector("#setTime");
const stopButton = document.querySelector("#stopAlarm");
const audio = new Audio('/old-fashioned-school-bell.mp3');
let alarmTime = [];

function alarmSet() {
    const timeArr = setTime.value.split(":");
    alarmTime.splice(0, alarmTime.length);
    alarmTime.push(timeArr[0], timeArr[1]); 
    alarmNotice.innerHTML = `<i class="far fa-bell"></i><span>${setTime.value}</span>`;
    document.body.appendChild(alarmTime);  
}

function alarmStop() {
    audio.pause();
    audio.currentTime = 0;
    stopButton.style.visibility = "hidden"; 
    alarmTime.innerHTML = ` `;
}