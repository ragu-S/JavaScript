// QuickUnion algorithm
(function() {
	window.onload = function() {
		var array1 = [0, 9, 6, 5, 4, 2, 6, 1, 0, 5];
		var array2 = [2, 3, 4, 9, 3, 6, 7, 4, 8, 9];
        
        for(var n = 0; n < array2.length; n++) {
        	console.log("Root of ",n," is",findRoot(n, array2));
        }
       displayArrays(array2);
       displayUnionArray(array2);

       createCanvas();
	};

	// Quick Find
	// Finds the root of a node tree
	function findRoot(index, array) {
		while(index !== array[index]) {
			index = array[index];
		}
		return index;
	}

	function displayArrays(arrays) {
		var articleTag = document.querySelector('.page .mainContent');
		
		var pTag = document.createElement('p');
		pTag.innerText = "[";

		for(var i = 0; i < arrays.length - 1; i++) {
			pTag.innerText += arrays[i] + ",";
		}

		pTag.innerText += arrays[i] + "]";
		articleTag.appendChild(pTag);
	}

	function displayUnionArray(array) {
		var unionDiv = document.getElementById('Union');
		console.log(unionDiv);

		for(var i = 1; i <= array.length; i++) {
			var element = document.createElement('div');
			//element.className = ""
			element.innerText = findRoot(i-1, array);
			unionDiv.appendChild(element);
			// if(i%5 === 0)
			// 	unionDiv.appendChild(document.createElement('br'));
		}
	}

	function createCanvas() {
		var canvas = document.createElement('canvas'), c = canvas.getContext('2d');
		canvas.id = "Canvas";
		canvas.width = 400;
		canvas.height = 400;

		//document.body.appendChild(canvas);
		document.querySelector('.page').appendChild(canvas);

		c.fillStyle = "black";
		c.fillRect(0, 0, canvas.width, canvas.height);

		var posX = canvas.width / 2;
				posY = canvas.height / 2;

		setInterval(function() {
			posX += 1;
			posY += 1;
			c.fillStyle = "white";
			c.fillRect(posX, posY, 10, 10);
		}, 10);
	}
})();


