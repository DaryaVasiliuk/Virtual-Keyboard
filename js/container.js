
import Appends from './appends.js';

class Container extends Appends {
  constructor(parent) {
    super(parent, 'div', 'container');
    this.title = new Appends(this.element, 'h1', 'title');
    this.title.element.innerHTML = 'RSS Virtual Keyboard';
  }
}

const createContainer = () => new Container(document.body);

export default createContainer;