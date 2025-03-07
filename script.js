const container = document.querySelector("#container");

function squareItens () {
    for (let i = 0; i < 16 ; i++) {

        const row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < 16 ; j++) {
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
            console.log(e.target.style.background);
            if(e.target.style.background === "black")
                e.target.style.background = "white";
        })
    })
}

squareItens();