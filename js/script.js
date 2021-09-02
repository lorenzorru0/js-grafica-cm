/* Functions */
function createPlayground(numCells) {
    let playground = document.getElementById(`playground`);
    let width = `width-${numCells}`;
    playground.classList.add(width)
    for (let i = 0; i < (numCells * numCells); i++) {
        playground.innerHTML += `<div class="square">${i + 1}</div>`;
    }
    playground.classList.add(`view`)
}



/* Main program */
let buttonCreate = document.getElementById(`create`);

buttonCreate.addEventListener(`click`, 
    function() {
        let numberCells = parseInt(document.getElementById(`numberCells`).value);
        let containerForm = document.getElementById(`containerForm`);
        let error = document.getElementById(`error`);
        let playground = document.getElementById(`playground`);

        if (isNaN(numberCells)) {
            error.innerHTML = `Error! Choose a number of cells`;
            error.classList.add(`view`)
        } else {
            containerForm.classList.add(`remove`);
            error.classList.add(`remove`);
            createPlayground(numberCells);
            playground.addEventListener(`click` , 
                function(event) {
                    console.log(event);
                    event.target.classList.toggle(`clicked`);
                }
            );
        }
    }
);