
var checkEnptyInput = function(){
	this.isEnpty = function(className){
		var inputs = document.getElementsByClassName(className);
		var inputsLength = document.getElementsByClassName(className).length;
		for(let i = 0; i < inputsLength; i ++){
			if(inputs[i].value == ''){
				var b = '没有完成填写';
				inputs[i].className += ' error-input';
			}else{
				//去掉error-input，并且保持原有class
				inputs[i].className = inputs[i].className.replace( /(?:^|\s)error-input(?!\S)/g , '' );
			}
		}
	};
};

var checkPsd = function(){
	this.legalPsd = function(psdId){
		var psdInput = document.getElementById(psdId);
		var psdLength = psdInput.value.length;
		if(!(psdLength >= 6 && psdLength <= 12)){
			psdInput.className += ' error-input';
			alert('密码长度应该在6-12之间');
		}else{
			psdInput.className = psdInput.className.replace( /(?:^|\s)error-input(?!\S)/g , '' );
		}

	};
};

checkPsd.prototype = new checkEnptyInput();
var checkPsd = new checkPsd();

var getPerson = function(){
	return {
		init : function (className, psdId){
			checkPsd.isEnpty(className);
			checkPsd.legalPsd(psdId);
		},
	};
}();
