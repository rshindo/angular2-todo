import {Pipe} from 'angular2/core';
import {Todo} from './todo';

@Pipe({
	name: 'todoFilter',
	pure: false
})
export class TodoFilter {
	transform(value: Todo[], filter) {
		if(filter[0] == null) {
			return value;
		}
		return value.filter((item) => item.done === filter[0].done);
	}
}