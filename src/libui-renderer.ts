import {Renderer2, RendererType2, RendererStyleFlags2, RendererFactory2, RenderComponentType, NgModule, APP_INITIALIZER, NgZone} from '@angular/core';

export class View {
    children: Node[] = [];
}

export class Element {
    constructor(public name: string) {

    }
    attributes: {[n:string]:string} = {};
    properties: {[n:string]:any} = {};
    children: Node[] = [];
    view: View = null;

    appendChild() {
        console.log( { childArgs: arguments } );
    }
    setAttribute() {
        console.log( { attributes: arguments } );
    }
}

export class Text {
    constructor(public value: string) {}
}

export type Node = Element | View | Text;

export class InMemoryRendererFactory implements RendererFactory2 {
    createRenderer(hostElement: any, type: RendererType2): Renderer2 {
        console.log("building the renderer!!!!");
        return new InMemoryRenderer([]);
    }
    begin?(): void {
        //throw new Error("Method not implemented.");
    }
    end?(): void {
        //throw new Error("Method not implemented.");
    }
    /*whenRenderingDone?(): Promise<any> {
        //throw new Error("Method not implemented.");
    }*/
}

export class InMemoryRenderer implements Renderer2 {
    data: { [key: string]: any; };
    constructor(public roots: any[] = []) {
    }
    destroy(): void {
        throw new Error("Method not implemented.");
    }
    createComment(value: string) {
        throw new Error("Method not implemented.");
    }
    destroyNode: (node: any) => void;
    appendChild(parent: any, newChild: any): void {
    }
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
    setAttribute(el: any, name: string, value: string, namespace?: string): void {
        //throw new Error("Method not implemented.");
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
    setProperty(el: any, name: string, value: any): void {
        //throw new Error("Method not implemented.");
    }
    setValue(node: any, value: string): void {
        throw new Error("Method not implemented.");
    }
    listen(target: any, eventName: string, callback: (event: any) => boolean | void): () => void {
        throw new Error("Method not implemented.");
    }

    selectRootElement(selectorOrNode: string|any, debugInfo?: any): Element {
        console.log("INNN HERE!!!!!!");
      const root = new Element(selectorOrNode);
      this.roots.push(root);
      return root;
    }
  
    createElement(parentElement: any, name: string, debugInfo?: any): Element {
      console.log("INNN22222 HERE!!!!!!");
      const element = new Element(name);
      //parentElement.children.push(element);
      return element;
    }
  
    createViewRoot(hostElement: Element): View {
      const view = new View();
      hostElement.view = view;
      return view;
    }
  
    createText(value: string): Text {
      const text = new Text(value);
      //parentElement.children.push(text);
      return text;
    }
  
    setElementProperty(renderElement: Element, propertyName: string, propertyValue: any): void {
      renderElement.properties[propertyName] = propertyValue;
    }
  
    setElementAttribute(renderElement: Element, attributeName: string, attributeValue: string): void {
      renderElement.attributes[attributeName] = attributeValue;
    }
  
    setText(renderNode: Text, text: string): void {
      renderNode.value = text;
    }
}