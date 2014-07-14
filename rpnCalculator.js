function Calculator() {
    var total = 0;
    var stack = "";

    this.value = function(){
    	return total;
    };
    this.push = function(number) {
		stack = stack + number;
	};
	this.plus = function() {
		var first = stack.pop();
		var second = stack.pop();
		var next = first + second;
		stack.push(next);
		//pop two elements from stack
		//add them together
		//push result back
	};
	this.minus = function() {
		var first = stack.pop();
		var second = stack.pop();
		var next = first - second;
		stack.push(next);
		//pop two elements from stack
		//subtract one from the other
		//push result back
	};
	this.divide = function() {
		var first = stack.pop();
		var second = stack.pop();
		var next = first/second;
		stack.push(next);
		//pop two elements from stack
		//divide
		//push result back
	};
	this.times = function() {
		var first = stack.pop();
		var second = stack.pop();
		var next = first * second;
		stack.push(next);
		//pop two elements from stack
		//multiply together
		//push result back
	};
};
