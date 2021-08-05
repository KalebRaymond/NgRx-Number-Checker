import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { State } from '../state/number-check.reducer';
import * as Actions from '../state/number-check.actions';
import * as Selectors from '..state/number-check.selector';

@Injectable({
	providedIn: 'root'
})
export class NumberService {
	message$!: Observable<string>;
	
	constructor(
		private readonly store: Store<State,
	) {
		//Uodate values automatically when the state is replaced in the reducer
		this.message$ = this.store.pipe(select(Selectors.getMessage));
	}
	
	submitNumber(number: string): void {
		//Dispatch a submitNumber action. This activates the submitNumber$ effect in number-check.effects.ts
		//and passes the selected number as a parameter
		this.store.dispatch(Actions.submitNumber({ number }));
	}
}