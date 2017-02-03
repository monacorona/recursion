// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:(function(){


var getElementsByClassName = function(className) {
	var result = [];
	function inspectElement(element, result) {
		var children = element.children;
		var index = element.className.split(" ");
		//splitting into an array
		if(index.indexOf(className) >= 0) {
			result.push(element);
		}
		for (var i = 0; i < children.length; i++) {
			inspectElement(children[i], result);
			//uses recursion to check for nested elements to be extracted
		}
	}
	//base case mace trace lace grace face vase race pace ace 
	inspectElement(document.body, result);
	return result;
}