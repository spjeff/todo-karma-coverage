describe("Todo List", function() {

    var vm;

    // Setup for all tests
    beforeEach(function() {

        // module
        var $controller;
        module('todoApp');
        inject(function(_$controller_) {
            // inject removes the underscores and finds the $controller Provider
            $controller = _$controller_;
        });

        // controller
        vm = {};
        $controller('todoCtl', { $scope: vm });
    });

    it("list begins", function() {
        // the assertion checks the expected result
        expect(vm.todos.length).toBe(3);
    });

    it("add items", function() {
        // the assertion checks the expected result
        vm.newTodo = 'Hello World';
        vm.add();
        vm.add();
        vm.add();
        vm.add();
        expect(vm.todos.length).toBe(7);
    });

    it("check items and archive", function() {
        // the assertion checks the expected result
        vm.archive();
        expect(vm.todos.length).toBe(2);
    });

    it("remaining items", function() {
        // the assertion checks the expected result
        expect(vm.remain()).toBe(2);
    });

});