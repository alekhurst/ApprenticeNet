var ApprenticeNetApp = angular.module('ApprenticeNetApp', ['ngRoute']);

ApprenticeNetApp.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/templates/job_seeker.html',
            controller: 'JobSeekerController',
        })
        .otherwise({
            redirectTo: '/'
        });
});