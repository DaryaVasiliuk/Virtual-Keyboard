import Appends from './appends.js';

class Input extends Appends {
  constructor(parent) {
    super(parent, 'form', 'form');
    this.txtInput = new Appends(this.element, 'textarea', 'input');
    this.txtInput.element.readonly = true;
  }
}

const createInput = () => new Input(document.querySelector('.container'));

export default createInput;