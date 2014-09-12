(function() {
	'use strict';

	angular
		.module('app.core')
		.factory('dataservice', dataservice);

	/* ngInject */
	function dataservice($http, $location, $q, exception, logger) {
		var isPrimed = false;
		var primePromise;

		/* Get Methods */
		var getAvengers = function() {
			var getAvengersComplete = function(data, status, headers, config) {
				return data.data[0].data.results;
			};

			return $http.get('/api/maa')
				.then(getAvengersComplete)
				.catch(function(message) {
					// XHR is another name for XMLhttp request
					exception.catcher('XHR failed')(message);
					$location.url('/');
				});
		};

		var getAvengerCount = function() {
			var count = 0;

			var getAvengersCastComplete = function() {
				count = data.length;
				return $q.when(count);
			};

			return getAvengersCast()
				.then(getAvengersCastComplete)
				.catch(exception.catcher('XHR failed to get avenger count'));
		}

		var getAvengersCast = function() {
			var count = 0;

			var getAvengers
		}
	}
})