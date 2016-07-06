angular.module('app')

.controller('chartController', function($scope, activity, $timeout, $interval){

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
			count.push(activity.activityList[i].data.count);
			speed.push([activity.activityList[i].data.speed]);
			// time.push([activity.activityList[i].data.time]);	
			time.push(moment(activity.activityList[i].data.time, "x"));
			}
			var array = [];
			array.push(count);
			console.log(zoneid);
			console.log(array);
			console.log(speed);
			console.log(time);
			
   $scope.data = speed;
   $scope.labels = ['1','2','3','4','5'];
   $scope.series = zoneid;  

   $scope.labels2 = zoneid;
   $scope.data2 = speed;


  $scope.labels3 = ['1','2','3','4','5'];
  $scope.series3 = zoneid;
  $scope.data3 = array;


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

	$scope.interval = function(){
		var speed = [];
		speed.push([Math.random() * (100 - 1) + 1,Math.random() * (100 - 1) + 1,Math.random() * (100 - 1) + 1,Math.random() * (100 - 1) + 1,Math.random() * (100 - 1) + 1]);
		console.log(speed);
		$scope.data = speed;
		console.log('run');
	}

	$interval(function(){
		$scope.interval();
	}, 3000);
	$scope.init();

})

.controller('homeController', function(activity){
	var vm = this;

	vm.saludo ="home";
})

.controller("newsController", function ($scope) {

});