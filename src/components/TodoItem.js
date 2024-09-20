import { Component } from "../common/Component.js";

export class TodoItem extends Component {
  render() {
    const todoElement = document.createElement('li');
    todoElement.className = "todo-item";
    
    todoElement.innerHTML = `
      <span style="text-decoration: ${this.props.completed ? 'line-through' : 'none'};">
        ${this.props.description}
      </span>
      <button class="complete-btn">Complete</button>
      <button class="delete-btn">Detete</button>
    `;

    todoElement.querySelector('.complete-btn').addEventListener('click', this.props.onToggle);
    todoElement.querySelector('.delete-btn').addEventListener('click', this.props.onDelete);

    return todoElement;
  }
}