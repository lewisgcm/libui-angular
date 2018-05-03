import {Renderer2, RenderComponentType, NgModule, APP_INITIALIZER, NgZone} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DOCUMENT, EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import { InMemoryRenderer, InMemoryRendererFactory,  Element } from './libui-renderer';

// We print a new snapshot every time the zone gets stable.
// That would be the moment when the browse would modify the DOM.
function setUpRenderFlushing(zone: NgZone, renderer: InMemoryRenderer) {
  return () => {
    zone.onStable.subscribe(() => {
      console.group("--");
      console.log(renderer.roots);
      console.log(JSON.stringify(renderer.roots, null, 2));
      console.groupEnd();
    });
  };
}

// Instead of defining the whole platform from scratch, we essentially extend
// the browser platform (hence the import and the export).
@NgModule({
  imports: [BrowserModule],
  exports: [BrowserModule],
  providers: [
    {provide: Renderer2, useClass: InMemoryRendererFactory},
    {provide: APP_INITIALIZER, multi: true, useFactory: setUpRenderFlushing, deps: [NgZone, Renderer2]},
    {provide: DOCUMENT, useValue: { Event: {} }}
    //{provide: EVENT_MANAGER_PLUGINS, useValue: {}}
  ]
})
export class NativePlatform {}