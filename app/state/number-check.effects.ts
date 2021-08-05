import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import * as NumberActions from './number-check.actions';

@Injectable()
export class NumberEffects {
	constructor(
		private readonly actions: Actions,
	) {}
	
	/* This effect is called whenever a submitNubmer action is dispatched. Takes the number that is passed
	 * with the action as a prop, and checks if the number is divisible by five. If so, an invalidNumber
	 * action is dispatches; otherwise, a validNumber action is dispatched.
	 */
	submitNumber$ = createEffect(() =>
		this.actions.pipe(
			ofType(NumberActions.submitNumber),
			switchMap((values) => {
				let number = parseInt(values.number);
				
				if(number % 5 == 0) {
					return of(NumberActions.invalidNumber({ message: 'Your number is invalid' }));
				}
				else {
					return of(NumberActions.validNumber({ number: values.number }));
				}
			})
		)
	);
}