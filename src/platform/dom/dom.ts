export class View {
    children: Node[] = [];
}

export interface Element {
    view: View;

    setAttribute(key: string, value: string);

    getAttribute(key: string);

    setProperty(key: string, value: string);

    getProperty(key: string);

    addChild( child: Node );
}

export class Text {
    constructor(public value: string) {}
}

export type Node = Element | View | Text;