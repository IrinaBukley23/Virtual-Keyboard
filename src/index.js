import './style.scss';

console.log('start project');

let keyboardContainer = document.createElement('div');
keyboardContainer.className = 'container';
document.body.append(keyboardContainer);

let keyboardTextarea = document.createElement('textarea');
keyboardTextarea.className = 'textarea';
keyboardTextarea.rows = 12;
keyboardTextarea.cols = 130;
keyboardContainer.append(keyboardTextarea);

let ruKeys = [
    ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'], 
    ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del'], 
    ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'], 
    ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Up', 'Shift'], 
    ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Left', 'Down', 'Right', 'Ctrl']
];

let enKeys = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
    ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'up', 'Shift', 'Ctrl'], 
    ['Win', 'Alt', 'Space', 'Alt', 'Left', 'Down', 'Right', 'Ctrl']
];

let keyBlock = document.createElement('div');
keyBlock.className = 'key-block';
keyboardContainer.append(keyBlock);

let button; 

ruKeys.forEach(item => {
    let row = document.createElement('div');
    row.className = 'key-row';
    keyBlock.append(row);
    
    item.forEach(element => {
        button = document.createElement('div');
        button.className = `button button-${element}key`;
        button.innerHTML = element;
        row.append(button);
    })
})