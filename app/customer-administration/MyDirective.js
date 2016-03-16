export class MyDirective {
    /*@ngInject*/
    constructor($interval) {
        this.template = '<div>I\'m a directive!</div>';
        this.restrict = 'E';
        this.scope = {}
        // etc. for the usual config options

        // allows us to use the injected dependencies
        // elsewhere in the directive (e.g. compile or link function)
        this.$interval = $interval;
    }

    // optional compile function
    compile(tElement) {
        tElement.css('position', 'absolute');
    }

    // optional link function
    link(scope, element) {
        this.$interval(() => this.move(element), 1000);
    }

    move(element) {
        element.css('left', (Math.random() * 500) + 'px');
        element.css('top', (Math.random() * 500) + 'px');
    }
}
