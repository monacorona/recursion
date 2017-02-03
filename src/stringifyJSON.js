// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj){

	// null value case
	if(obj === null) {
		return "null";
	}

	// if the object is not able to be strung || stringified || whatever the right adjective is
	// so either a function or undefined

	if(obj === undefined || obj.constructor === Function) {
		return; // awkward return statement is awkward
	}

	// string value case
	if (obj.constructor === String) {
		return '"' + obj + '"';
	}

	// do you say array value or do you say an array of values?  + " case"
	if(obj.constructor === Array) {
		if(obj.length) {
			var partial = [];

			for (var i = 0; i < obj.length; i++) {
				//this is where the magic happens
				//aka recursion
				//what do you think i meant????
				partial.push(stringifyJSON(obj[i]));
			}

			return "[" + partial.join(",") + "]";
		} else {
			return "[]";
		}
	}

	// object value case...but not keys? so i guess this fixes my earlier question about arrays
	//in case of objects
	//in case of fire: https://ih0.redbubble.net/image.190714989.1973/sticker,375x360.png

	//i might like this one more though: https://www.spreadshirt.de/image-server/v1/designs/128333119,width=178,height=178/in-case-of-fire-git-out.png

	//OH MY GOSH THEY MAKE A TSHIRT WITH THAT
	//totally buying it
	//...after i'm done with precourse ofc

	if (obj.constructor === Object) {
		var keys = Object.keys(obj);
		if(keys.length) {
			var partial = "";

			for (var i = 0; i < keys.length; i++) {
				var key = keys[i];

				if (!key || obj[key] === undefined || typeof key === "function" || typeof obj[key] === "function") {
						// i have nothing to tell you
				} else {
					if(i === keys.length - 1) { //GOD FORBID YOU FORGET THAT "-1"
						//more magic ~ ~ ~ ~
						partial += stringifyJSON(key) + ":" + stringifyJSON(obj[key]);
					} else {
						partial += stringifyJSON(key) + ":" + stringifyJSON(obj[key]) + ",";
					}
					} // so many curlies
				} // sooooo many
			return "{" + partial + "}";
		} else {
			return "{}";
		}
	}

	// everyone else is not important
	return obj.toString();
};

