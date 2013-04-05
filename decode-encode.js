        deencode = function() {
	};
	deencode.decode = function () {
	    var value = document.getElementById('input-text').value;
            document.getElementById('output-text').value = base64.decode(value);

	};

	deencode.encode = function () {
            var value = document.getElementById('input-text').value;
            document.getElementById('output-text').value = base64.encode(value);
	};
	

