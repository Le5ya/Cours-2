'use strict';
class Todo {
  constructor(form, input, todoList, todoCompleted) {
    this.form =document.querySelector('form');
    this.input =document.querySelector('input');
    this.todoList = document.querySelector('.todo-list');
    this.todoCompleted = document.querySelector('.todo-completed');
    this.todoData = new Map(JSON.parse(localStorage.getItem('toDoList')));

  
  }

  addToStorage() {
     localStorage.setItem('toDoList', JSON.stringify([...this.todoData]));
  }

  render =() => {
    this.todoList.textContent = '';
    this.todoCompleted.textContent = '';
    this.todoData.forEach(this.createItem, this);
    this.addToStorage();
  }

  createItem(todo) {

    const li = document.createElement('li');
    li.classList.add('todo-item');
    li.key = todo.key;
    li.insertAdjacentHTML('beforeend', `
    		<span class="text-todo">${todo.value}</span>
				<div class="todo-buttons">
					<button class="todo-remove"></button>
					<button class="todo-complete"></button>
				</div>
    `);

    if(todo.completed) {
      this.todoCompleted.append(li);
    } else {
      this.todoList.append(li);
    }
  }
  addTodo(e) {
   e.preventDefault();
   if(this.input.value.trim()) {
      const newTodo = {
      value: this.input.value,
      completed: false,
      key: this.generateKey(),
   };
   this.todoData.set(newTodo.key, newTodo);
   this.render();
    }
  }

generateKey() {
 return Math.random().toString(36).substring(2, 15) 
 + Math.random().toString(36).substring(2, 15); 
}
deleteItem() {
 this.todoData.forEach((item) => {
 if(item.textContent === '') {
   remove(item);
 }
 this.addToStorage()
 }); 

}
completedItem(){
  this.todoData.forEach((item) => {
   todoData[item] === todoList[item];
   this.addToStorage();   
  });
  
}

handler() {
this.todoList.addEventListener('click', (event) => {
  let target = event.target;
  if (target.closest('.todo-item') && target.classList.contains('todo-complete')) {
        target = target.closest('.todo-item');      
        target.completed = true;
        this.todoCompleted.append(target);
        this.completedItem();
  } else {
    if (target.closest('.todo-item') && target.classList.contains('todo-remove')){
      target = target.closest('.todo-item'); 
        target.textContent = '';
       target.remove();
         this.deleteItem();
    }
  };
  //  console.log(target);
});
// делегирование
};

  init() {
    this.form.addEventListener('submit', this.addTodo.bind(this));
    this.render();
  }
}
const todo = new Todo('.todo-control', '.header-input', '.todo-list', '.todo-completed');

todo.init();
todo.handler();
//  todo.completedItem();
//  todo.deleteItem();

