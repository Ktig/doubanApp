(function(){
	var serviceModule = angular.module('doubanApp.service', []);
	serviceModule.service('JsonpService', ['$window',function($window){
		this.jsonp = function jsonp(url,params,fn){
			var queryString = '?';
			//1.拼接参数
			for(key in params){
				queryString += key + '=' + params[key] + '&&';
			}
			//生成函数名
			var funName =  'my_callback' + new Date().getTime();
			queryString += 'callback' + '=' + funName;
			//挂载函数
			$window[funName] = function(res){
				fn(res);
				//删除之前添加的script标签
				$window.document.body.removeChild(script);
			};
			//向页面添加script标签
			var script = $window.document.createElement('script');
			script.src = url + queryString;

			$window.document.body.appendChild(script);
		}
				
	}])

})()