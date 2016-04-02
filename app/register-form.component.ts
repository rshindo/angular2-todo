import {Component, OnInit, Input} from 'angular2/core';
import {NgForm} from 'angular2/common';

import {Todo} from './todo';
import {TodoService} from './todo.service';

@Component({
	selector: 'register-form',
	templateUrl: 'app/register-form.component.html'
})
export class RegisterFormComponent {
	todos: Todo[];
	newTodo: Todo = new Todo("",false);
	constructor (private _todoService: TodoService) { }
	addTodo() {
		this._todoService.addTodo(this.newTodo);
		this.newTodo = new Todo("", false);
	}
}