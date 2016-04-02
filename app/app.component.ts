import {Component, Injectable, Pipe, PipeTransform, OnInit} from 'angular2/core';
import {NgForm} from 'angular2/common';

import {Todo} from './todo';
import {TodoFilter} from './todo-filter.pipe';
import {MySelectDirective} from './my-select.directive';

import {TodoService} from './todo.service';

import {RegisterFormComponent} from './register-form.component';

@Component({
	selector: 'my-app',
	// template: '<h1>ToDo</h1>'
	pipes: [TodoFilter],
	directives: [RegisterFormComponent, MySelectDirective],
	templateUrl: 'app/app.component.html',
	providers: [TodoService]
})
export class AppComponent implements OnInit {
	todos: Todo[];
	editing:Todo = null;
	originalTitile:string;
	currentFilter = null;
	filter = {
		remaining: { done : false },
		done: { done: true }
	}
	constructor(private _todoService:TodoService) {}
	ngOnInit() {
		this.todos = this._todoService.getTodos();
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
	checkAll() {
		var state = !!this.remainingCount;
		this.todos.forEach(todo => todo.done = state);
	}
	removeDoneTodo() {
		this.todos = this.todos.filter(todo => todo.done === false);
	}
	removeTodo(currentTodo:Todo) {
		this.todos = this.todos.filter(todo => currentTodo != todo);
	}
}
