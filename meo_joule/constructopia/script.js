let accordion = document.querySelectorAll(".accordion-option");
let accText = document.querySelectorAll(".accordion-text");
let chevron = accordion[0].children[1];
let accordionSwitch = false;

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", () => {
        if (accordionSwitch === false) {
            accordion[i].parentElement.style.backgroundColor = "rgb(231, 231, 231)";
            accordion[i].parentElement.style.border = "1px solid #0a7518"
            chevron.setAttribute("name", "chevron-up")
            accText[i].style.display = "block";
            accordionSwitch = true;
        } else {
            accordion[i].parentElement.style.backgroundColor = "white";
            accordion[i].parentElement.style.border = "1px solid rgb(231, 231, 231)"
            chevron.setAttribute("name", "chevron-down")
            accText[i].style.display = "none";
            accordionSwitch = false;
        }
    })
}