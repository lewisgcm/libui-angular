import { View, Element, Node } from '../dom';

export class VirtualElement implements Element {
    constructor(
        public name: string,
        private attributes: {[n:string]:string} = {},
        private properties: {[n:string]:any} = {},
        private children: Node[] = []
    ) {
    }
    view: View = null;

    public setAttribute(key: string, value: string) {
        this.attributes[key] = value;
    }

    public getAttribute(key: string) {
        return this.attributes[key];
    }

    public setProperty(key: string, value: string) {
        this.properties[key] = value;
    }

    public getProperty(key: string) {
        return this.properties[key];
    }

    public addChild( child: Node ) {
        this.children.push(child);
    }
}