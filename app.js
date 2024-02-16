let cells = document.querySelectorAll('.cell')
let btnReset = document.querySelector('.btnReset');
let turn = 1;

for(let cell of cells){
    cell.addEventListener('click', () =>{
        if(!cell.textContent){
            cell.textContent = turn % 2 ? 'X' : 'O'
            turn++;
        }
    })
}

btnReset.addEventListener('click', () =>{
    for (let cell of cells){
        cell.textContent = ' ';
    }
    turn = 1;
});