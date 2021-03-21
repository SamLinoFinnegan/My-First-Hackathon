const button = document.getElementById("btn");
const btnDiv = document.querySelector(".button");
const floor = document.querySelector(".floor");
const box = document.getElementById('reward');
const container = document.getElementsByClassName("container");
const body = document.getElementById("body") 


const thePrince = () => {
    btnDiv.innerHTML = "";
    box.innerHTML = "Hooray! You did it! Now live happily ever after :)";
    button.classList.add("invisible")
    const newDiv = document.createElement('div');
    const princeIMG = document.createElement('img');
    princeIMG.classList.add("prince-small")
    princeIMG.src = "img/prince.png";
    newDiv.appendChild(princeIMG)
    button.appendChild(newDiv)
    body.classList.add("rainbow")
    setTimeout(() => {
        princeIMG.classList.add("prince-big");
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
            { transform: "scale(1.2)", "bottom": 100 + "px" }
        ], { duration: 2000 })
    } else if (cont == 10) {
        theMeme();
    } else {
        button.animate([
            { "left": randX + "px" },
            { "bottom": 100 + "px" },

        ], { duration: 5000 })

    };
};

button.addEventListener('mouseenter', moveButton);

button.addEventListener('click', thePrince);

// thePrince()