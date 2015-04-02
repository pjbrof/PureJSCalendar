window.onload = function(){
	init();
}

function init(){
	createTable();
}

function createTable(){
	var table = document.createElement('table');
		
			var row1 = document.createElement('tr');
			var row2 = document.createElement('tr');

	    	for (var i = 0; i < 7; i++){  
	    		var th = document.createElement('th');
	    		var weekday = [];
			    weekday[0] = "Sunday";
			    weekday[1] = "Monday";
			    weekday[2] = "Tuesday";
			    weekday[3] = "Wednesday";
			    weekday[4] = "Thursday";
			    weekday[5] = "Friday";
			    weekday[6] = "Saturday";

	    		var text = document.createTextNode(weekday[i]);

			    th.appendChild(text);
			    row1.appendChild(th);
	    	}
	    
	    	
		    	for (var j = 0; j < 7; j++){
		    		
		    	 	var td = document.createElement('td');
		    	 	
		    	 	row2.appendChild(td);
		    	}

	    	table.appendChild(row1);
	    	table.appendChild(row2);
			
	document.body.appendChild(table);
}


