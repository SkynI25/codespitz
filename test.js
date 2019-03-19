class Parent {
    parentAction(){}
}
interface A{
    Aaction()
}
interface B{
    Baction()
}
class Some extends Parent implements A, B {
    parentAction() {...}
    Aaction() {...}
    Baction() {...}
}

class SomeA extends A {
    constructor(some:Some){this.some = some;}
    Aaction(){this.some.action()}
}
class Some extends Parent{
    constructor() {
        this.a = new SomeA(this);
    }
    parentAction() {...}
    action(){this...}
}

const some = new Some();

function needParent(parent:Parent) {
    parent.parentAction()
}

needParent(some)
function needA(a:A) {
    a.Aaction()
}
needA(some)