/**
 * Created by lalu on 1/24/2015.
 */
angular.module("myApp").controller("TodoCtrl", function($scope){
    $scope.todos=[
        {title:"Todo1"},
        {title:"Todo2"},
        {title:"Todo3"},
        {title:"Todo4"}
    ];
    $scope.newTodo={};
    $scope.add= function()
    {
        $scope.todos.push($scope.newTodo);
        $scope.newTodo={};
    };

    $scope.delete= function(todo)
    {
        var index=$scope.todos.indexOf(todo);
        $scope.todos.splice(index,1);
    };

    $scope.clearCompleted = function()
    {
        for(var i=$scope.todos.length-1; i>=0; i--)
        {
            if($scope.todos[i].completed)
            {
                $scope.delete($scope.todos[i]);
            }
        }

    }
});