import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { reducer } from './state/number-check.reducer';
import { NumberEffects } from './state.number-check.effects';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		EffectsModule.forRoot([NumberEffects]),
		ReactiveFormsModule,
		StoreModule.forRoot({}),
		StoreModule.forFeature('number-check', reducer),
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}