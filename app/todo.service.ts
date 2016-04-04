import {Injectable, EventEmitter} from 'angular2/core';
import {Todo} from './todo';

@Injectable()
export class TodoService {
	public itemRemoved$: EventEmitter<Todo[]>;
	todos: Todo[] = [];
	constructor() {
		this.itemRemoved$ = new EventEmitter();
	}
	getTodos() {
		return this.todos;
	}
	addTodo(todo:Todo) {
		this.todos.push(todo);
	}
	removeDoneTodo() {
		this.todos = this.todos.filter(todo => todo.done == false);
		this.itemRemoved$.emit(this.todos);
	}
	removeTodo(currentTodo: Todo) {
		var index = this.todos.indexOf(currentTodo, 0);
		if(index > -1) {
			this.todos.splice(index, 1);
		}
	}
}