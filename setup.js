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


// // creating all cells
//   for (var i = 0; i < 2; i++) {
//     // creates a table row
//     var row = document.createElement("tr");
 
//     for (var j = 0; j < 2; j++) {
//       // Create a <td> element and a text node, make the text
//       // node the contents of the <td>, and put the <td> at
//       // the end of the table row
//       var cell = document.createElement("td");
//       var cellText = document.createTextNode("cell in row "+i+", column "+j);
//       cell.appendChild(cellText);
//       row.appendChild(cell);
//     }
 
//     // add the row to the end of the table body
//     tblBody.appendChild(row);
//   }