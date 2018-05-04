import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { PlatformModule } from "../platform/platform.module";

import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		PlatformModule
	],
	schemas: [ NO_ERRORS_SCHEMA ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
