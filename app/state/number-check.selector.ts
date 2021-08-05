import { createFeatureSelector, creatSelector } from '@ngrx/store';
import { State } from '.number-check.reducer';

//See app.module.ts imports
export const getNumberCheckState = createFeatureSelector<State>('number-check');

export const getMessage = createSelector(
	getNumberCheckState,
	(state: State) => state.message,
);