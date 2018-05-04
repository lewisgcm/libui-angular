import { Element } from './dom';
import { VirtualElement } from "./elements/virtual.element";
import { GroupElement } from './elements/group.element';
import { WindowElement } from './elements/window.element';
import { LabelElement } from './elements/label.element';
import { ButtonElement } from './elements/button.element';

export class ElementFactory {
    create( name: string ) : Element {
        switch( name ) {
            case "Window": return new WindowElement();
            case "Group": return new GroupElement();
            case "Label": return new LabelElement();
            case "Button": return new ButtonElement();
            default: return new VirtualElement(name);
        }
    }
}