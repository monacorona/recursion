// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  var result = [];	
  	getElementByClass = function (className){
  		if(!nodes){
  			var classList = nodes.classList;
  			if(nodes.length){
  				for(var i = 0; i < nodes.length; i++){
  					if(nodes[i].classList){
						getElementByClass(nodes[i])
					}
  				}
  			}
  			else {
  				if(classList){
  					result.push(nodes);
  				}
  				getElementByClass(nodes.childNodes);
  			}
  		}
  	}
  	getElementByClass(document.body);
  	return result;
};
