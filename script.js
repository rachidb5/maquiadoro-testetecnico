const hour = document.getElementById('hora')



function startTime()
{
let today=new Date();
let h=today.getHours();
let m=today.getMinutes();

if(m < 10){
    m="0" + m
}
hour.innerHTML=`${h}:${m}`;
t=setTimeout('startTime()',500);
}


startTime()