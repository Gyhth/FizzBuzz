$(function() {
	var fizzBuzz = new fizzBuzzClass();
	alert(fizzBuzz.calculate(1,16));
});

var fizzBuzzClass = function(){};

fizzBuzzClass.prototype = {
	calculate: function(start, end) {
		var output = "";
		for (var i = start; i <= end; i++) {
			var found = false;
			if (i%3 == 0) {
				found = true;
				output += "fizz";
			}
			if (i%5 == 0) {
				found = true;
				output += "buzz";
			}
			else {
				if (found != true) {
					output += i;
				}
			}
			if (i < end) {
				output += ","
			}
		}
		return output;
	},
};

