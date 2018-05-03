/*import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';

platformBrowser().bootstrapModule(AppModule)
  .catch(err => console.log(err));*/
  //import 'core-js/es7/reflect'
  //import 'zone.js/dist/zone_node'
  
  // import Angular
  import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
  import {NgModule, Component, Renderer, ElementRef} from "@angular/core";
  import {NativePlatform} from "./native-platform";
  
  @Component({
    selector: 'child',
    template: `
      ChildCmp
    `
  })
  class ChildCmp {
    constructor(renderer: Renderer, ref: ElementRef) {
      renderer.setElementProperty(ref.nativeElement, "someProp", 123);
    }
  }
  
  @Component({
    selector: 'app',
    template: `
      AppCmp [
        <child></child>
      ]
    `
  })
  class AppCmp {}
  
  @NgModule({
    imports: [NativePlatform],
    declarations: [ChildCmp, AppCmp],
    bootstrap: [AppCmp]
  })
  class AppModule {}
  
  platformBrowserDynamic().bootstrapModule(AppModule);
