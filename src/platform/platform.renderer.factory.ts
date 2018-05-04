import { RendererType2, RendererFactory2, Renderer2 } from '@angular/core';

import { ElementFactory } from './dom/element.factory';
import { PlatformRenderer } from './platform.renderer';

export class PlatformRendererFactory implements RendererFactory2 {
    public renderer: PlatformRenderer;

    public createRenderer(
        hostElement: any,
        type: RendererType2
    ): Renderer2 {
        if( !this.renderer ) {
            this.renderer = new PlatformRenderer( new ElementFactory() );
        }
        return this.renderer;
    }
}