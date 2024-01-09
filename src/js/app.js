import Game from './game/game';
import SitePage from './page/page';
import ScoreBoard from './board/scoreboard';

document.addEventListener("DOMContentLoaded", () => {
  const GameContainer = new SitePage();
  // const page = document.querySelector('.game-container');

  const Goblin = new Game(GameContainer);
  const Board = new ScoreBoard(GameContainer);
  const boardCount = Board.querySelector('.score-board__count');
  console.log(boardCount);
  // Goblin.changeCell();
  // Goblin.changeCell();
  let missed = 0;
  let countdown = setInterval(() => {
    boardCount.innerText = missed;
    missed = Goblin.changeCell();
    if (missed > 5) {
      setTimeout(() => {
        clearInterval(countdown);
        alert('Вы проиграли!');
      }, 100);

    }
    console.log(Goblin.missed);

  }, 1000);
});
