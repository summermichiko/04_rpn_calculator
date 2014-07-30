function Calculator() {
    var stack = [];
    var error = "calculator is empty"

	this.push = function(number) {
			stack.push(number);
	}

	this.plus = function() {
	    if (stack.length < 2) {
			throw error;
		} else {
			result = stack.pop() + stack.pop(); 
			stack.push(result); 
		}
	}

	this.value = function() {
	    return stack[stack.length-1]; //gives last item on the stack
	}

	this.minus = function() {
	    if (stack.length < 2) {
			throw error;
		} else {
			result = -stack.pop() + stack.pop(); 
			stack.push(result); 
		}
	}

	this.divide = function() {
	    if (stack.length < 2) {
			throw error;
		} else {
			var first = stack.pop();
			var second = stack.pop();
			result = second / first; 
			stack.push(result); 
		}
	}

	this.times = function() {
	    if (stack.length < 2) {
			throw error;
		} else {
			result = stack.pop() * stack.pop(); 
			stack.push(result); 
		}
	}
}


//Nimit's solution
// var Calculator = function(){
// 	var stack = [];
 
// 	var popAndCompute = function(operation){
// 		if(stack.length < 2){
// 			throw("calculator is empty");
// 		};
 
// 		var operand1 = stack.pop();
// 		var operand2 = stack.pop();
// 		var result = operation(operand1, operand2);
// 		stack.push(result);
 
// 	};
 
// 	this.value = function(){
// 		return stack[stack.length-1];
// 	};
 
// 	this.push = function(num){
// 		stack.push(num);
// 	};
 
// // *** OPERATIONS ***
 
// 	this.plus = function(){
 
// 		var sum = function(operand1, operand2){
// 			return operand1 + operand2;
// 		};
// 		popAndCompute(sum);
// 	};
 
// 	this.minus = function(){
// 		var difference = function(operand1, operand2){
// 			return operand2 - operand1;
// 		};
// 		popAndCompute(difference);
// 	};
 
// 	this.divide = function(){
// 		popAndCompute(function(first,second){
// 			return second/first;
// 		});
// 	};
 
// 	this.times = function(){
// 		popAndCompute(function(first,second){
// 			return first * second;
// 		});
// 	};
// }




