function todoCtl($scope) {

    interface todoItem {
        name:string;
        done:boolean;
    }

    var vm = $scope;

    //defaults
    var data:todoItem[];
    data = [{name: 'first', done:false},
        {name:'second', done:true},
        { name: 'third', done: false }];
    vm.todos = data;

    //methods
    vm.add = function () {;
        var row:todoItem;
        row.name = vm.newTodo;
        row.done = false;
        vm.todos.push(row);
        vm.newTodo = '';
    };

    vm.archive = function () {
        var old = vm.todos;
        vm.todos = [];
        angular.forEach(old, function (t:todoItem) {
            if (!t.done) { vm.todos.push(t);}
        });
    };

    vm.remain = function () {
        var c = 0;
        angular.forEach(vm.todos, function (t:todoItem) {
            if (!t.done) { c++;}
        })
        return c;
    };

}

angular.module('todoApp',[]).controller('todoCtl', todoCtl);