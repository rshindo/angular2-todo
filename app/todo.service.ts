import {Injectable} from 'angular2/core';
import {Todo} from './todo';

@Injectable()
export class TodoService {
	todos: Todo[] = [];
	getTodos() {
		return this.todos;
	}
	addTodo(todo:Todo) {
		this.todos.push(todo);
	}
}