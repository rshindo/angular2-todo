import {Injectable, EventEmitter} from 'angular2/core';
import {Todo} from './todo';

@Injectable()
export class TodoService {
	public itemAdded$: EventEmitter<Todo>;
	todos: Todo[] = [];
	constructor() {
		this.itemAdded$ = new EventEmitter();
	}
	getTodos() {
		return this.todos;
	}
	addTodo(todo:Todo) {
		this.todos.push(todo);
		this.itemAdded$.emit(todo);
	}
}