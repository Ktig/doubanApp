(function() {
    var listModule = angular.module('doubanApp.listModule', ['doubanApp.service']);
    listModule.controller('ListController', ['$timeout','$scope', '$http','JsonpService','$routeParams','$route','$rootScope',
        function($timeout,$scope, $http,JsonpService,$routeParams,$route,$rootScope) {
            
        //整合之后的列表    
        $rootScope.currentList = $routeParams.currentList;
        //搜索
        $rootScope.search = function(){
            console.log($rootScope.content);
            // 如果路由表中没有配置 q 参数,则会自动加到?后
            $route.updateParams({currentList:'search',q:$rootScope.content});
        }
        // $scope.subjects = subjects;
        var count = 10;
        var currentPage = parseInt($routeParams.page || 1);
        $scope.currentPage = currentPage;
        var start = (currentPage-1)*count;
        JsonpService.jsonp('https://api.douban.com/v2/movie/'+$routeParams.currentList,{start:start,count:count,q:$routeParams.q},function(res){

             //标题
             $scope.title = res.title;
             //选取数据里面的subjects部分
             $scope.subjects = res.subjects;
             //数据的总条数
             $scope.total = res.total;
             //一共有多少页
             $scope.totalPage = Math.ceil($scope.total/count);
             //告诉angular刷新界面上的数据
             $scope.$apply();

             //分页
             $scope.splicePage = function(page){
                //为了使page不能一直缩小或变大
                if(page < 1 || page > $scope.totalPage){
                    return;
                }
                //更改路由的参数
                $route.updateParams({page:page});

             }
        })
    }])
})()
