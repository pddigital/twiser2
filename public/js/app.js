angular.module('twiser', ['ui.router', 'ngMaterial', 'angularMoment', 'ngCookies'])

.config(function( $stateProvider, $urlRouterProvider, $mdThemingProvider ) {

	$stateProvider
  .state('home', {
    url: '/',
    templateUrl: './views/home.html',
    controller: 'homeCtrl'
  })
  .state('userDash', {
    url: '/dashboard',
    templateUrl: './views/userDash.html',
    controller: 'dashCtrl'
  })
	.state('about', {
		url: '/about',
		templateUrl: './views/about.html',
	})

  $urlRouterProvider.otherwise('/');

	$mdThemingProvider.theme('default')
		.backgroundPalette('blue-grey');
})

.constant('twitter', {
	userRequestUrl: 'https://api.twitter.com/1.1/users/show.json?screen_name=',
	usersRequestUrl: 'https://api.twitter.com/1.1/users/lookup.json?screen_name='
})
