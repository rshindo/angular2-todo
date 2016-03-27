import {Directive, Input} from 'angular2/core';
import {TemplateRef, ViewContainerRef, ElementRef} from 'angular2/core';

declare var jQuery: any;

@Directive({
	selector: '[mySelect]'
})
export class MySelectDirective {
	constructor(
		private _elementRef: ElementRef,
		private _templateRef: TemplateRef,
		private _viewContainerRef: ViewContainerRef
	) {}

	@Input() set mySelect(condition: boolean) {
		if(condition) {
			jQuery(this._elementRef.nativeElement).select();
		}
	}
}