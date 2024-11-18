const timeOfDay = new Date().getHours();
const locker = document.querySelectorAll(".locker");
const names = document.querySelectorAll("p");
let screenSize = window.innerWidth;

if (timeOfDay >= 19 && timeOfDay <= 24) {
  document.body.style.backgroundColor = "black";
  document.querySelector("h1").style.color = "white";
  
  if (screenSize > 768){  
    for (let i = 0; i < locker.length; i++){
        locker[i].style.backgroundColor = "grey";
        names[i].style.color = "grey";

        locker[i].addEventListener("mouseover", function(){
        names[i].style.color = "white";
        })

        locker[i].addEventListener("mouseout", function(){
        names[i].style.color = "grey";
        })
    }
  } else {
    for (let i = 0; i < locker.length; i++){
      locker[i].style.backgroundColor = "grey";
      names[i].style.color = "white";
    }
  }
} 