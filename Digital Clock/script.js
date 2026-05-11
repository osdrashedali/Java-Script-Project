function myTime(){
    var myDate = new Date();
    var hour,min = (myDate.getMinutes() < 10)? "0" + myDate.getMinutes() : myDate.getMinutes(),
    sec = (myDate.getSeconds()<10)? "0" + myDate.getSeconds() : myDate.getSeconds(),
    M = (myDate.getHours()>=12)? "PM":"AM";

    if(myDate.getHours()==0){
        hour = 12;
    }else if(myDate.getHours()>12){
        hour = myDate.getHours() -12;
    }
    else{
       hour = myDate.getHours();
    }
    var currentTime = hour + ":"+min +":"+sec;

    document.getElementsByClassName("H")[0].innerHTML = currentTime;
    document.getElementsByClassName("M")[0].innerHTML = M;
    
    var myDay =["Sunday","Monday","TuesDay","Wednesday","Thursday","Friday","Saturday"],
     myMonth =["January","February","March","April","May","June","July","August","September","October","November","December"],

     day = myDate.getDate();

     var currentDate = myDay[myDate.getDay()] + "," + day +" "+ myMonth[myDate.getMonth()] ;
     document.getElementsByClassName("date")[0].innerHTML = currentDate;
}

    myTime();
    setInterval(function(){
        myTime();
    },1000);


