import { UiWindow } from 'libui-node';
import { Element, View, Node } from '../dom';

export class WindowElement extends UiWindow implements Element {

    view: View;

    constructor(title: string = '', width: number = 100, height: number = 100, hasMenuBar: boolean = false) {
        super(title, width, height, hasMenuBar);
        super.show();
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
        super.setChild( child );
    }
}