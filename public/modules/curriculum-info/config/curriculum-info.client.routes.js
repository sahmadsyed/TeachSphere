'use strict';

//Setting up route
angular.module('curriculum-info').config(['$stateProvider',
	function($stateProvider) {
		$stateProvider.
		state('curriculum-data', {
			url: '/curriculum/data',
			controller: 'CurriculumDataController',
			templateUrl: 'modules/curriculum-info/views/curriculum-data.client.view.html'
		}).
		state('curriculum', {
			url: '/curriculum',
			controller: 'CurriculumController',
			templateUrl: 'modules/curriculum-info/views/curriculum.client.view.html'
		}).
		state('select', {
			url: '/',
			controller: 'SelectController',
			templateUrl: 'modules/curriculum-info/views/select.client.view.html'
		});
	}
]);
