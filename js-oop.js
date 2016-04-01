var things = ['asd','qwe','zxc','aaa'];
var person = function(){
	this.sayHello = function(name){
		console.log('hello '+name);
	};
	this.doSomethings = function(things){
		console.log('I can do '+things);
	};
};

var student = function(){
	this.goToSchool = function(name){
		console.log(name+' go to school')
	};
};

student.prototype = new person();
var student = new student();

var getPerson = function(){
	return {
		init : function (){
			var inputs = document.getElementsByClassName('test');
			var inputsLength = document.getElementsByClassName('test').length;
			for(let i = 0; i < inputsLength; i ++){
				if(inputs[i].value == ''){
					var b = '没有完成填写';
					inputs[i].className += ' error-input';
				}else{
					inputs[i].className = 'test';
				}
			}
			student.sayHello(b);
			//student.doSomethings(thing);
		},
	};
}();
