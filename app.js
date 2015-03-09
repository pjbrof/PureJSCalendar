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

    document.getElementById(today).parentNode.style.backgroundColor = "lightgray";
}

function changeMonth(){

    var x = document.getElementById("mon").value;
    document.getElementById("month").innerHTML = x;

    dayofwk = new Date('1 ' + x + y);

    var q = dayofwk.getDay();
    
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

    if(m == x){
        document.getElementById(today).parentNode.style.backgroundColor = "lightgray";
    }
    else{
        document.getElementById(today).parentNode.style.backgroundColor = "white";
    }
}

function changeYear(){

    var p = document.getElementById("mon").value;
    document.getElementById("month").innerHTML = p;

    var x = document.getElementById("yr").value;
    document.getElementById("year").innerHTML = x;

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

    if(m == p && x == y){
        document.getElementById(today).parentNode.style.backgroundColor = "lightgray";
    }
    else{
        document.getElementById(today).parentNode.style.backgroundColor = "white";
    }
}