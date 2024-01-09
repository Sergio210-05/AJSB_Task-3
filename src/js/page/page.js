import './page.css';

export default class SitePage {
  constructor() {
    const body = document.querySelector('body');
    const gameContainer = document.createElement('div');
    // parent.createElement('div');
    gameContainer.classList.add('game-container');
    body.appendChild(gameContainer);
    return gameContainer;
  }
}