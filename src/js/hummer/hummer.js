export default class Hummer {
  constructor(missed=0) {
    this._missed = missed;
    // console.log(this._missed);
    this.field = document.querySelector('.field');
    this.onClick = this.onClick.bind();
    // console.log(this.field);
    this.field.addEventListener('click', this.onClick);
    return false;
  }

  onClick(e) {
    console.log(e.target.classList);
    if (e.target.classList.contains('cell__active')) {
      // this._missed = 0;
      console.log('Win!', this._missed);
      return true;
    } else {
      return false;
    }
    // e.preventDefault();

  }
}