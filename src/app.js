window.onload = function() {

  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var years = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];
  var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  var changeMonth = document.createElement("select");
  changeMonth.setAttribute("id", "changeMonth");
  document.querySelector(".purejscalendar").appendChild(changeMonth);

  months.forEach(function (value, index) {
    var monthOption = document.createElement("option");
    var monthValue = document.createTextNode(value);
    monthOption.appendChild(monthValue);
    document.getElementById("changeMonth").appendChild(monthOption);
  });

  var changeYear = document.createElement("select");
  changeYear.setAttribute("id", "changeYear");
  document.querySelector(".purejscalendar").appendChild(changeYear);

  years.forEach(function (value, index) {
    var yearOption = document.createElement("option");
    var yearValue = document.createTextNode(value);
    yearOption.appendChild(yearValue);
    document.getElementById("changeYear").appendChild(yearOption);
  });

  var MAX_ROWS = 6;
  var MAX_COLS = 7;
  for(var i = 0; i <= MAX_ROWS; i++) {
    weekday.forEach(function () {
      var cell = document.createElement("div");
      document.querySelector(".purejscalendar").appendChild(cell);
    });
  }

  document.getElementById('changeMonth').onchange = function () {
    console.log('Changed Month');
  };

  document.getElementById('changeYear').onchange = function () {
    console.log('Changed Year');
  };

  /*for(var i = 0; i < 7; i++){
      var cell = hrow.insertCell();
      cell.innerHTML = weekday[i];
  }
  for(var k = 0; k < 6; k++){    //HEIGHT
      var tr = tbl.insertRow();
      for(var j = 0; j < 7; j++){    //WIDTH
          var td = tr.insertCell();
          td.appendChild(document.createTextNode(" "));
      }
  }*/
};
