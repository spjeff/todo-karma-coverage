function todoCtl($scope) {

    var vm = $scope;

    vm.todos = [{name: 'first', done:false},
        {name:'second', done:true},
        { name: 'third', done: false }];

    vm.add = function () {;
        vm.todos.push({ name: vm.newTodo, done: false });
        vm.newTodo = '';
    };

    vm.archive = function () {
        var old = vm.todos;
        vm.todos = [];
        angular.forEach(old, function (t) {
            if (!t.done) { vm.todos.push(t);}
        });
    };

    vm.remain = function () {
        var c = 0;
        angular.forEach(vm.todos, function (t) {
            if (!t.done) { c++;}
        })
        return c;
    };

}

angular.module('todoApp',[]).controller('todoCtl', todoCtl);