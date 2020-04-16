
const gridContainer = document.getElementById('grid-container')

function makeGrid(rows, columns){
    gridContainer.style.setProperty('--grid-row', rows);
    gridContainer.style.setProperty('--grid-cols', columns);

    for (i = 0; i < (rows * columns); i++){
        let cell = document.createElement('div')
        cell.innerText = i + 1;
        cell.addEventListener('mouseover', () => cell.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`)
        gridContainer.appendChild(cell).className = "grid-item"
    }
}

function randomColor (){
    return Math.floor(Math.random() * 255)
}

makeGrid(16, 16)

const reset = document.getElementById('reset')

reset.onclick = function (){

    let grid = prompt('How many sqaures per side?');
    grid = parseInt(grid);
        
    if((grid == null) || (typeof(grid) != "number") || (isNaN(grid))){
        return null
    }

    gridContainer.innerHTML = '';
    makeGrid(grid, grid)
}

