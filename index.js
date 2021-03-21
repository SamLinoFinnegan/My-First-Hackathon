const button = document.getElementById("btn");
const btnDiv = document.querySelector(".button");
const floor = document.querySelector(".floor");
const box = document.getElementById('box');
const container = document.getElementsByClassName("container");


const thePrince = () => {
    btnDiv.innerHTML = "";
    box.innerHTML = "";
    button.classList.add("invisible")
    const newDiv = document.createElement('div');
    const princeIMG = document.createElement('img');
    princeIMG.classList.add("smallPrince")
    princeIMG.src = "https://webstockreview.net/images/scooby-doo-clipart-scared-5.png";
    newDiv.appendChild(princeIMG)
    floor.appendChild(newDiv)
    setTimeout(() => {
        princeIMG.classList.remove("smallPrince")
        princeIMG.classList.add("prince");
    }, 900)

};



const theMeme = () => {
    const newDiv = document.createElement('div');
    const meme = document.createElement('img');
    meme.classList.add("meme");
    meme.src = "https://i.imgflip.com/2igauj.jpg";
    newDiv.appendChild(meme);
    box.appendChild(newDiv);
};



let cont = 0;


function moveButton() {
    cont++;
    let randX = Math.floor(Math.random() * (window.innerWidth - 100));
    if (cont < 10) {
        button.animate([
            { transform: "scale(0.8)", "left": randX + "px" },
            { transform: "scale(1.2)", "top": 100 + "px" }
        ], { duration: 2000 })
    } else if (cont == 10) {
        theMeme();
    } else {
        button.animate([
            { "left": randX + "px" },
            { "top": 100 + "px" },

        ], { duration: 5000 })

    };
};

button.addEventListener('mouseenter', moveButton);

button.addEventListener('click', thePrince);
