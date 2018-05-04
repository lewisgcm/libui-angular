import { UiButton } from 'libui-node';
import { Element, View, Node } from '../dom';

export class ButtonElement extends UiButton implements Element {

    view: View;

    constructor() {
        super();
    }

    setAttribute(key: string, value: string) {
        this[key] = value;
    }

    getAttribute(key: string) {
        return this[key];
    }

    setProperty(key: string, value: string) {
        this[key] = value;
    }

    getProperty(key: string) {
        return this[key]
    }

    addChild(child: Node) {
        throw new Error("Button cannot contain children.");
    }
}