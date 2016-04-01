var person = function(){
	return {
		sayHello : function(name){
			console.log('hello, ' + name);
		},
		doSomethings : function(things){
			console.log('I can do'+ things)
		},
	};
}();