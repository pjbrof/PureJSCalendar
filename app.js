window.onload = function(){

    // Code for days and months to be moved into seperate js file. Will leave stable code up and running until testing is confirmed.
    d = new Date();

    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    var n = month[d.getMonth()];

    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var w = weekday[d.getDay()];

    var y = d.getFullYear();

    document.getElementById("month").innerHTML = n;
    document.getElementById("year").innerHTML = y;

    dayofwk = new Date('1 ' + n + y);

    var q = dayofwk.getDay();

    /* 	
    	30 - September April June November 
    	28 - February 
    	Leap year every 4 years
    */
    if (n == 'February') {
        var leap = (y /= 4); 
        if(leap % 1 === 0){
            limit = 29;
        }
        else{
        	limit = 28;
        }
    } else if (n == 'September' || n == 'April' || n == 'June' || n == 'November') {
        limit = 30;
    } else {
        limit = 31;
    }

    for (i = 1; i <= limit; i++) {
        j = q + i;
        document.getElementById(j).innerHTML = [i];
    }
    
    //TODO (difficult): Show the dates for the next and previous month in a light gray numbering
    if(j <= 35){
        document.getElementById('lastrow').style.display = "none";
    }

    today = d.getDate();
    document.getElementById(today).style.backgroundColor = "lightgray";
}

function changeMonth(){

    var x = document.getElementById("mon").value;
    document.getElementById("month").innerHTML = x;

    var y = d.getFullYear();

    dayofwk = new Date('1 ' + x + y);

    var q = dayofwk.getDay();

    /*  
        30 - September April June November 
        28 - February 
        Leap year every 4 years
    */
    if (x == 'February') {
        var leap = (y /= 4); 
        if(leap % 1 === 0){
            limit = 29;
        }
        else{
            limit = 28;
        }
    } else if (x == 'September' || x == 'April' || x == 'June' || x == 'November') {
        limit = 30;
    } else {
        limit = 31;
    }

    for(z = 1; z <= 37; z++){
        document.getElementById(z).innerHTML = null;
    }

    for (i = 1; i <= limit; i++) {
        j = q + i;
        document.getElementById(j).innerHTML = [i];
    }

    //TODO (difficult): Show the dates for the next and previous month in a light gray numbering
    if(j <= 35){
        document.getElementById('lastrow').style.display = "none";
    }
    else{
        document.getElementById('lastrow').style.display = "table-row";
    }

    var monh = new Array();
    monh[0] = "January";
    monh[1] = "February";
    monh[2] = "March";
    monh[3] = "April";
    monh[4] = "May";
    monh[5] = "June";
    monh[6] = "July";
    monh[7] = "August";
    monh[8] = "September";
    monh[9] = "October";
    monh[10] = "November";
    monh[11] = "December";

    var t = monh[d.getMonth()];

    today = d.getDate();
    if(t == x){
        document.getElementById(today).style.backgroundColor = "lightgray";
    }
    else{
        document.getElementById(today).style.backgroundColor = "white";
    }
}

function changeYear(){

    var p = document.getElementById("mon").value;
    document.getElementById("month").innerHTML = p;

    var x = document.getElementById("yr").value;
    document.getElementById("year").innerHTML = x;

    var y = d.getFullYear();

    dayofwk = new Date('1 ' + p + x);

    var q = dayofwk.getDay();

    /*  
        30 - September April June November 
        28 - February 
        Leap year every 4 years
    */
    if (p == 'February') {
        var leap = (x /= 4); 
        if(leap % 1 === 0){
            limit = 29;
        }
        else{
            limit = 28;
        }
    } else if (p == 'September' || p == 'April' || p == 'June' || p == 'November') {
        limit = 30;
    } else {
        limit = 31;
    }

    for(z = 1; z <= 37; z++){
        document.getElementById(z).innerHTML = null;
    }

    for (i = 1; i <= limit; i++) {
        j = q + i;
        document.getElementById(j).innerHTML = [i];
    }

    //TODO (difficult): Show the dates for the next and previous month in a light gray numbering
    if(j <= 35){
        document.getElementById('lastrow').style.display = "none";
    }
    else{
        document.getElementById('lastrow').style.display = "table-row";
    }

    var monh = new Array();
    monh[0] = "January";
    monh[1] = "February";
    monh[2] = "March";
    monh[3] = "April";
    monh[4] = "May";
    monh[5] = "June";
    monh[6] = "July";
    monh[7] = "August";
    monh[8] = "September";
    monh[9] = "October";
    monh[10] = "November";
    monh[11] = "December";

    var t = monh[d.getMonth()];

    today = d.getDate();
    if(t == p && x == y){
        document.getElementById(today).style.backgroundColor = "lightgray";
    }
    else{
        document.getElementById(today).style.backgroundColor = "white";
    }
}