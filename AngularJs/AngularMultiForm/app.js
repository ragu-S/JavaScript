// app.js
// will be used to inject ngAnimante and ui-router
'use strict';
angular.module('formApp', ['ngAnimate', 'ui.router'])

// Configure our routes
.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

    //route to show our basic form in (/form)
    .state('form', {
        url: '/',
        templateUrl: 'form.html',
        controller: 'formController'
    })

    // My nested states
    // each with its own view
    // url will be nested (/form/profile)
    .state('form.profile', {
        url: '/profile',
        templateUrl: 'form-profile.html'
    })

    // url will be /form/interests
    .state('form.interests', {
        url: '/interests',
        templateUrl: 'form-interests.html'
    })

    // url will be /form/payment
    .state('form.payment', {
        url: '/payment',
        templateUrl: 'form-payment.html'
    });

    $urlRouterProvider.otherwise('/');

})

// controller for the form
.controller('formController', function($scope) {

    // we will store all of our form data in this object
    $scope.formData = {};

    // function to process the form
    $scope.processForm = function() {
        alert('sweet');
    };
});