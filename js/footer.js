import Appends from './appends.js';

class Footer extends Appends {
  constructor(parent) {
    super(parent, 'div', 'footer');
    this.changeLang = new Appends(this.element, 'p', 'description');
    this.changeLang.element.innerHTML = 'Клавиатура создана в операционной системе Windows <br> Для переключения языка комбинация: левыe ctrl + alt';
   
  }
}

const createFooter = () => new Footer(document.body);

export default createFooter;