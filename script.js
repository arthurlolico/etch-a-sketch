const container = document.querySelector("#container");

function deleteGrid(container){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function gridB(gridSide,container) {

    for (let i = 0; i < gridSide ; i++) {

        const row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < gridSide ; j++) {
            const square = document.createElement("div");
            square.style.background = "white";
            square.classList.add("square");
            row.appendChild(square);
        }

        container.appendChild(row);
    }

    const grid = document.querySelectorAll(".square");

    grid.forEach((grid) => {
        grid.addEventListener("mouseenter", function (e) {
            if(e.target.style.background === "white")
                e.target.style.background = "black";
        })
        grid.addEventListener("mouseleave", function (e) {
            if(e.target.style.background === "black")
                e.target.style.background = "white";
        })
    })
    
}

function etchASketch () {

    gridB(16,container);
    const button = document.querySelector("button");
    button.addEventListener("click", function(e) {
        let gridSide = prompt("Squares per side: ");
        if(gridSide > 1 && gridSide <= 100)
            deleteGrid(container);
            gridB(gridSide,container);
    })
}

etchASketch();