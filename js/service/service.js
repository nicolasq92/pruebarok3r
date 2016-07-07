angular.module('app')

.service('activity', function($http, $q, $rootScope){
	var activity = this;
	activity.activityList = [];
	
	activity.zoneid = [];
	activity.count = [];
	activity.speed = [];
	activity.time = [];
	activity.array = [];
	activity.fspeed = [];
	activity.ave = [0,0,0,0,0];

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

	activity.getZone = function(){
		for(i=0; i<activity.activityList.length; i++){
			activity.zoneid.push(activity.activityList[i].zoneId);
			// console.log(activity.zoneid);
		}
		return activity.zoneid;
	};

	activity.getcount = function(){
		for(i=0; i<activity.activityList.length; i++){
			activity.count.push(activity.activityList[i].data.count);
			// console.log(activity.count);
			}
			activity.array.push(activity.count);
			return activity.array;
	};

	activity.getSpeed = function(){
		for(i=0; i<activity.activityList.length; i++){
			activity.speed.push(activity.activityList[i].data.speed);
			// console.log(activity.speed);
			}
			activity.fspeed.push(activity.speed);
			return activity.fspeed;
	};

	activity.pushArray = function(){
		activity.fspeed.push([Math.floor(Math.random() * (100 - 1) + 1),Math.floor(Math.random() * (100 - 1) + 1),Math.floor(Math.random() * (100 - 1) + 1),Math.floor(Math.random() * (100 - 1) + 1),Math.floor(Math.random() * (100 - 1) + 1)]);
		return activity.fspeed;
	}

	activity.average = function(){

		for(var i=0, len = activity.fspeed.length; i<len; i++){
			for(var j=0, len2 = activity.fspeed[j].length; j<len2; j++){
				activity.ave[j] += activity.fspeed[i][j];
			}
		}
		console.log(activity.ave);
		for(var k=0; k<activity.ave.length ; k++){
			activity.ave[k] = Math.floor(activity.ave[k] / activity.fspeed.length);
		}
		console.log(activity.ave);
		 return activity.ave;
	};

	activity.getTime = function(){
		for(i=0; i<activity.activityList.length; i++){
			activity.time.push(moment(activity.activityList[i].data.time, "x"));
			// console.log(activity.time);
			}
			return activity.time;
	};
	
})