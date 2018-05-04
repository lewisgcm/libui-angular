import { Renderer2, RendererFactory2, NgModule, APP_INITIALIZER, NgZone, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule, DOCUMENT } from '@angular/platform-browser';
import { PlatformRendererFactory } from './platform.renderer.factory';

function setUpRenderFlushing( zone: NgZone, renderer: PlatformRendererFactory ) {
    return () => {
        // This is used to keep refreshing the zone, really hacky!!
        // We should be hooking ngzone up to libui for this.
        setInterval(
            () => {
                zone.run(() => {});
            },
            100
        );

        // This is used for handling debug output 
        zone.onStable.subscribe(() => {
            console.group("--");
            console.log(JSON.stringify(renderer.renderer, null, 4));
            console.groupEnd();
        });
    };
}

@NgModule({
    imports: [ BrowserModule ],
    exports: [ BrowserModule ],
    schemas: [ NO_ERRORS_SCHEMA ],
    providers: [
        { provide: RendererFactory2, useClass: PlatformRendererFactory },
        { provide: APP_INITIALIZER, multi: true, useFactory: setUpRenderFlushing, deps: [NgZone, RendererFactory2] },
        { provide: DOCUMENT, useValue: { Event: {} } }
    ]
})
export class PlatformModule {}