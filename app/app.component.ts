import {Component, Injectable, Pipe, PipeTransform} from 'angular2/core';
import {NgForm} from 'angular2/common';

import {Todo} from './todo';

@Component({
	selector: 'my-app',
	// template: '<h1>ToDo</h1>'
	templateUrl: 'app/app.component.html'
})
export class AppComponent {
	todos: Todo[] = [];
	newTodo = new Todo("", false);
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
}

@Pipe({
	name: "currentFilter",
	pure: false
})
export class CurrentFilterPipe implements PipeTransform {
	transform(item: any[], args: any[]): any {
		
	}
}