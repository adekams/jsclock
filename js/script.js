var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"]
function myClock() {
    //get current date and from it, extract current hour, current minute and current second
    var date = new Date();
    var hr = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var period = '';
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();   

    //if hr less than 10, hr = 0 + hr, if not, hr = hr
    hr = (hr < 10) ? ('0' + hr) :  hr
    min = (min < 10) ? ('0' + min) :  min
    sec = (sec < 10) ? ('0' + sec) :  sec
    period = (hr < 12) ? "A.M" : "P.M"
    day = (day < 10) ? ('0' + day) :  day
    month = (month < 10) ? ('0' + month) :  month

    //set backgrounds for different time of the day
    if(hr < 7 || hr >= 20){
        document.body.classList.add("dark")
        //document.body.classList.remove("evening")
        document.getElementById("circle").classList.add("moon")
        document.getElementById("circle").classList.remove("sun")    
    }
    else if(hr >= 18 && hr < 20){
        document.body.classList.add("evening")
        document.getElementById("circle").classList.add("sun")
    }
    else{
        document.body.classList.remove("dark")
        //document.getElementById("circle").classList.remove("moon")
        document.getElementById("circle").classList.add("sun")    
    }

    document.getElementById("period").innerHTML = period;    
    var currentTime = hr +" : " + min + " : " + sec;
    var currentDate = dayNames[date.getDay()] +", "+ day + "-" + month + "-" + year 
    document.getElementById("jsClock").innerHTML = currentTime
    document.getElementById("jsDay").innerHTML = currentDate        
    //set timer to update clock every 1s
    var timeout = setTimeout(() => {
        myClock()
    }, 1000);    
}

myClock()