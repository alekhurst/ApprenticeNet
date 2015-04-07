var ApprenticeNetApp = angular.module('ApprenticeNetApp', ['ngRoute']);

ApprenticeNetApp.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/templates/employee.html',
            controller: 'EmployeeController',
        })
        .otherwise({
            redirectTo: '/'
        });
});