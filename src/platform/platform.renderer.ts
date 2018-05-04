import { Renderer2, RendererStyleFlags2 } from '@angular/core';

import { Element, View, Text } from './dom/dom';
import { VirtualElement } from './dom/elements/virtual.element';

import { ElementFactory } from './dom/element.factory';

export class PlatformRenderer implements Renderer2 {
    data: { [key: string]: any; };
    
    constructor(
        private elementFactory: ElementFactory,
        public root: VirtualElement = new VirtualElement("root")
    ) {
    }

    destroy(): void {
        throw new Error("Method not implemented.");
    }

    createComment(value: string) {
        throw new Error("Method not implemented.");
    }

    destroyNode: (node: any) => void;

    insertBefore(parent: any, newChild: any, refChild: any): void {
        throw new Error("Method not implemented.");
    }

    removeChild(parent: any, oldChild: any): void {
        throw new Error("Method not implemented.");
    }

    parentNode(node: any) {
        throw new Error("Method not implemented.");
    }

    nextSibling(node: any) {
        throw new Error("Method not implemented.");
    }

    removeAttribute(el: any, name: string, namespace?: string): void {
        throw new Error("Method not implemented.");
    }

    addClass(el: any, name: string): void {
        throw new Error("Method not implemented.");
    }

    removeClass(el: any, name: string): void {
        throw new Error("Method not implemented.");
    }

    setStyle(el: any, style: string, value: any, flags?: RendererStyleFlags2): void {
        throw new Error("Method not implemented.");
    }

    removeStyle(el: any, style: string, flags?: RendererStyleFlags2): void {
        throw new Error("Method not implemented.");
    }

    setValue(node: any, value: string): void {
        throw new Error("Method not implemented.");
    }

    listen(target: any, eventName: string, callback: (event: any) => boolean | void): () => void {
        eventName = eventName.charAt(0).toUpperCase() + eventName.slice(1);
        target[`on${eventName}`]( callback );
        return () => {
        };
    }

    appendChild(parent: Element, newChild: any): void {
        console.log( { parent: parent, newChild: newChild } );
        parent.addChild( newChild );
    }

    selectRootElement(selectorOrNode: string|any, debugInfo?: any): Element {
        return this.root;
    }

    createElement(name: string, namespace?: string) {
        console.log("create: " + name);
        return this.elementFactory.create(name);
    }
  
    createViewRoot(hostElement: Element): View {
        const view = new View();
        console.log("CREATING IVEW!!!!");
        hostElement.view = view;
        return view;
    }
  
    createText(value: string): Text {
        const text = new Text(value);
        console.log({data:this.data});
        console.log(`create text: ${value}`);
        //parentElement.children.push(text);
        return undefined;
    }

    setProperty(el: any, name: string, value: any): void {
        el.setProperty( name, value );
    }

    setAttribute(el: any, name: string, value: string, namespace?: string): void {
        el.setAttribute( name, value );
    }
  
    setElementProperty(renderElement: Element, propertyName: string, propertyValue: any): void {
        renderElement.setProperty( propertyName, propertyValue );
    }
  
    setElementAttribute(renderElement: Element, attributeName: string, attributeValue: string): void {
        renderElement.setAttribute( attributeName, attributeValue );
    }
  
    setText(renderNode: Text, text: string): void {
        console.log(renderNode);
      //renderNode.value = text;
    }
}