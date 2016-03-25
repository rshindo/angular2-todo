import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';

import {Todo} from './todo';

@Component({
	selector: 'my-app',
	// template: '<h1>ToDo</h1>'
	templateUrl: 'app/app.component.html'
})
export class AppComponent {
	todos: Todo[] = [];
	newTodo = new Todo("", "");
	addTodo() {
		this.todos.push(this.newTodo);
		this.newTodo = new Todo("", "");
	}
}