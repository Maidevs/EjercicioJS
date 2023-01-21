// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click
const button = document.createElement('button');
button.setAttribute('id', 'btnToClick');
button.innerText = 'Haz click aquí'
document.body.append(button);

const infoClick = document.querySelector('.click');
button.addEventListener("click", getEventInfo);

function getEventClick(){
    console.log(`Información del evento es; ${infoClick.event}`);
}

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const inFocus = document.querySelector('.focus')
inFocus.addEventListener('focus', getInputValue);

function getInputValue(){
    console.log(`Valor del focus es;${inFocus.value}`);
}
// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const valorInput = document.querySelector('.value');

valorInput.addEventListener('input', addInputValue);
function addInputValue(event) {
    console.log(event.target.value);
}