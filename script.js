const container = document.querySelector(".container");

let size = 16;

const createGrid = (size) => {
    container.innerHTML ="";
    let hue = Math.floor(Math.random() * 360);

    for(let x = 0; x < size; x++){
        const row = document.createElement("div");
        row.classList.add("row");
        
        for(let y = 0; y < size; y++){

            const col = document.createElement("div");
            col.classList.add("col");
            col.addEventListener("mouseover",()=>{
                col.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
            });
            row.appendChild(col);
        }
        container.appendChild(row);
    }
}

createGrid(size);

const button = document.querySelector(".grid");
button.addEventListener("click", ()=>{
    size = prompt("Enter the number of squares per side for the grid(max 100):");
    size = parseInt(size);

    if(isNaN(size) || size < 1 || size > 100){
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    createGrid(size);
});
