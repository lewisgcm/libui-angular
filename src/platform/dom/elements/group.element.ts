import { UiVerticalBox } from 'libui-node';
import { Element, View, Node } from '../dom';

export class GroupElement extends UiVerticalBox implements Element {

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
        console.log( { AddChildGroupElement: child } );
        super.append( child, 1 );
    }
}