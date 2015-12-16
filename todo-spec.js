describe("Todo List", function () {

    var $controller;

    // Setup for all tests
    beforeEach(function () {
        // loads the app module
        module('todoApp');
        inject(function (_$controller_) {
            // inject removes the underscores and finds the $controller Provider
            $controller = _$controller_;
        });
    });
    
    it("list begins", function () {
        var $scope = {};
        
        // $controller takes an object containing a reference to the $scope
        var controller = $controller('todoCtl', { $scope: $scope });
        
        // the assertion checks the expected result
        expect($scope.todos.length).toBe(3);
    });
    
    it("add items", function () {
        var $scope = {};
        
        // $controller takes an object containing a reference to the $scope
        var controller = $controller('todoCtl', { $scope: $scope });
        
        // the assertion checks the expected result
        $scope.newTodo = 'Hello World';
        $scope.add();
        $scope.add();
        $scope.add();
        $scope.add();
        expect($scope.todos.length).toBe(7);
    });
    
    it("check items and archive", function () {
        var $scope = {};
        
        // $controller takes an object containing a reference to the $scope
        var controller = $controller('todoCtl', { $scope: $scope });
        
        // the assertion checks the expected result
        $scope.archive();
        expect($scope.todos.length).toBe(2);
    });
    
    it("remaining items", function () {
        var $scope = {};
        
        // $controller takes an object containing a reference to the $scope
        var controller = $controller('todoCtl', { $scope: $scope });
        
        // the assertion checks the expected result
        expect($scope.remain()).toBe(2);
    });
    
});