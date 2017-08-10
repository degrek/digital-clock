function startClock(){
	var time = new Date();
	var hours = time.getHours();
	var minutes = time.getMinutes();
	var second = time.getSeconds();

	if(minutes < 10)
		minutes = "0" + minutes;
	if(second < 10)
		second = "0" + second;
	if(hours <= 12){
		statusDay = " AM";
	}
	else{
		hours -=12;
		statusDay = " PM";
	}
	if(hours < 10)
			hours = "0"+ hours;
	var timeClock = hours + ":" + minutes + ":" + second + statusDay; 
	document.getElementById('clock').innerText = timeClock;
}

setInterval(startClock, 1000);