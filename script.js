let density = "small";
let mode = "classic";

createGrid(density);
paintGrid(mode);

const densityButtons = document.querySelectorAll(".density");
const modeButtons = document.querySelectorAll(".modes");
const eraser = document.querySelector("#eraser");

eraser.addEventListener("click", function(e) {
    const cells = document.querySelectorAll(".cell");
    
    cells.forEach((cell) => {
        cell.classList.remove("bg-secondary");
        cell.classList.remove("bg-info");
        cell.setAttribute("style", "background-color: white");
    });
});

densityButtons.forEach((button) => {
    button.addEventListener("click", function(e) {
        if (button.id == "small") {
            density = "small";
            createGrid(density);
            paintGrid(mode);
        }
        else if (button.id == "medium") {
            density = "medium";
            createGrid(density);
            paintGrid(mode);
        }
        else if (button.id == "big") {
            density = "big";
            createGrid(density);
            paintGrid(mode);
        }
    });
});

modeButtons.forEach((button) => {
    button.addEventListener("click", function(e) {
        if (button.id === "classic") {
            mode = "classic";
        }
        else if (button.id === "modern") {
            mode = "modern"
        }
        else {
            mode = "psychedelic";
        }

        paintGrid(mode);
    });
});

function createGrid(density) {
    if (density === "small") {
        const gridContainer = document.querySelector(".gridContainer");
        
        if (gridContainer.hasChildNodes()) {
            gridContainer.removeChild(gridContainer.lastChild);

            const smallGrid = document.createElement("div");
            smallGrid.classList.add("gridSmall");

            for (let i = 0; i < 256; i++) {
                const cell = document.createElement("div");
                cell.classList.add("cell");
                cell.setAttribute("id", `${i}`);
                smallGrid.appendChild(cell);
            }

            gridContainer.appendChild(smallGrid);
        }
        else {
            const smallGrid = document.createElement("div");
            smallGrid.classList.add("gridSmall");

            for (let i = 0; i < 256; i++) {
                const cell = document.createElement("div");
                cell.classList.add("cell");
                cell.setAttribute("id", `${i}`);
                smallGrid.appendChild(cell);
            }

            gridContainer.appendChild(smallGrid);
        }
    }
    else if (density === "medium") {
        const gridContainer = document.querySelector(".gridContainer");
        
        if (gridContainer.hasChildNodes()) {
            gridContainer.removeChild(gridContainer.lastChild);

            const smallGrid = document.createElement("div");
            smallGrid.classList.add("gridMedium");

            for (let i = 0; i < 1024; i++) {
                const cell = document.createElement("div");
                cell.classList.add("cell");
                cell.setAttribute("id", `${i}`);
                smallGrid.appendChild(cell);
            }

            gridContainer.appendChild(smallGrid);
        }
        else {
            const smallGrid = document.createElement("div");
            smallGrid.classList.add("gridMedium");

            for (let i = 0; i < 1024; i++) {
                const cell = document.createElement("div");
                cell.classList.add("cell");
                cell.setAttribute("id", `${i}`);
                smallGrid.appendChild(cell);
            }

            gridContainer.appendChild(smallGrid);
        }
    }
    else if (density === "big") {
        const gridContainer = document.querySelector(".gridContainer");
        
        if (gridContainer.hasChildNodes()) {
            gridContainer.removeChild(gridContainer.lastChild);

            const smallGrid = document.createElement("div");
            smallGrid.classList.add("gridBig");

            for (let i = 0; i < 4096; i++) {
                const cell = document.createElement("div");
                cell.classList.add("cell");
                cell.setAttribute("id", `${i}`);
                smallGrid.appendChild(cell);
            }

            gridContainer.appendChild(smallGrid);
        }
        else {
            const smallGrid = document.createElement("div");
            smallGrid.classList.add("gridBig");

            for (let i = 0; i < 4096; i++) {
                const cell = document.createElement("div");
                cell.classList.add("cell");
                cell.setAttribute("id", `${i}`);
                smallGrid.appendChild(cell);
            }

            gridContainer.appendChild(smallGrid);
        }
    }
}

function paintGrid(mode) {
    if (mode === "classic") {
        const cells = document.querySelectorAll(".cell");
        cells.forEach((cell) => {
            cell.addEventListener("mouseenter", function(e) {
                cell.setAttribute("style", "background-color: white;");
                cell.classList.remove("bg-info");
                cell.classList.add("bg-secondary");
            });
        });
    }
    else if (mode === "modern") {
        const cells = document.querySelectorAll(".cell");
        cells.forEach((cell) => {
            cell.addEventListener("mouseenter", function(e) {
                cell.setAttribute("style", "background-color: white;");
                cell.classList.remove("bg-secondary");
                cell.classList.add("bg-info");
            });
        });
    }
    else if (mode === "psychedelic") {
        const cells = document.querySelectorAll(".cell");
        cells.forEach((cell) => {
            cell.addEventListener("mouseenter", function(e) {
                const redPercentage = Math.floor(Math.random() * 256);
                const greenPercentage = Math.floor(Math.random() * 256);
                const bluePercentage = Math.floor(Math.random() * 256);

                cell.classList.remove("bg-secondary");
                cell.classList.remove("bg-info");
                cell.setAttribute("style", `background-color: rgb(${redPercentage},${greenPercentage},${bluePercentage});`);
            });
        });
    }
}