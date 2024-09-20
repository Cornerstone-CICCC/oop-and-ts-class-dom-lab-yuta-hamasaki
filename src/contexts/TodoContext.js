export class TodoContext {
  constructor() {
    this.todos = [];
    this.listeners = [];
  }

  addTodo(todo) {
    this.todos.push({ ...todo, completed: false });
    this.notifyListeners();
  }

  toggleTodo(index) {
    if (this.todos[index]) {
      this.todos[index].completed = !this.todos[index].completed;
      this.notifyListeners();
    }
  }

  deleteTodo(index) {
    this.todos.splice(index, 1);
    this.notifyListeners();
  }

  getTodos() {
    return this.todos;
  }

  addListener(listener) {
    this.listeners.push(listener);
  }

  removeListener(listener) {
    this.listeners = this.listeners.filter(l => l !== listener);
  }

  notifyListeners() {
    this.listeners.forEach(listener => listener());
  }
}