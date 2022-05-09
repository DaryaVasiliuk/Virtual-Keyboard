
import key from './key.js';
import Appends from './appends.js';

class KeyBoard extends Appends {
  constructor(parent) {
    super(parent, 'div', 'keyboard');

    let lang = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'ru';
    key.forEach((e) => {
      this.row = new Appends(this.element, 'div', 'row');
      for (let i = 0; i < e.length; i += 1) {
        this.btn = new Appends(this.row.element, 'button', `${e[i].class}`);
        this.btn.element.textContent = `${e[i].key[lang]}`;
        this.btn.element.id = `${e[i].code}`;
      }
    });
  }
  
}

const createKeyboard = () => new KeyBoard(document.querySelector('.container'));

export default createKeyboard;