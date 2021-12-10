function startTime() {
   let date = new Date();
   let hours = date.getHours();
   let minutes = date.getMinutes();
   let seconds = date.getSeconds();
   if (hours < 10) hours = "0" + hours;
   if (minutes < 10) minutes = "0" + minutes;
   if (seconds < 10) seconds = "0" + seconds;
   document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds; // Выбор элемента документа по его id = "time"
   setInterval(startTime, 1000); 
}







let date_in_future = new Date(2022, 0, 1, 10, 32, 4);       
let x;
function timer() {
 
  let date = new Date().getTime();
  
  let ms = date_in_future - date;
  
  let days = Math.floor(ms / (1000 * 60 * 60 * 24));
  let hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((ms % (1000 * 60)) / 1000);
  
  document.getElementById("time1").innerHTML = "Осталось: " + days + "дней " + hours + "часов "
	+ minutes + "минут " + seconds + "секунд ";
  
  if (ms < 0) {
	clearInterval(x);
	document.getElementById("time1").innerHTML = "Время истекло!";
  }
  x = setInterval(timer, 1000);
}
function start(){
    timer();
    startTime();
}