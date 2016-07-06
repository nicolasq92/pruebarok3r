angular.module('app')

.service('activity', function($http, $q, $rootScope){
	var activity = this;
	activity.activityList = [];
	activity.value = [];

	activity.getAll = function(){
		var defer = $q.defer();
		$http.get($rootScope.json).success(function(res){
			defer.resolve(res);
			// console.log(res);
			activity.activityList = res;
		})
		.error(function(err){
			// console.log(err);
		})
		return defer.promise;
	}

	activity.getValue = function(){
		var defer = $q.defer();
		$http.get($rootScope.json).success(function(res){
			console.log(res);
		})
		.error(function(err){
			console.log(err);
		})
	};
	
})