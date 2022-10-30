
var bdzcount = 0;
var carcount = 0;

var sleepchance = 0;


const shouttext = ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10"];
shouttext [0]= "SLEEP!";
shouttext [1]= "You better go to sleep now!";
shouttext [2]= "Sleep is good, you know!";
shouttext [3]= "SHOO GO SLEEP!";
shouttext [4]= "Pls sleep wtf";
shouttext [5]= "You better go to sleep or else...";
shouttext [6]= "Do you hear that? That's the car coming if you aint sleeping";
shouttext [7]= "GO SLEEP or I'm getting the bulldozer";
shouttext [8]= "If you don't go in 10 seconds I'm pulling out the bulldozer";
shouttext [9]= ">:(";

const idlearr = [""];
idlearr [0] = "./assets/idle1.png";
idlearr [1] = "./assets/idle2.png";


let idletimer = setInterval(idlechange, 5000);


function idlechange() {
	var idlerand = Math.floor(Math.random()* 2);
	document.getElementById("cbt").src = idlearr[idlerand];
	
	
}

function rals_sleep() {
	alert("Ralse has been put to sleep! Placeholder text!!");
}
function rals_sleepdozer(){
	clearInterval(idletimer);

	;
	document.getElementById("cbt").src = "./assets/bulldozer_sleep.gif";
	setTimeout(() => { document.getElementById('cont').classList.add('shaker');}, 1240);
	setTimeout(() => { document.getElementById("temporary").innerHTML = "Success?!?!";}, 3800);
	setTimeout(() => { document.getElementById('cont').classList.remove('shaker');}, 1000);
	//change bulldozer to reset
	setTimeout(rsld,4900);
	
}
function rals_faildozer() {
	clearInterval(idletimer);
	document.getElementById("cbt").src = "./assets/bulldozer_fail.gif";
	setTimeout(() => { document.getElementById('cont').classList.add('shaker');}, 1240);
	setTimeout(() => { document.getElementById('temporary').innerHTML = "Failed!";}, 4800);
	setTimeout(() => { document.getElementById('cont').classList.remove('shaker');
					   idletimer = setInterval(idlechange, 5000);

	}, 1000);
	//no reset, fail
}

function rals_carsleep() {
	clearInterval(idletimer);
	document.getElementById("cbt").src = "./assets/car_sleep.gif";
	//1150
	setTimeout(() => { document.getElementById('cont').classList.add('shaker');}, 1130);
	setTimeout(() => { document.getElementById("temporary").innerHTML = "Success...!";}, 3010);
	setTimeout(() => { document.getElementById('cont').classList.remove('shaker');}, 100);
	setTimeout(rsld,3010);
	}

function rals_carfail() {
	clearInterval(idletimer);

	document.getElementById("cbt").src = "./assets/car_fail.gif";
	setTimeout(() => { document.getElementById('cont').classList.add('shaker');}, 1150);
	setTimeout(() => { document.getElementById("temporary").innerHTML = "Failed!";}, 3700);
	setTimeout(() => { document.getElementById('cont').classList.remove('shaker');}, 100);
	setTimeout(() => { idletimer = setInterval(idlechange, 5000);}, 3700);
}

function rals_sleepshout() {
	clearInterval(idletimer);
	document.getElementById("temporary").innerHTML = "Success!";
	document.getElementById("cbt").src = "./assets/shout_sleep.gif";
	document.getElementById("sht").disabled = true;
	//change bulldozer to reset
	setTimeout(rsld,3500);
}

function rsld() {
	document.getElementById("bdz").innerHTML = "RESET!";
	document.getElementById("bdz").disabled = false;
	document.getElementById("bdz").style.background = "red";
	document.getElementById("bdz").style.color = "white";
	document.getElementById("bdz").setAttribute('onclick','reset()');
}

function reset() {
	document.getElementById("bdz").innerHTML = "BULLDOZER";
	document.getElementById("bdz").setAttribute('onclick','bulldozer()');
	document.getElementById("bdz").disabled = true;
	document.getElementById("bdz").style.background = "darkred";
	document.getElementById("bdz").style.color = "gray";
	document.getElementById("temporary").innerHTML = "Welcome! PUT RALS TO SLEEP!";
	//for shout
	document.getElementById("sht").disabled = false;

	//resets the interval (4.89s!) 1.23s crash

	idletimer = setInterval(idlechange, 5000);
	//reassigns idle1
	document.getElementById("cbt").src = "./assets/idle1.png";
}

function shake() {
	document.getElementById('cbt').classList.add("shaker");
	document.getElementById('temporary').classList.add("shaker");
	setTimeout(() => { document.getElementById('temporary').classList.remove('shaker');}, 100);
	setTimeout(() => { document.getElementById('cbt').classList.remove('shaker');}, 100);
}

function shout() {
	var shoutval = Math.floor(Math.random()* 10);
	sleepchance = Math.floor(Math.random()* 51);

	document.getElementById("temporary").innerHTML = shouttext[shoutval];
	++bdzcount;
	++carcount;
	//random text, can be reimplemented into the chance system.
	
	if (sleepchance == 1){
	rals_sleepshout();
	bdzcount = 0;
	sleepchance = 0;
	carcount = 0;
	}
	if (bdzcount >= 20){
	document.getElementById("bdz").disabled = false;
	document.getElementById("bdz").style.background = "red";
	document.getElementById("bdz").style.color = "white";
	} else{
	document.getElementById("bdz").disabled = true;
	document.getElementById("bdz").style.background = "darkred";
	document.getElementById("bdz").style.color = "gray";
	}

	if (carcount >= 5){
	document.getElementById("crs").disabled = false;
	} else {
	document.getElementById("crs").disabled = true;
	}

	return;
}
function car() {
	sleepchance = Math.floor(Math.random()* 11);
	document.getElementById("temporary").innerHTML = "Incoming 2003 Toyota Corolla!";
	carcount = 0;
	++bdzcount;
	
	if (sleepchance == 1){
	rals_carsleep();
	bdzcount = 0;
	sleepchance = 0;
	} else{
		rals_carfail();
		carcount = 0;

	}

	if (carcount >= 5){
	document.getElementById("crs").disabled = false;
	} else {
	document.getElementById("crs").disabled = true;
	}


	if (bdzcount >= 20){
	document.getElementById("bdz").disabled = false;
	document.getElementById("bdz").style.background = "red";
	document.getElementById("bdz").style.color = "white";
	} else{
	document.getElementById("bdz").disabled = true;
	document.getElementById("bdz").style.background = "darkred";
	document.getElementById("bdz").style.color = "gray";
	}

	return;

}
function bulldozer() {
	sleepchance = Math.floor(Math.random()* 2);
	document.getElementById("temporary").innerHTML = "BULLDOZER THROWN.";
	bdzcount = 0;
	carcount = 0;
	if (bdzcount < 20){
	document.getElementById("bdz").disabled = true;
	document.getElementById("bdz").style.background = "darkred";
	document.getElementById("bdz").style.color = "gray";	
	}
	if (sleepchance == 1){
	rals_sleepdozer();
	sleepchance = 0;
	} else{
	rals_faildozer();
	}
	return;
}


       

//TODO: shout will get a random math value, which corresponds to a certain value

/*TODO: all these options will deal a certain percent (simulate percent/chance)
		simulate via smaller random math value range

		shout 1-100
		car 1-50
		bulldozer 1-2

		bulldozer will only be unlocked when the other two actions have been unlocked

		say like 10-20 uses (simulate via int variable increment per use)


*/
