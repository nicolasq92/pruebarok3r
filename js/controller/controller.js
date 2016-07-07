angular.module('app')

.controller('chartController', function($scope, activity, $timeout, $interval){

	$scope.init = function(){
		$scope.getAll();
	}

	$scope.getAll = function(){
		activity.getAll().then(function(res){
			
			activity.getZone();
			activity.getcount();
			activity.getSpeed();
			activity.getTime();

   $scope.data = activity.speed;
   $scope.labels = ['1','2','3','4','5'];
   $scope.series = activity.zoneid;  

   $scope.labels2 = activity.zoneid;
   $scope.data2 = activity.speed;


  $scope.labels3 = activity.count;
  $scope.series3 = activity.zoneid;
  $scope.data3 = activity.fspeed;


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
		activity.pushArray();
		//console.log(activity.fspeed);
		$scope.data = activity.fspeed;
		 activity.average();
		 $scope.data2 = activity.ave;
		 // $scope.data3 = activity.fspeed;
		//console.log(activity.ave);
		//console.log('run');
		
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