angular.module('app',['ui.router', 'chart.js'])

.config(function($stateProvider, $urlRouterProvider, ChartJsProvider) {

 $urlRouterProvider.otherwise('home.news');

 $stateProvider

   .state('home', {
   	 url: '/',
     templateUrl: 'views/view-partial.html',
     controller: 'homeController',
     controllerAs: 'vm'
   })

   .state('home.news', {
   	 url: 'news',
     templateUrl: 'views/news.html',
     controller: 'newsController',
     controllerAs: 'vm'
   })


   .state('home.chart', {
   	 url: 'chart',
     templateUrl: 'views/charts.html',
     controller: 'chartController'
   })

   ChartJsProvider.setOptions({
      colours: ['#FF5252', '#FF8A80'],
      responsive: false
    });
    // Configure all line charts
    ChartJsProvider.setOptions('Line', {
      datasetFill: false
    });

}).run(function($rootScope){
	$rootScope.json = 'json/activity-data.json'
});