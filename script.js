
const gridContainer = document.getElementById('grid-container')

function makeGrid(rows, columns){
    gridContainer.style.setProperty('--grid-row', rows);
    gridContainer.style.setProperty('--grid-cols', columns);

    for (i = 0; i < (rows * columns); i++){
        let cell = document.createElement('div')
        cell.innerText = i + 1;
        cell.addEventListener('mouseover', () => cell.style.backgroundColor = "lightblue")
        gridContainer.appendChild(cell).className = "grid-item"
        

    }
}
makeGrid(16, 16)

