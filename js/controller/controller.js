angular.module('app')

.controller('chartController', function($scope, activity){

	$scope.init = function(){
		$scope.getAll();
	}

	$scope.getAll = function(){
		activity.getAll().then(function(res){
			// console.log(res);
			var zoneid = [];
			var count = [];
			var speed = [];
			var time = [];

			for(i=0; i<activity.activityList.length; i++){
			// console.log(activity.activityList[i].data);
			zoneid.push(activity.activityList[i].zoneId);
			count.push([activity.activityList[i].data.count]);
			speed.push(activity.activityList[i].data.speed);
			// time.push([activity.activityList[i].data.time]);	
			time.push(moment(activity.activityList[i].data.time, "x"));
			}
			console.log(zoneid);
			console.log(count);
			console.log(speed);
			// console.log(time);
			
  
   $scope.labels = zoneid;
   $scope.labels2 = zoneid;
   $scope.series = zoneid;

  $scope.data = count;
  $scope.data2 = speed;
  $scope.data3 = time;

  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
  $scope.options = {
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        },
        {
          id: 'y-axis-2',
          type: 'linear',
          display: true,
          position: 'right'
        }
      ]
    }
  };
		}, function(err){
			console.log(err);
		});
	};

	$scope.init();
})

.controller('homeController', function(activity){
	var vm = this;

	vm.saludo ="home";
})

.controller("newsController", function ($scope) {

});