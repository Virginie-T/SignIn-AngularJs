var SignIn = angular.module('SignIn', ['ui.router']);

SignIn.config(function($stateProvider) {
    $stateProvider.state('home', {
        url: '',
        templateUrl: 'partials/home.html',
        controller: 'StudentsCtrl'
    });

});