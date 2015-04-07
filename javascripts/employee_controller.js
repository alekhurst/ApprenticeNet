ApprenticeNetApp.controller('EmployeeController', [
'$scope',
'$routeParams',
'$rootScope',
'EmployeeFactory',
function($scope, EmployeeFactory, $routeParams, $rootScope) {
	$scope.employee = EmployeeFactory;
	console.log($scope.employee.a)
}]);