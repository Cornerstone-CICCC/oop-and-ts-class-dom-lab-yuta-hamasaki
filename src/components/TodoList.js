import { Component } from "../common/Component.js";
import { TodoItem } from "./TodoItem.js";

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.handleTodosChange = this.handleTodosChange.bind(this);
  }

  componentDidMount() {
    this.props.context.addListener(this.handleTodosChange);
  }

  componentWillUnmount() {
    this.props.context.removeListener(this.handleTodosChange);
  }

  handleTodosChange() {
    this.update();
  }

  render() {
    const todoListElement = document.createElement('ul');
    todoListElement.className = "todo-list";

    const todos = this.props.context.getTodos();

    todos.forEach((todo, index) => {
      const todoItem = new TodoItem({
        description: todo.text,
        completed: todo.completed,
        onToggle: () => this.props.context.toggleTodo(index),
        onDelete: () => this.props.context.deleteTodo(index)
      });
      todoListElement.appendChild(todoItem.render());
    });

    return todoListElement;
  }
}