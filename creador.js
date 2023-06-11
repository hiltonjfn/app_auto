function li(x,z){
    // Criação dos elementos HTML
const li = document.createElement('li');
li.className = 'list-group-item';

const divContainer = document.createElement('div');
divContainer.className = 'container-flex';

const divRow = document.createElement('div');
divRow.className = 'row';

const divCol = document.createElement('div');
divCol.className = 'col-10';
divCol.textContent = x;

const inputCheckbox = document.createElement('input');
inputCheckbox.className = 'form-check-input col-2';
inputCheckbox.type = 'checkbox';
inputCheckbox.value = z;
inputCheckbox.id = 'flexCheckDefault';

// Anexando os elementos corretamente
divRow.appendChild(divCol);
divRow.appendChild(inputCheckbox);

divContainer.appendChild(divRow);

li.appendChild(divContainer);

// Encontrar a div de destino
const divRes = document.getElementById('res1');

// Adicionar o elemento à div de destino
//divRes.appendChild(li);

const tempElement = document.createElement('div');
tempElement.appendChild(li);

// Obter o código HTML como string
const htmlString = tempElement.innerHTML;

return htmlString;
}