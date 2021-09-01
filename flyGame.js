const fly = document.querySelector(".fly"),
      inst =  document.querySelector(".instraction"),
      over = document.querySelector(".over");

function run(min,max){
    const result = Math.random() * (max - min + 1)
    return Math.floor(result) 
};

fly.addEventListener("mousemove", () => {
    inst.remove()

    fly.style.top = run(0,400) + "px"
    fly.style.left = run(0,400) + "px"
});

fly.addEventListener("click", () => {   
    const newInst = document.createElement("p"),
          gameOver = over.appendChild(newInst);

    gameOver.innerHTML = "You catch me <p>Try again 😎</p>";

    setInterval(() => {
        document.location.reload()
    }, 2000);
});

