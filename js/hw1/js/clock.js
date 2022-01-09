let userName = prompt("Lutfen Adinizi Giriniz!")
let myName=document.querySelector("#myName")
myName.innerHTML= userName

function myClock(){
  let dt = new Date();
  let saat = document.querySelector(".clock") 
  let gunler = ["pazar","pazartesi","sali","carsamba","persembe","cuma","cumartesi"];
  saat.innerHTML = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds() + "  " + gunler[dt.getDay()];
}
setInterval(myClock,1000)

