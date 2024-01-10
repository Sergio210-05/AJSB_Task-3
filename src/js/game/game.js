export default class Game {
  constructor(container, size=4) {
    this.cells = [];
    this.missed = 0;
    this.goals  = 0;
    const field = document.createElement('div');
    field.classList.add('field');
    this.field = field;
    this.onClick = this.onClick.bind(this);
    // this.fair = this.fair.bind(this);
    this.field.addEventListener('click', this.onClick);

    for (let sizeA = 0; sizeA < size; sizeA++) {
      const row = document.createElement('div');
      row.classList.add('row');
      for (let sizeB = 0; sizeB < size; sizeB++) {
        const column = document.createElement('div');
        column.classList.add('column');
        row.appendChild(column);
        this.cells.push(column);
      }
      field.appendChild(row);
    }
    // const body = document.querySelector('body');
    // body.appendChild(field);
    container.appendChild(field);
    // return field;
  }

  changeCell(fairCount) {
    const currentCell = document.querySelector('.cell__active');
    let newCellIndex;
    do {
      newCellIndex = Math.floor(Math.random() * this.cells.length);
    } while ( this.cells[newCellIndex].classList.contains('cell__active') );
    
    if (currentCell) {
      currentCell.classList.remove('cell__active');
    }
    this.cells[newCellIndex].classList.add('cell__active');
    this.missed += 1;
    fairCount.innerText = this.missed;
    return this.missed;
  }

  onClick(e) {
    // console.log(e.target.classList);
    if (e.target.classList.contains('cell__active')) {
      const fairCount = document.querySelector('.fair-board__count');
      const goalsCount = document.querySelector('.score-board__count');
      this.missed = 0;
      this.goals++;
      fairCount.innerText = this.missed;
      goalsCount.innerText = this.goals;
      console.log('Win!', this.missed);
      // this.changeCell(fairCount);
      // setTimeout(() => {
      e.target.classList.remove('cell__active');
      // }, 1000)
      

      return;
    }
  }
}
