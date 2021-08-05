import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { NumberService } from './services/number.service';

@component({
	selector: 'app-root',
	templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
	title = 'ngrx-valid-number-check';
	
	form!: FormGroup;
	/* Message is updated automatically by subscribing to the message$
	 * observble in numberService, which pipes the selector for the
	 * message from the store.
	 */
	message!: string;
	
	constructor(
		private readonly numberService: NumberService;
	) {}
	
	ngOnInit(): void {
		this.form = new FormGroup({
			number: new FormControl(''),
		});
		
		//Get the current message asynchronously from the NgRx store
		this.numberService.message$.pipe().subscribe(message => {
			this.message = message;
		});
	}
	
	onsubmit(): void {
		let number = this.form.get('number')?.value;
		
		/* numberService takes number and dispatches the
		 * submitNumber action to update the state via the reducer
		 */
		this.numberService.submitNumber(number);
	}
}