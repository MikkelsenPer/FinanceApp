/*global document*/
'use strict';

    var App = angular.module('myModule', ['ngRoute', 'myControllers', 'indexModule','stockModule', 'newsModule', 'ngResource'])

    /**
    * Config routing.
    */
    .config(function ($routeProvider) {
        
        // $httpProvider.defaults.useXDomain = true;
        // delete $httpProvider.defaults.headers.common['X-Requested-With'];
        // $httpProvider.defaults.withCredentials = true;

        $routeProvider
        .when('/welcome', {
            controller: 'stockctrl', 
            controllerAs: 'stock',
            templateUrl: 'sections/welcome/welcome.html'
        })
        .when('/test', {
            // controller: 'WelcomeController',
            //controllerAs: 'vm',
            templateUrl: 'sections/test/test.html'
        })
        .when('/stock', {
            controller: 'stockctrl',
            controllerAs: 'stock',
            templateUrl: 'sections/stock/stock.html'
        })
        .when('/news', {
            controller: 'newsctrl',
            controllerAs: 'news',
            templateUrl: 'sections/news/news.html'
        })
        .otherwise({
            redirectTo: '/welcome'
        });
    })

    /**
     * General configuration.
     */
    .config(function ($locationProvider, $compileProvider) {
        $locationProvider.html5Mode(false);
        $locationProvider.hashPrefix('!');
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|tel|mailto|x-wmapp0|chrome-extension):/);
    });

    /**
    * Manually bootstrap application.

    function bootstrapApplication() {
        angular.element(document).ready(function () {
            angular.bootstrap(document, ['myModule']);
        });
    }

    bootstrapApplication();
    */

