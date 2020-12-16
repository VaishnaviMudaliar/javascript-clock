var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;

//getting it to show the current time on the page

var showCurrentTime = function()
{
    //display the string on the webpage

    var clock = document.getElementById('clock');
    var currentTime = new DataCue();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    //set hours
    if(hourse>=noon){
        meridian = "PM";

    }

    if(hours > noon){
        hours = hours - 12;

    }

    //set minutes

    if(minutes<10){
        minutes = "0" + minutes;
    }

    //set seconds

    if(seconds<10){
        seconds = "0" + seconds;
    }



    //putting together the string that displays the time

    var clockTime = hours + '!' + minutes + ':' + seconds + "" + meridian + "!";
};


//getting the clock to update the time on its own and change messages and pictures

var updateClock = function(){

    var time = new Data().getHours();
    var messageText ;
    var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

    var timeEvent = document.getElementById("timeevent");
    var lolctimage = document.getElementById("lolcatimage");


    if(time == partytime){

        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
        messageText = "Let's Party!";

    }

    else if(time == wakeuptime){
         image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg"
        messageText = "Wake Up!"
  
    }

    else if(time == lunchtime){

        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
        messageText = "Let's have lunch!";
    }

    else if (time == naptime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
        messageText = "Sleep Tight!";

        
    }

    else if (time < noon) {
        image = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
        messageText = "Good Morning";
    }

    else if (time >= evening) {
        image = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
        messageText = "Good Evening"
    }

    else{
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
        messageText = "Good afternoon";

    }

    console.log(messageText);
    timeEvent.innerText = messageText;
    lolctimage.src = image;
    showCurrentTime();


};

updateClock();


//getting the clock to increment once a second

var oneSecond = 1000;
setInterval(updateClock,oneSecond);

//getting the partytime to work

var partytimeButton = document.getElementById("Party_time_button")

var partyEvent = function () {
    
    if (partytime < 0) {
        partytime = new Data().getHours();
        partytimeButton.innerText = "Party Over!";
      
        partytimeButton.style.backgroundColor = "#0A8DAB";
        
    }
    else{

        partytime = -1;
        partytimeButton.innerText = "Party Time!";
        partytimeButton.style.backgroundColor = "#222";

    }
};

partytimeButton.addEventListener("click" , partyEvent);
partyEvent();

//activates wakeup selector

var wakeuptimeselector =  document.getElementById("wakeup_time_selector");

var wakeupEvent  = function () {
    
    wakeuptime = wakeuptimeselector.nodeValue;

};

wakeuptimeselector.addEventListener("change",wakeupEvent);

//activate lunch selector

var lunchtimeselector =  document.getElementById("lunch_time_selector");

var lunchEvent  = function () {
    
    lunchtime = lunchtimeselector.nodeValue;

};

lunchtimeselector.addEventListener("change",lunchEvent);


//activate lunch selector

var naptimeselector =  document.getElementById("nap_time_selector");

var napEvent  = function () {
    
    naptime = naptimeselector.nodeValue;

};

naptimeselector.addEventListener("change",napEvent);


