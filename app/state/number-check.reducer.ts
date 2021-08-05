import { Action, createReducer, on } from '@ngrx/store';

import * as Actions from './number-check.action';

export interface State {
	message: string,
}

export const initialState: State = {
	message: '';
}

//Executes a certain on() function depending on the action that is dispatched
export function reducer(existing: State, action: Action) {
	return createReducer(
		initialState,
		on(Actions.validNumber, (state, {number}): State => {
			//Set the message underneath the search bar to the number that was entered
			return {
				...state,
				message: number,
			}
		}),
		on(Actions.invalidNumber, (state, {message}): State => {
			//Set the message underneath the search bar equal to the message prop
			return {
				...state,
				message: message,
			}
		}),
	)(existingState, action);
}