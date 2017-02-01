// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  String.prototype.repeat = function(x) {
  	result = "";
  	for (var i = 0; i < n; i++) result += this;
  		return result;
  }

  this.parseArray = function(){
  	this.parseObj();
  };

  this.parseString = function() {

  }

  this.parseNum = function() {

  }

  function jFormat(){
  	this.reset = function(){
  		this.txt = "";
  		this.pos = 0;
  		this.result = 0;
  		this.indent = 0;
  		this.classes = Array();
  	};

  	this.undoIndent = function() {
  		this.indent -= 4;
  		this.nline();
  	};

  	this.doIndent = funtion(){
  		this.indent += 4;
  		this.nline();
  	};

  	this.chClass = function(n){
  		if(this.classes.length > 0) this.result += "</span>";
  		this.result += 
  	}

  	var parser = new jFormat();
  }
};
