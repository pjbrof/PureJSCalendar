window.onload = function(){
	init();
}

function init(){
	createTable();
}

function createTable(){
	var table = document.createElement('table');

	    var tr = document.createElement('tr'); 
	    	for (var i = 0; i < 7; i++){  
	    		var th = document.createElement('th');
	    		var weekday = new Array(7);
			    weekday[0] = "Sunday";
			    weekday[1] = "Monday";
			    weekday[2] = "Tuesday";
			    weekday[3] = "Wednesday";
			    weekday[4] = "Thursday";
			    weekday[5] = "Friday";
			    weekday[6] = "Saturday";

	    		var text = document.createTextNode(weekday[i]);

			    th.appendChild(text);
			    tr.appendChild(th);
	    	}
	    	for (var j = 0; j < 7; j++){
	    		var tr2 = document.createElement('tr');
	    		var td = document.createElement('td');
	    		tr2.appendChild(td);
	    	}

	    table.appendChild(tr);
	    table.appendChild(tr2);

	document.body.appendChild(table);
}