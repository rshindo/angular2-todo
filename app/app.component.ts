import {Component, Injectable, Pipe, PipeTransform} from 'angular2/core';
import {NgForm} from 'angular2/common';

import {Todo} from './todo';
import {TodoFilter} from './todo-filter.pipe';
import {MySelectDirective} from './my-select.directive';

@Component({
	selector: 'my-app',
	// template: '<h1>ToDo</h1>'
	pipes: [TodoFilter],
	directives: [MySelectDirective],
	templateUrl: 'app/app.component.html'
})
export class AppComponent {
	todos: Todo[] = [];
	newTodo = new Todo("", false);
	editing:Todo = null;
	originalTitile:string;
	currentFilter = null;
	filter = {
		remaining: { done : false },
		done: { done: true }
	}
	addTodo() {
		this.todos.push(this.newTodo);
		this.newTodo = new Todo("", false);
	}
	get allCount() {
		return this.todos.length;
	}
	get doneCount() {
		return this.todos.filter(todo => todo.done === true).length;
	}
	get remainingCount() {
		return this.todos.filter(todo => todo.done === false).length;
	}
	editTodo(todo: Todo) {
		this.originalTitile = todo.title;
		this.editing = todo;
	}
	changeFilter(condition) {
		this.currentFilter = condition;
	}
	doneEdit(todoForm) {
		if(!todoForm.valid) {
			this.editing.title = this.originalTitile;
		}
		this.editing = this.originalTitile = null;
	}
}
