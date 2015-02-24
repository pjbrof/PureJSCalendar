	/* Key 

	m = month
	w = weekday
	y = year
	d = day

	*/

	date = new Date();

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

    var m = month[date.getMonth()];

    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var w = weekday[date.getDay()];

    var y = date.getFullYear();

    var q = dayofwk.getDay();

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