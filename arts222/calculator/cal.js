var mode, temp, ans;

$(document).ready(function() {
	setInterval(function() {
		//	ctx.clearRect(0, 0, 1000, 500)
		key()
	}, 1000)
})

function key() {

	document.onkeydown = function(event) {
		event = event || window.event;
		var keyCode = event.keyCode;

		if(keyCode >= 48 && keyCode <= 58) { // the number is KeyCode - 48
			print(keyCode - 48)
			console.log(keyCode)
		} else if(keyCode >= 96 && keyCode <= 105) { // the number is KeyCode - 48
			print(keyCode - 96)
			console.log(keyCode)
		} else if(keyCode == 8) {
			del(1)
		} else if(keyCode == 107 || keyCode == 109 || keyCode == 106 || keyCode == 111) {
			console.log(keyCode)
			switch(keyCode) {
				case 107: //add
					mode = "+";
					break;
				case 106: //mutiply
					mode = "*";
					break;
				case 109: //minus
					mode = "-";
					break;
				case 111: //divide
					mode = "/";
					break;
			}
			temp = $('#disp').val()
			del(0)
			console.log(temp)
		} else if(keyCode == 13) {
			console.log(keyCode)
			$('#disp').val(compute(mode, parseFloat(temp), parseFloat($('#disp').val())))
		} else if(keyCode == 27) {
			del(0)
		}
	}
}

function but(type) {
	if(type == "=") {
		$('#disp').val(compute(mode, parseFloat(temp), parseFloat($('#disp').val())))
	} else if(type == "^2") {
		mode = type
		$('#disp').val(compute(type, parseFloat($('#disp').val()), 0))
	} else if(type == "rt") {
		mode = type
		$('#disp').val(compute(type, parseFloat($('#disp').val()), 0))
	} else {
		mode = type
		temp = $('#disp').val()
		del(0)
	}
}

function print(num) {
	$('#disp').val($('#disp').val() + num)
	//	console.log($('#disp').text())
}

function del(type) {
	if(type == 0) {
		$('#disp').val("")
	} else {
		$('#disp').val($('#disp').val().substr(0, $('#disp').val().length - 1))
	}
	console.log($('#disp').val().length)
}

function substraction(a, b) {
	return a - b;
}

function addition(a, b) {
	return a + b
}

function mutiplication(a, b) {
	return a * b
}

function division(a, b) {
	return a / b
}

function square(a) {
	return a * a
}

function root(a) {
	return Math.sqrt(a)
}

function compute(type, a, b) {
	switch(type) {
		case "+": //add
			ans = addition(a, b)
			break;
		case "*": //mutiply
			ans = mutiplication(a, b)
			break;
		case "-": //minus
			ans = substraction(a, b)
			break;
		case "/": //divide
			ans = division(a, b)
			break;
		case "^2":
			ans = square(a)
			console.log(ans)
			break;
		case "rt":
			ans = root(a)
			console.log(ans)
			break;
	}
	return ans
}

function refresh() {
	for(x=0;x<=<10;x++){
		window.location.reload()
	}
}



