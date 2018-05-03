import 'core-js/es7/reflect'
import 'zone.js/dist/zone-node.js'

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component, Renderer, ElementRef, OnInit } from "@angular/core";
import { NativePlatform } from "./native-platform";
import { InMemoryRenderer, InMemoryRendererFactory,  Element } from './libui-renderer';
import { RendererFactory2, RenderComponentType, APP_INITIALIZER, NgZone} from '@angular/core';

const libui = require('libui-node');

@Component({
	selector: 'ChildCmp',
	template: `
		<p></p>
	`
})
class ChildCmp {
	constructor(renderer: Renderer, ref: ElementRef) {
		renderer.setElementProperty(ref.nativeElement, "someProp", 123);
		const name = new libui.UiEntry();
	}
}

@Component({
	selector: 'app',
	template: `
		AppCmp [
			<ChildCmp></ChildCmp>
		]
	`
})
class AppCmp implements OnInit {

	ngOnInit(): void {
		const win = new libui.UiWindow('Forms window', 800, 600, false);
		win.margined = 1;
		win.onClosing(() => {
			libui.stopLoop();
		});
		win.show();
	}
}

@NgModule({
	imports: [NativePlatform],
	declarations: [ChildCmp, AppCmp],
	bootstrap: [AppCmp],
	providers: [{
		provide: RendererFactory2,
		useClass: InMemoryRendererFactory,
	  }]
})
class AppModule {}
platformBrowserDynamic().bootstrapModule(AppModule);
libui.startLoop();