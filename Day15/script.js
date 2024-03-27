const addTasks = document.querySelector('.add-tasks');
const tasksList = document.querySelector('.tasks');
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function addTask(e){
    e.preventDefault(); // Preventing from refreshing every submit
    //value is the users input text stored in value variable
    const textName = (this.querySelector('[name=item]')).value;
    const task = {
        textName,
        done: false
    };

    tasks.push(task);
    populateTask(tasks, tasksList);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    //resets the input field to the beginning.
    this.reset();
}

function populateTask(tasks = [], List) {
    List.innerHTML = tasks.map((task, i) => {
        return `
            <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${task.done ? 'checked' : ''} />
            <label for="item${i}">${task.textName}</label>
            </li>
        `;
    }).join(''); // makes all the strings into one string
}


function toggleDone(e){
    if(!e.target.matches('input')) return; // skip this unless its an input
    const el = e.target;
    const index =el.dataset.index;
    // flipping between true and false
    tasks[index].done = !tasks[index].done;
    //store
    localStorage.setItem('tasks', JSON.stringify(tasks));
    //visiblity
    populateTask(tasks, tasksList);
}

addTasks.addEventListener('submit', addTask);
tasksList.addEventListener('click', toggleDone);
populateTask(tasks, tasksList);



