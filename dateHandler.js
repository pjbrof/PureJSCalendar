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

    // Month format full name
    var m = month[date.getMonth()];

    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    // Weekday format full name
    var w = weekday[date.getDay()];

    // Year format XXXX
    var y = date.getFullYear();

    dayofwk = new Date('1 ' + m + y);

    var q = dayofwk.getDay();

    /* 	
    	30 - September April June November 
    	28 - February 
    	Leap year every 4 years
    
    if (m == 'February') {
        var leap = (y /= 4); 
        if(leap % 1 === 0){
            limit = 29;
        }
        else{
        	limit = 28;
        }
    } else if (m == 'September' || m == 'April' || m == 'June' || m == 'November') {
        limit = 30;
    } else {
        limit = 31;
    }*/

    today = date.getDate();

    function getMonth(month, year){
        /*  
        30 - September April June November 
        28 - February 
        Leap year every 4 years
        */
        if (month == 'February') {
            var leap = (year /= 4); 
            if(leap % 1 === 0){
                limit = 29;
            }
            else{
                limit = 28;
            }
        } else if (month == 'September' || month == 'April' || month == 'June' || month == 'November') {
            limit = 30;
        } else {
            limit = 31;
        }
    }