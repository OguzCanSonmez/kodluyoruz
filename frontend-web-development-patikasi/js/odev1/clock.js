const SPAN = document.querySelector("#name");
const P = document.querySelector("#date");

const DAYS = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];

let firstName = prompt("İsminiz:");

function printDate() {
  let time = new Date();
  let day = DAYS[time.getDay() - 1];
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();
  
  minute = control(minute);
  second = control(second);
  
  SPAN.innerHTML = firstName;
  P.innerHTML = `${hour}:${minute}:${second} ${day}`;
  setTimeout(printDate, 1000);
}


function control(x) {
  if(x < 10) {
    x = "0" + x;
  }

  return x;
}