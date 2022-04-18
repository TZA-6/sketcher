// .sketchPad node declaration
const sketchPad = document.getElementById("sketchPad");
const size = 16;
createGrid(size);
const boxes = document.querySelectorAll(".box");
const buttons = document.querySelectorAll("button");

boxes.forEach((div) => {
    div.addEventListener("mouseover", hover);
});

buttons.forEach((button) => {
    button.addEventListener("click", resetGrid);
});

//function that creates a flex div row within .sketchPad
function createGrid(length){
    sketchPad.style.gridTemplateColumns = `repeat(${length}, 1fr)`;
    sketchPad.style.gridTemplateColumns = `repeat(${length}, 1fr)`;
    for(let i = 0; i < size*size; i++){
        const box = document.createElement("div");
        box.classList.add("box");
        sketchPad.appendChild(box);
    }
}

function hover(e){
    e.target.style.backgroundColor = "black";
    console.log("hovers");
}
function resetGrid(e){
    boxes.forEach((div) => {
        div.style.backgroundColor = "white";
    })
}

