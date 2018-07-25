window.onload = function () {

	/* Key
	m = month
	w = weekday
	y = year
	d = day
	*/

	var date = new Date();

	var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var years = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];
  var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	// Month format full name
	var m = month[date.getMonth()];

	// Weekday format full name
	var w = weekday[date.getDay()];

	// Year format XXXX
	var y = date.getFullYear();

	var today = date.getDate();

	var dayofwk = new Date('1 ' + m + y);

	var q = dayofwk.getDay();

	function getDaysInMonth(month, year) {
		var days;
		if (month == 'February') {
		  var leap = (year /= 4);
		  if (leap % 1 === 0) {
		    days = 29;
		  } else {
		    days = 28;
		  }
		} else if (month == 'September' || month == 'April' || month == 'June' || month == 'November') {
		  days = 30;
		} else {
		  days = 31;
		}
		return days;
	}
}
