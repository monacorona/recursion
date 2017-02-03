// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:



function parseJSON(json){

//current index

var currentIndex;
var currentChar;

var next = function() {
	//increments by and updates character
	currentIndex += 1;
	currentChar = json.charAt(currentIndex);
};

var error = function(message) {
	//throws error if syntax is gross
	console.log(message);
	throw undefined;
};

//current character in index
// switch statement deciding thich function to call for parsing the following text

var value = function () {
	switch(currentIndex) {
		case "{":
			return object();
		case "[":
			return array();
		case "\'":
			return string();
		case "t":
		case "f":
			return bool();
		case "n":
			return nully;
		default:
			if(currentChar === "-" || (currentChar && currentChar >= 0 && currentChar <= 9)) {
					return number();
			} else {
				error("bad JSON")
			}
			break;
	}
};

// null value case

var nully = function() {
	var nully = "";
	if(currentChar === "n"){
		_.times(4, function() {
			nully += currentChar;
			next();
		});
		if(nully === "null") {
			return null;
		} else {
			error("bad null");
		}
	}
	error("bad null");
};


// bool value case
var bool = function(){
//similar to nully function
var bool = "";
if(currentChar === "t") {
	_.times(4, function() {
		bool += currentChar;
		next();
	});
if(bool === "true") {
	return true;
} else {
	error("bad bool")
}
} else if(currentChar === "f") {
	_.times(5, function() {
		bool += currentChar;
		next();
	});
	if(bool === "false") {
		return false;
	} else {
		error("bad to the bool")
	}
}

error("bad blood") // hehe
}

// number value case
var number = function() {
	//if currentChar has a negative sign or 0-9 digit, create the number and return it
	var number = "";
	function getDigits() {
		while(currentChar && currentChar >= 0 && currentChar <= 9) {
			number += currentChar;
			next();
		}
	}
	// gets negative sign
	if(currentChar === '-') {
		number += currentChar;
		next();
	}

	getDigits();
	//gets decimal point
	if(currentChar === ".") {
		number += currentChar;
		next();
		getDigits();
	}
	// gets exponent
	if(currentChar === "e" || currentChar === "E") {
		number += currentChar;
		next();
		// gets sign of exponent
		if(currentChar === "-" || currentChar === "+") {
			number += currentChar;
			next();
		}
		getDigits(); //exponent
	}
	if(!isNan(Number(number))) {
		return Number(number);
	} else {
		error("bad number")
	}
};


// string value case

var escapes = {
	"b": "\b",
	"n": "\n",
	"t": "\t",
	"r": "\r",
	"f": "\f",
	"\'": "\'",
	"\\": "\\",
};

var string = function() {
	// currentChar is at opening quote
	var string = "";
	if(ch !== "\'") error ("string should begin with \'");
	next();
	while(currentChar) {
		// watch for string end
		if(currentChar === "\'") {
			next();
			return string;
		}
		// watches for escapes
		if(currentChar === "\\") {
			next();
			if(escapes.hasOwnProperty(currentChar)) {
				string += escapes[currentChar];
			} else {
				// if not / or " it will add character to the string
				string += currentChar;
			} 
		} else {
			string += currentChar;
		}
		next();
	}
	// reached end without closing quotation results in error
	error("bad string");
}

// array value case

var array = function() {
	// currentChar is at the opening bracket
	var array = [];
	if(currentChar !== "[") error("array should start with [");
	if(next() === "]") return array; // empty array

	do {
		array.push(value());
		if(currentChar === "]") { // array end reached
			next();
			return array;
		}
	} while (currentChar && currentChar === "," && next()); // finds comma and knows there are following elements
	error("bad array");
};

// object value case

var object = function () {
	var object = {};
	if(currentChar !== "{") error("object should start with {");
	if(next() === "}") return object; // empty object

	do {
		var key = string();
		if(currentChar !== ":") error("object property expecting ':' ");
		next();
		object[key] = value();
		if(currentChar === "}") {
			next();
			return object;
		}
	} while(currentChar && currentChar === "," && next()); // found a comma and knows there are properties to follow

	error("bad object");
}



currentIndex = 0;
currentChar = json.charAt(currentIndex);
return value();

}