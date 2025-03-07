const container = document.querySelector("#container");

function squareItens () {
    for (let i = 0; i < 2 ; i++) {

        const row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < 2 ; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
        }

        container.appendChild(row);
    }
}

squareItens();