var ApprenticeNetApp = angular.module('ApprenticeNetApp', ['ngRoute']);

ApprenticeNetApp.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/a/:id', {
            templateUrl: './templates/seeker.html',
            controller: 'SeekerController',
        })
        .when('/m/:id', {
            templateUrl: './templates/recruiter.html',
            controller: 'RecruiterController',
        })
        .otherwise({
            redirectTo: '/'
        });
});