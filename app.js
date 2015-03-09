window.onload = function(){

    for (i = 1; i <= limit; i++) {
        j = q + i;
        document.getElementById(j).innerHTML = [i];
    }

    document.getElementById("month").innerHTML = m;
    document.getElementById("year").innerHTML = y;

    //TODO (difficult): Show the dates for the next and previous month in a light gray numbering
    if(j <= 35){
        document.getElementById('lastrow').style.display = "none";
    }
    
    document.getElementById(today).style.backgroundColor = "lightgray";
}

function changeMonth(){

    /*var x = document.getElementById("mon").value;
    document.getElementById("month").innerHTML = x;

    var y = d.getFullYear();

    dayofwk = new Date('1 ' + x + y);

    var q = dayofwk.getDay();

    /*  
        30 - September April June November 
        28 - February 
        Leap year every 4 years
    
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
    }*/
}

function changeYear(){

    /*var p = document.getElementById("mon").value;
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
    }*/
}