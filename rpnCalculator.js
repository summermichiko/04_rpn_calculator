function Calculator() {
    this.stack = [];
    this.error = "calculator is empty"


	this.push = function(number) {
			this.stack.push(number);
	}
	    
	this.value = function() {
	    return this.stack[this.stack.length-1]; //gives last item on the stack
	}

	this.plus = function(input) {
	    if (this.stack.length < 2) {
			throw this.error;
		} else {
			result = this.stack.pop() + this.stack.pop(); 
			this.stack.push(result); 
		}
	}

	this.minus = function(input) {
	    if (this.stack.length < 2) {
			throw this.error;
		} else {
			result = -this.stack.pop() + this.stack.pop(); 
			this.stack.push(result); 
		}
	}

	this.divide = function(input) {
	    if (this.stack.length < 2) {
			throw this.error;
		} else {
			var first = this.stack.pop();
			var second = this.stack.pop();
			result = second / first; 
			this.stack.push(result); 
		}
	}

	this.times = function(input) {
	    if (this.stack.length < 2) {
			throw this.error;
		} else {
			result = this.stack.pop() * this.stack.pop(); 
			this.stack.push(result); 
		}
	}
}



