// This file manages the creation, manipulation, and storage of todo list items using local and session storage.
// Selecting elements from the DOM
const localTodosContainer = document.getElementById('local-storage-todos-container'); // Selects container for local todos
const localInputEle = document.getElementById('local-storage-todo-input-ele'); // Selects input element for local todos
const localAddTaskBtn = document.getElementById('local-storage-add-task-btn'); // Selects button for adding local todos
const sessionTodosContainer = document.getElementById('session-storage-todos-container'); // Selects container for session todos
const sessionInputEle = document.getElementById('session-storage-todo-input-ele'); // Selects input element for session todos
const sessionAddTaskBtn = document.getElementById('session-storage-add-task-btn'); // Selects button for adding session todos

// Function to create list item elements for todos
function createTodoLiElements(todoArray, storeType) {
  return todoArray.map((i, index) => {
    // Creating necessary elements
    const liElement = document.createElement('li'); // Creates list item element
    const checkboxEle = document.createElement('input'); // Creates checkbox element
    const labelEle = document.createElement('label'); // Creates label element

    // Setting attributes for checkbox and label elements
    checkboxEle.setAttribute('type', 'checkbox'); // Sets type attribute for checkbox
    checkboxEle.setAttribute('id', `${storeType}-chbx-${index}`); // Sets unique id for checkbox
    labelEle.setAttribute('for', `${storeType}-chbx-${index}`); // Sets 'for' attribute for label

    // Checking if the todo is already marked as done and updating UI accordingly
    if (i.checked) {
      checkboxEle.checked = true;
      labelEle.classList.add('todo-task-done'); // Adds class for styling completed tasks
    }

    // Adding event listeners to checkboxes for toggling todo status
    storeType === 'local' &&
      checkboxEle.addEventListener('click', (e) => {
        const todoArr = JSON.parse(localStorage.getItem('codesweetlyStore')); // Retrieves local todo array
        todoArr[e.target.getAttribute('id').split('-')[2]].checked =
          !todoArr[e.target.getAttribute('id').split('-')[2]].checked; // Toggles todo status
        localStorage.setItem('codesweetlyStore', JSON.stringify(todoArr)); // Stores updated todo array
        labelEle.classList.toggle('todo-task-done'); // Toggles class for styling
      });

    storeType === 'session' &&
      checkboxEle.addEventListener('click', (e) => {
        const todoArr = JSON.parse(sessionStorage.getItem('codesweetlyStore')); // Retrieves session todo array
        todoArr[e.target.getAttribute('id').split('-')[2]].checked =
          !todoArr[e.target.getAttribute('id').split('-')[2]].checked; // Toggles todo status
        sessionStorage.setItem('codesweetlyStore', JSON.stringify(todoArr)); // Stores updated todo array
        labelEle.classList.toggle('todo-task-done'); // Toggles class for styling
      });

    // Setting text content for the label element
    labelEle.textContent = i.text; // Sets text content of label to todo text

    // Appending checkbox and label elements to the list item
    liElement.append(checkboxEle, labelEle); // Appends checkbox and label to list item

    // Returning the list item element
    return liElement; // Returns created list item element
  });
}

// Event listener for 'load' event to populate todos on page load
window.addEventListener('load', (() => {
  const localTodoArray = JSON.parse(localStorage.getItem('codesweetlyStore')) || []; // Retrieves local todos from storage or initializes empty array
  const localTodoLiElements = createTodoLiElements(localTodoArray, 'local'); // Creates list item elements for local todos
  const sessionTodoArray = JSON.parse(sessionStorage.getItem('codesweetlyStore')) || []; // Retrieves session todos from storage or initializes empty array
  const sessionTodoLiElements = createTodoLiElements(sessionTodoArray, 'session'); // Creates list item elements for session todos
  localTodosContainer.replaceChildren(...localTodoLiElements); // Replaces children of local todos container with created list item elements
  sessionTodosContainer.replaceChildren(...sessionTodoLiElements); // Replaces children of session todos container with created list item elements
})());

// Event listener for adding a new local todo
localAddTaskBtn.addEventListener('click', () => {
  if (localInputEle.value.match(/^\w/)) {
    const currentTodoArray = JSON.parse(localStorage.getItem('codesweetlyStore')) || []; // Retrieves current local todos from storage or initializes empty array
    const newTodoArray = [
      ...currentTodoArray,
      { checked: false, text: localInputEle.value }, // Adds new todo to array
    ];
    const todoLiElements = createTodoLiElements(newTodoArray, 'local'); // Creates list item elements for updated local todo array
    localStorage.setItem('codesweetlyStore', JSON.stringify(newTodoArray)); // Stores updated local todo array
    localTodosContainer.replaceChildren(...todoLiElements); // Replaces children of local todos container with updated list item elements
    localInputEle.value = ''; // Resets input field
  }
});

// Event listener for adding a new session todo
sessionAddTaskBtn.addEventListener('click', () => {
  if (sessionInputEle.value.match(/^\w/)) {
    const currentTodoArray = JSON.parse(sessionStorage.getItem('codesweetlyStore')) || []; // Retrieves current session todos from storage or initializes empty array
    const newTodoArray = [
      ...currentTodoArray,
      { checked: false, text: sessionInputEle.value }, // Adds new todo to array
    ];
    const todoLiElements = createTodoLiElements(newTodoArray, 'session'); // Creates list item elements for updated session todo array
    sessionStorage.setItem('codesweetlyStore', JSON.stringify(newTodoArray)); // Stores updated session todo array
    sessionTodosContainer.replaceChildren(...todoLiElements); // Replaces children of session todos container with updated list item elements
    sessionInputEle.value = ''; // Resets input field
  }
});
