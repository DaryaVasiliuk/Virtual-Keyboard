import createContainer from './js/container.js';
import createInput from './js/input.js';
import createKeyboard from './js/keyboard.js';
import createFooter from './js/footer.js';

createContainer();
createInput();
createKeyboard();
createFooter();


const input = document.querySelector(".input");


const getKeyEvent = (event) =>{
    input.focus();
    let cursor = input.value.length;
    if(event.target.classList.contains('letter') || event.target.classList.contains('number')) {
        console.log(input.textContent);
        input.textContent += event.target.textContent;
        cursor += 1;
        input.setSelectionRange(cursor, cursor);
    }
    if (event.target.textContent == 'Enter') {
        input.textContent += `\n`;
    } else if(event.target.textContent == 'TAB') {
        input.textContent += '    ';
    } else if(event.target.textContent == '') {
        input.textContent += ' ';
    }

}

const keyboard = document.querySelector(".keyboard");
keyboard.addEventListener('click', getKeyEvent);


const getKeyBoardDownEvent = (event) =>{
    const id = document.getElementById(event.code);
    id.classList.add("active")
 }
input.addEventListener('keydown', getKeyBoardDownEvent);

const getKeyBoardUpEvent = (event) =>{
    const id = document.getElementById(event.code);
    id.classList.remove("active")
}
input.addEventListener('keyup', getKeyBoardUpEvent);

function runOnKeys(func, ...codes) {
    let pressed = new Set();
      
    document.addEventListener('keydown', function(event) {
        pressed.add(event.code);
            for (let code of codes) { 
                if (!pressed.has(code)) {
                    return;
                }
            }
        pressed.clear();
        func();
    });
    document.addEventListener('keyup', function(event) {
        pressed.delete(event.code);
    });
}

runOnKeys(()=> {
    changeLang();
}, 'AltLeft', 'ControlLeft');

runOnKeys(()=> {
    changeLang();
}, 'AltRight', 'ControlRight');

runOnKeys(()=> {
    changeLang();
}, 'AltRight', 'ControlLeft');

runOnKeys(()=> {
    changeLang();
}, 'AltLeft', 'ControlRight');


function changeLang() {
    let lang = localStorage.getItem('lang');
    
    if(lang === 'ru') {
        keyboard.removeEventListener('click', getKeyEvent);
        document.querySelector(".keyboard").remove();
        localStorage.setItem('lang', 'en');
        createKeyboard();
        document.querySelector(".keyboard").addEventListener('click', getKeyEvent)
    } else {
        if(!lang) {
            localStorage.setItem('lang','en')
        }
        document.querySelector(".keyboard").remove();
        localStorage.setItem('lang', 'ru');
        createKeyboard();
        document.querySelector(".keyboard").addEventListener('click', getKeyEvent)
    }

}