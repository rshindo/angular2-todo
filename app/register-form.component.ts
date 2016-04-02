import {Component, OnInit, Input} from 'angular2/core';
import {NgForm} from 'angular2/common';

import {Todo} from './todo';

@Component({
	selector: 'register-form',
	templateUrl: 'app/register-form.component.html',
	inputs: ['todos']
})
export class RegisterFormComponent {
	@Input() todos: Todo[];
	newTodo: Todo = new Todo("",false);
	constructor () {}
	addTodo() {
		this.todos.push(this.newTodo);
		this.newTodo = new Todo("", false);
	}
}