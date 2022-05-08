(function () {
	let rotateY = 0, rotateX = 0;
	
	 	document.onkeydown = function (e) {
	 		if (e.keyCode === 37/*LEFT*/) rotateY -= 5
	 		else if (e.keyCode === 38/*TOP*/) rotateX += 5
	 		else if (e.keyCode === 39/*RIGHT*/) rotateY += 5
	 		else if (e.keyCode === 40/*BOTTOM*/) rotateX -= 5
			
	 		document.querySelector('.cube').style.transform =
	 		'rotateY(' + rotateY + 'deg)'+'rotateX(' + rotateX + 'deg)';

	 	}
})();

let sides = Array.from(document.querySelectorAll('.side'));
let backfaceStatus = document.querySelector('.backface_status');

function $switch(isOpen){
	
	

	if (isOpen){
		for (let i = 0; i < sides.length; i++){
			sides[i].style.backfaceVisibility = "visible";
		}
		   backfaceStatus.innerHTML = "backface-visibility: visible;";
		   return;
	        }

	else{
		for (let i = 0; i < sides.length; i++){
			sides[i].style.backfaceVisibility = "hidden";
                  }
		  backfaceStatus.innerHTML = "backface-visibility: hidden;";
	 }
}

const alertBody = document.querySelector('.custom__alert__body');
const alertContent = document.querySelector('.custom__alert__content');

alertTextContent = "No Warning.";
alertContent.innerHTML = alertTextContent;

const openAlert = function(){
	alertBody.style.display = "block";
	alertContent.innerHTML = alertTextContent;
	return;
}

const closeAlert = function(){
	alertBody.style.display =  "none";
	alertContent.innerHTML = null;
	return;
}

let inClick = 0;
const CUBE_BODY = document.querySelector('.cube');

const ENABLE_AUTO_ROTATION = function(){	
	inClick++;
	CUBE_BODY.classList.add('auto_rotate');
	if(CUBE_BODY.classList.contains("auto_rotate") && inClick > 1){
		alertTextContent = "Auto rotation already enabled";
		alertContent.innerHTML = alertTextContent;
		openAlert();
	}
}


const DISABLE_AUTO_ROTATION = function(){
	if(!CUBE_BODY.classList.contains("auto_rotate")){
		alertTextContent = "Auto rotation already disabled";
		alertContent.innerHTML = alertTextContent;
		openAlert();
		return;
	}
	CUBE_BODY.classList.remove('auto_rotate');
}

const disAssembly = function(){
	let sides = Array.from(document.querySelectorAll('.side'));
	const disAssemblyTime = 3300;
	for (let i = 0; i < sides.length; i++){
		sides[i].style.animationName = "disAssembly";
        }
	setTimeout(assembly, disAssemblyTime);
}

const assembly = function() {
	let sides = Array.from(document.querySelectorAll('.side'));
	for (let i = 0; i < sides.length; i++){
		sides[i].style.animationName = "";
	}	
}
