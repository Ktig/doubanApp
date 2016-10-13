(function(){
	var doubanApp = angular.module('doubanApp',['ngRoute','doubanApp.listModule','doubanApp.detailModule'])
	doubanApp.config(['$routeProvider',function($routeProvider) {
		$routeProvider.
		when('/subject/:id',{
			templateUrl:'detail/detail.html',
			controller:'DetailController'
		}).
		when('/:currentList/:page?',{
			templateUrl:'list/list.html',
			controller:'ListController'

		}).
		otherwise({
			redirectTo:'/in_theaters'
		})
	}])
})()
