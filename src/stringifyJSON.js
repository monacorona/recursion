// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	var jKeys = Object.keys(obj);
	var keyVals = new Array();
	for(var i = 0; i < jKeys.length; i++) {
		var keyStr = "''" + jKeys[i] + "':'";
		var objVal = obj[jKeys[i]];
	}
	if(keyStr = typeof objVal && typeof objVal === "string"){
		keyStr=keyStr+ "''" + objVal + "''";
	} else {
		//invoke itself
		keyStr = keyVals + stringifyJSON(objVal);
	}
	return "{" + keyVals.join(",") + "}";
}

  // if(Array.isArray(obj)) {
  // 	var str = "";
  // 	var length = obj.length;
  // 	for(var i = 0; i < length; i++){
  // 		str=str.concat(stringifyJSON(obj[i])+',');

  // 	}
  // }
//};
