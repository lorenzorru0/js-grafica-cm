/* Functions */
function createPlayground(numCells) {
    let playground = document.getElementById(`playground`);
    switch(numCells) {
        case 2:
            playground.classList.add(`width-2`);
            for (let i = 0; i < (numCells *numCells); i++) {
                playground.innerHTML += `<div class="square">${i+1}</div>`;
            }
            break;
        case 3:
            playground.classList.add(`width-3`)
            for (let i = 0; i < (numCells * numCells); i++) {
                playground.innerHTML += `<div class="square">${i+1}</div>`;
            }
            break;
        case 4:
            playground.classList.add(`width-4`)
            for (let i = 0; i < (numCells * numCells); i++) {
                playground.innerHTML += `<div class="square">${i+1}</div>`;
            }
            break;
        case 5:
            playground.classList.add(`width-5`)
            for (let i = 0; i < (numCells * numCells); i++) {
                playground.innerHTML += `<div class="square">${i+1}</div>`;
            }
            break;
        case 6:
            playground.classList.add(`width-6`)
            for (let i = 0; i < (numCells * numCells); i++) {
                playground.innerHTML += `<div class="square">${i+1}</div>`;
            }
            break;
        case 7:
            playground.classList.add(`width-7`)
            for (let i = 0; i < (numCells * numCells); i++) {
                playground.innerHTML += `<div class="square">${i+1}</div>`;
            }
            break;
        case 8:
            playground.classList.add(`width-8`)
            for (let i = 0; i < (numCells * numCells); i++) {
                playground.innerHTML += `<div class="square">${i+1}</div>`;
            }
            break;
        case 9:
            playground.classList.add(`width-9`)
            for (let i = 0; i < (numCells * numCells); i++) {
                playground.innerHTML += `<div class="square">${i+1}</div>`;
            }
            break;
        case 10:
            playground.classList.add(`width-10`)
            for (let i = 0; i < (numCells * numCells); i++) {
                playground.innerHTML += `<div class="square">${i+1}</div>`;
            }
            break;
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