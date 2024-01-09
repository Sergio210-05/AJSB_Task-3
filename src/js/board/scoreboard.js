import './scoreboard.css';

export default class ScoreBoard {
  constructor(container) {
    const scoreBoard = document.createElement('div');
    // container.createElement('div');
    scoreBoard.classList.add('score-board');
    container.appendChild(scoreBoard);

    const header = document.createElement('div');
    header.classList.add('score-board__header');
    scoreBoard.appendChild(header);
    header.innerText = 'Пропущено:';

    const count = document.createElement('div');
    count.classList.add('score-board__count');
    scoreBoard.appendChild(count);

    return scoreBoard;
  }
}