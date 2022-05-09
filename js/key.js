const key = [
    [
        {
            key: { ru: 'ё', en: '`' }, shift: { ru: 'Ё', en: '~' }, code: 'Backquote', class: 'key tilda Backquote letter',
        },
        {
            key: { ru: '1', en: '1' }, shift: { ru: '!', en: '!' }, code: 'Digit1', class: 'key number',
        },
        {
            key: { ru: '2', en: '2' }, shift: { ru: '@', en: '@' }, code: 'Digit2', class: 'key number',
        },
        {
            key: { ru: '3', en: '3' }, shift: { ru: '#', en: '#' }, code: 'Digit3', class: 'key number',
        },
        {
            key: { ru: '4', en: '4' }, shift: { ru: '$', en: '$' }, code: 'Digit4', class: 'key number',
        },
        {
            key: { ru: '5', en: '5' }, shift: { ru: '%', en: '%' }, code: 'Digit5', class: 'key number',
        },
        {
            key: { ru: '6', en: '6' }, shift: { ru: '^', en: '^' }, code: 'Digit6', class: 'key number',
        },
        {
            key: { ru: '7', en: '7' }, shift: { ru: '&', en: '&' }, code: 'Digit7', class: 'key number',
        },
        {
            key: { ru: '8', en: '8' }, shift: { ru: '*', en: '*' }, code: 'Digit8', class: 'key number',
        },
        {
            key: { ru: '9', en: '9' }, shift: { ru: '(', en: '(' }, code: 'Digit9', class: 'key number',
        },
        {
            key: { ru: '0', en: '0' }, shift: { ru: ')', en: ')' }, code: 'Digit0', class: 'key number',
        },
        {
            key: { ru: '-', en: '-' }, shift: { ru: '_', en: '_' }, code: 'Minus', class: 'key letter minus',
        },
        {
            key: { ru: '=', en: '=' }, shift: { ru: '+', en: '+' }, code: 'Equal', class: 'key letter Equal',
        },
        {
            key: { ru: 'Backspace', en: 'Backspace' }, code: 'Backspace', class: 'key key_backspace Backspace', noType: true,
        },
    ],
    [
        {
            key: { ru: 'Tab', en: 'Tab' }, code: 'Tab', class: 'key Tab', noType: true,
        },
        {
            key: { ru: 'й', en:  'q' }, shift: { ru: 'Й', en: 'Q' }, code: 'KeyQ', class: 'key letter',
        },
        {
            key: { ru: 'ц', en: 'w' }, shift: { ru: 'Ц', en: 'W' }, code: 'KeyW', class: 'key letter',
        },
        {
            key: { ru: 'у', en: 'e' }, shift: { ru: 'У', en: 'E' }, code: 'KeyE', class: 'key letter',
        },
        {
            key: { ru: 'к', en: 'r' }, shift: { ru: 'К', en: 'R' }, code: 'KeyR', class: 'key letter',
        },
        {
            key: { ru: 'е', en: 't' }, shift: { ru: 'Е', en: 'T' }, code: 'KeyT', class: 'key letter',
        },
        {
            key: { ru: 'н', en: 'y' }, shift: { ru: 'Н', en: 'Y' }, code: 'KeyY', class: 'key letter',
        },
        {
            key: { ru: 'г', en: 'u' }, shift: { ru: 'Г', en: 'U' }, code: 'KeyU', class: 'key letter',
        },
        {
            key: { ru: 'ш', en: 'i' }, shift: { ru: 'Ш', en: 'I' }, code: 'KeyI', class: 'key letter',
        },
        {
            key: { ru: 'щ', en: 'o' }, shift: { ru: 'Щ', en: 'O' }, code: 'KeyO', class: 'key letter',
        },
        {
            key: { ru: 'з', en: 'p' }, shift: { ru: 'З', en: 'P' }, code: 'KeyP', class: 'key letter',
        },
        {
            key: { ru: 'х', en: '[' }, shift: { ru: 'Х', en: '[' }, code: 'BracketLeft', class: 'key letter BracketLeft',
        },
        {
            key: { ru: 'ъ', en: ']' }, shift: { ru: 'Ъ', en: ']' }, code: 'BracketRight', class: 'key letter BracketRight',
        },
        {
            key: { ru: '\\', en: '\\' }, shift: { ru: '\\', en: '\\' }, code: 'Backslash', class: 'key letter key_backslash Backslash',
        },
        {
            key: { ru: 'Del', en: 'Del' }, code: 'Delete', class: 'key key_del Delete',
        },
    ],
    [
        {
            key: { ru: 'CapsLock', en: 'CapsLock' }, code: 'CapsLock', class: 'key CapsLock', noType: true,
        },
        {
            key: { ru: 'ф', en: 'a' }, shift: { ru: 'Ф', en: 'A' }, code: 'KeyA', class: 'key letter',
        },
        {
            key: { ru: 'ы', en: 's' }, shift: { ru: 'Ы', en: 'S' }, code: 'KeyS', class: 'key letter',
        },
        {
            key: { ru: 'в', en: 'd' }, shift: { ru: 'В', en: 'D' }, code: 'KeyD', class: 'key letter',
        },
        {
            key: { ru: 'а', en: 'f' }, shift: { ru: 'А', en: 'F' }, code: 'KeyF', class: 'key letter',
        },
        {
            key: { ru: 'п', en: 'g' }, shift: { ru: 'П', en: 'G' }, code: 'lKeyG', class: 'key letter',
        },
        {
            key: { ru: 'р', en: 'h' }, shift: { ru: 'Р', en: 'H' }, code: 'KeyH', class: 'key letter',
        },
        {
            key: { ru: 'о', en: 'j' }, shift: { ru: 'О', en: 'J' }, code: 'KeyJ', class: 'key letter',
        },
        {
            key: { ru: 'л', en: 'k' }, shift: { ru: 'Л', en: 'K' }, code: 'KeyK', class: 'key letter',
        },
        {
            key: { ru: 'д', en: 'l' }, shift: { ru: 'Д', en: 'L' }, code: 'KeyL', class: 'key letter',
        },
        {
            key: { ru: 'ж', en: ';' }, shift: { ru: 'Ж', en: ':' }, code: 'Semicolon', class: 'key letter Semicolon',
        },
        {
            key: { ru: 'э', en: '\'' }, shift: { ru: 'Э', en: '"' }, code: 'Quote', class: 'key letter Quote',
        },
        {
            key: { ru: 'Enter', en: 'Enter' }, code: 'Enter', class: 'key key_enter Enter', noType: true,
        },
    ],
    [ 
        {
            key: { ru: 'Shift', en: 'Shift' }, code: 'ShiftLeft', class: 'key key_leftshift ShiftLeft', noType: true,
        },
        {
            key: { ru: 'я', en: 'z' }, shift: { ru: 'Я', en: 'Z' }, code: 'KeyZ', class: 'key letter',
        },
        {
            key: { ru: 'ч', en: 'x' }, shift: { ru: 'Ч', en: 'X' }, code: 'KeyX', class: 'key letter',
        },
        {
            key: { ru: 'с', en: 'c' }, shift: { ru: 'С', en: 'C' }, code: 'KeyC', class: 'key letter',
        },
        {
            key: { ru: 'м', en: 'v' }, shift: { ru: 'М', en: 'V' }, code: 'KeyV', class: 'key letter',
        },
        {
            key: { ru: 'и', en: 'b' }, shift: { ru: 'И', en: 'B' }, code: 'KeyB', class: 'key letter',
        },
        {
            key: { ru: 'т', en: 'n' }, shift: { ru: 'Т', en: 'N' }, code: 'KeyN', class: 'key letter',
        },
        {
            key: { ru: 'ь', en: 'm' }, shift: { ru: 'Ь', en: 'M' }, code: 'KeyM', class: 'key letter',
        },
        {
            key: { ru: 'б', en: ',' }, shift: { ru: 'Б', en: '<' }, code: 'Comma', class: 'key letter Comma',
        },
        {
            key: { ru: 'ю', en: '.' }, shift: { ru: 'Ю', en: '>' }, code: 'Period', class: 'key letter Period',
        },
        {
            key: { ru: '.', en: '/' }, shift: { ru: ',', en: '?' }, code: 'Slash', class: 'key letter Slash',
        },
        {
            key: { ru: '▲', en: '▲' }, code: 'ArrowUp', noType: true, class: 'key ArrowUp',
        },
        {
            key: { ru: 'Shift', en: 'Shift' }, code: 'ShiftRight', class: 'key key_rightshift ShiftRight', noType: true,
        },
    ],
    [ 
        {
            key: { ru: 'Cntrl', en: 'Cntrl' }, code: 'ControlLeft', class: 'key key_ctrl ControlLeft', noType: true,
        },
        {
            key: { ru: 'Win', en: 'Win' }, code: 'Windows', class: 'key key_windows Windows', noType: true,
        },
        {
            key: { ru: 'Alt', en: 'Alt' }, code: 'AltLeft', class: 'key key_leftalt AltLeft', noType: true,
        },
        { 
            key: { ru: ' ', en: ' ' }, code: 'Space', class: 'key key_space Space' },
        {
            key: { ru: 'Alt', en: 'Alt' }, code: 'AltRight', class: 'key key_rightalt AltRight', noType: true,
        },
        {
            key: { ru: '◄', en: '◄' }, code: 'ArrowLeft', noType: true, class: 'key  ArrowLeft',
        },
        {
            key: { ru: '▼', en: '▼' }, code: 'ArrowDown', noType: true, class: 'key  ArrowDown',
        },
        {
            key: { ru: '►', en: '►' }, code: 'ArrowRight', noType: true, class: 'key ArrowRight',
        },
        {
            key: { ru: 'Cntrl', en: 'Cntrl' }, code: 'ControlRight', class: 'key key_ctrl ControlRight', noType: true,
        },
    ],
];

export default key;