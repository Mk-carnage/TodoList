let popUpOverLay = document.querySelector('.popup-overlay');
let popUpcontent = document.querySelector('.popup-content');
let addButton = document.querySelector('.btn');

addButton.addEventListener('click', (e) => {
    popUpOverLay.style.display = 'block';
    popUpcontent.style.display = 'block';
});

// Storing value from the input
const todoList = [];
let container = document.querySelector('.container');
let add = document.getElementById('add-list');
let listTitle = document.getElementById('Title');
let description = document.getElementById('Description');

add.addEventListener('click', (event) => {
    event.preventDefault();

    const inputTitle = listTitle.value;
    const inputDescription = description.value;

    // Create the div for the list item
    let div = document.createElement('div');
    div.setAttribute('class', 'todo-list-content');
    // Pass the description dynamically using an event listener
    div.setAttribute("onClick", `ListDiscription(${todoList.length})`);
    div.innerHTML = `<ol class="list-content">${inputTitle}</ol>
                    <img class="del-btn" src="del-btn.png" onClick="deleteList(event)">`;
    container.appendChild(div);

    // Add the title and description to todoList
    todoList.push({ title: inputTitle, description: inputDescription });
    console.log(todoList);

    // Close popup
    popUpOverLay.style.display = 'none';
    popUpcontent.style.display = 'none';
});

function deleteList(event){
    event.stopPropagation()
    event.target.parentElement.remove();

};

let descriptionOverlay = document.querySelector('.description-popup-overlay');
let descriptionText = document.querySelector('.description-text');

function ListDiscription(index){
    // Get the specific item from the todoList using its index
    let todoItem = todoList[index];

    // Update the description popup with the corresponding description
    descriptionText.innerHTML = `<h1>${todoItem.title}</h1><p>${todoItem.description}</p>`;

    // Show the description popup
    descriptionOverlay.style.display = 'block';
    descriptionText.style.display = 'block';
}

function cancelList(event){
    event.preventDefault();
    popUpOverLay.style.display = 'none';
    popUpcontent.style.display = 'none';
}

function closeDescription(event){
    event.preventDefault();
    descriptionOverlay.style.display = 'none';
    descriptionText.style.display = 'none';
}
