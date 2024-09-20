import { Component } from "../common/Component.js";
import { AddTodo } from "./AddTodo.js";
import { TodoList } from "./TodoList.js";
import { TodoContext } from "../contexts/TodoContext.js";

export class App extends Component {
  constructor() {
    super();
    this.todoContext = new TodoContext();
  }

  render() {
    const container = document.createElement('div');
    container.className = 'container';
    container.innerHTML = `
      <h1>My To Dos</h1>
      <div id="wrapper-add"></div>
      <div id="wrapper-todos"></div>
    `;

    const add = new AddTodo({ onAdd: this.handleAddTodo.bind(this) });
    const todos = new TodoList({ context: this.todoContext });

    add.mount(container.querySelector('#wrapper-add'));
    todos.mount(container.querySelector('#wrapper-todos'));

    return container;
  }

  handleAddTodo(todoText) {
    if (todoText) {
      this.todoContext.addTodo({ text: todoText });
    }
  }
}
