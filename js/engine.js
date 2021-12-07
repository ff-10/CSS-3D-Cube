(function () {

	//define values
	var rotateY = 0,
	 	  rotateX = 0;

    // keydown eventhandler
	 	document.onkeydown = function (e) {

	 		if (e.keyCode === 37/*LEFT*/) rotateY -= 5
	 		else if (e.keyCode === 38/*TOP*/) rotateX += 5
	 		else if (e.keyCode === 39/*RIGHT*/) rotateY += 5
	 		else if (e.keyCode === 40/*BOTTOM*/) rotateX -= 5

	 		//Add degrees to transform:;
	 		document.querySelector('.cube').style.transform =
	 		'rotateY(' + rotateY + 'deg)'+'rotateX(' + rotateX + 'deg)';

	 	}
})();





// true = visible, false = hidden

function $switch(backface_boolean){

	let sides = Array.from(document.querySelectorAll('.side'));

	let bface_status = document.querySelector('.backface_status');

	if (backface_boolean === true){
		for (let i = 0; i < sides.length; i++)
			sides[i].style.backfaceVisibility = "visible";

		bface_status.innerHTML = "backface-visibility: visible;";
		}


	else if(backface_boolean === false){
		for (let i = 0; i < sides.length; i++)
			sides[i].style.backfaceVisibility = "hidden";

		bface_status.innerHTML = "backface-visibility: hidden;";
   }

	else
		return;
}
