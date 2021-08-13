const bulbons = document.querySelectorAll(".fa-lightbulb");
const bulbborder = document.querySelector(".hbd-container");
const machine = document.querySelector(".machine");
const presentbtn = document.querySelector("#present-btn");
const canvasC = document.getElementById('c');

function hideEverything(){
    canvasC.style.display = 'none';
}
hideEverything();
const confettiSettings = { target: 'confetti' };
    const confetti = new window.ConfettiGenerator(confettiSettings);
    confetti.render();

const bulb1 = document.querySelectorAll(".fa-lightbulb:nth-of-type(1)");
const bulb2 = document.querySelectorAll(".fa-lightbulb:nth-of-type(2)");
const bulb3 = document.querySelectorAll(".fa-lightbulb:nth-of-type(3)");
const bulb4 = document.querySelectorAll(".fa-lightbulb:nth-of-type(4)");
const bulb5 = document.querySelectorAll(".fa-lightbulb:nth-of-type(5)");
const bulb6 = document.querySelectorAll(".fa-lightbulb:nth-of-type(6)");
const bulb7 = document.querySelectorAll(".fa-lightbulb:nth-of-type(7)");
const bulb8 = document.querySelectorAll(".fa-lightbulb:nth-of-type(8)");


let bulbidx = 0;

function updatebulb(){
    bulbons[bulbidx].classList.remove("far");
    bulbons[bulbidx].classList.add("fas");
    bulbidx++;

    if(bulbidx >= bulbons.length){
        bulbborder.classList.add("border");
        clearbulbinterval();
    }
}

let intervalbulb = setInterval(updatebulb, 800);

function clearbulbinterval(){
    clearInterval(intervalbulb);
}

machine.addEventListener("mousemove", (e)=>{
    
    bulb1[0].style.color = `rgba(${e.offsetX}, ${e.offsetY}, 0 ,0.7)`;
    bulb2[0].style.color = `rgba(${e.offsetY}, ${e.offsetX}, 125 ,0.7)`;
    bulb3[0].style.color = `rgba(${e.offsetX}, ${e.offsetY}, 100 ,0.7)`;
    bulb4[0].style.color = `rgba(50, ${e.offsetY}, ${e.offsetX} ,0.7)`;
    bulb5[0].style.color = `rgba(125, ${e.offsetX}, ${e.offsetY} ,0.7)`;
    bulb6[0].style.color = `rgba(${e.offsetY}, 150 , ${e.offsetX} ,0.7)`;
    bulb7[0].style.color = `rgba(${e.offsetY}, 125, ${e.offsetX} ,0.7)`;
    bulb8[0].style.color = `rgba(${e.offsetX}, ${e.offsetY}, ${e.offsetY} ,0.7)`;
    

    bulbborder.style.borderColor = "#FFF47D";
})
machine.addEventListener("mouseleave", (e)=>{
    
    bulbons.forEach( bulbon => bulbon.style.color="aliceblue");
    bulbborder.style.borderColor = "aliceblue";
})


