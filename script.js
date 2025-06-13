const container = document.querySelector(".container");

for(let x = 0; x < 16; x++){
    const row = document.createElement("div");
    row.classList.add("row");
    
    for(let y = 0; y < 16; y++){
        const col = document.createElement("div");
        col.classList.add("col");
        row.appendChild(col);
    }

    container.appendChild(row);
}

const cells = document.querySelectorAll(".col");
cells.forEach(cell=>{
    cell.addEventListener("mouseover",()=>{
        cell.style.backgroundColor="darkmagenta";
    });
});