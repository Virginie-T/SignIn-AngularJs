var SignIn = angular.module('SignIn', ['ui.router']);

SignIn.config(function($stateProvider) {
    $stateProvider.state('home', {
        url: '',
        templateUrl: 'partials/home.html',
        controller: 'StudentsCtrl'
    });

    $stateProvider.state('list', {
        url: '/list_of_student',
        templateUrl: 'partials/list.html',
        controller: 'StudentsCtrl'
    });

    $stateProvider.state('signIn', {
        url: '/sign_in',
        templateUrl: 'partials/signIn.html',
        controller: 'StudentsCtrl'
    });

});