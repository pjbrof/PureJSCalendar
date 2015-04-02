var weekday = [];
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";


function tableCreate(){
    var body = document.body;
        tbl  = document.createElement('table');
        
        var header = tbl.createTHead();
        var hrow = header.insertRow();
    for(var i = 0; i < 7; i++){
        var cell = hrow.insertCell();
        cell.innerHTML = weekday[i];
    }
    for(var k = 0; k < 6; k++){    //HEIGHT
        var tr = tbl.insertRow();
        for(var j = 0; j < 7; j++){    //WIDTH
            var td = tr.insertCell();
            td.appendChild(document.createTextNode(" "));
        }
    }
    body.appendChild(tbl);
}

window.onload = function(){
    tableCreate();
}