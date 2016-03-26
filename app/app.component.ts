import {Component, Injectable, Pipe, PipeTransform} from 'angular2/core';
import {NgForm} from 'angular2/common';

import {Todo} from './todo';
import {TodoFilter} from './todo-filter.pipe';

@Component({
	selector: 'my-app',
	// template: '<h1>ToDo</h1>'
	pipes: [TodoFilter],
	templateUrl: 'app/app.component.html'
})
export class AppComponent {
	todos: Todo[] = [];
	newTodo = new Todo("", false);
	currentFilter = null;
	filter = {
		remaining: { done : false },
		done: { done: true }
	}
	addTodo() {
		this.todos.push(this.newTodo);
		this.newTodo = new Todo("", false);
	}
	get size() {
		return this.todos.length;
	}
	get doneSize() {
		return this.todos.filter( todo => todo.done === true).length;
	}
	changeFilter(condition) {
		this.currentFilter = condition;
	}
}
