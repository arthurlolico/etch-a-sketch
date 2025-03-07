const container = document.querySelector("#container");

function squareItens () {
    for (let i = 0; i < 16 ; i++) {

        const rowSquare = document.createElement("div");
        rowSquare.classList.add("rowSquare");

        for (let j = 0; j < 16 ; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            rowSquare.appendChild(square);
        }

        container.appendChild(rowSquare);
    }
}

squareItens();