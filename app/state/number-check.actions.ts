import { createAction, props } from '@ngrx/store';

//Dispatching this submitNumber action causes the submitNumber$ effect to run
export const submitNumber = createAction(
	"Submit Number",
	props<{number: string}>(),
);

export const validNumber = createAction(
	"Valid Number",
	props<{number: string}>(),
);

export const invalidNumber = createAction(
	"Invalid Number",
	props<{message: string}>(),
);