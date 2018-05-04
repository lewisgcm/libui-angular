import { Component } from '@angular/core';
import { readFileSync } from 'fs';

@Component({
	selector: 'app-root',
	template: readFileSync( `${__dirname}/app.component.xml`, 'utf8')
})
export class AppComponent {
	private inc = 0;
	private title = 'My First Angular Native';

	ifThisWorks() {
		this.inc++;
		this.title = `This worked: ${this.inc}`;
	}
}