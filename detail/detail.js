(function(){
 var detailModule = angular.module('doubanApp.detailModule', ['doubanApp.service']);
    detailModule.controller('DetailController', ['$timeout','$scope','$http','JsonpService','$routeParams','$route','$rootScope',
        function($timeout,$scope, $http,JsonpService,$routeParams,$route,$rootScope) {
                 JsonpService.jsonp('https://api.douban.com/v2/movie/subject/'+$routeParams.id,{},function(ress){
                 console.log('请求成功');
                  //标题
                 $scope.title = ress.title;
                 //详细信息
                 $scope.summary = ress.summary;

                 $scope.images = ress.images;

                 $scope.$apply();   
         })
    }])
})()