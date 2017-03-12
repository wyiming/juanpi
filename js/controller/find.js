document.documentElement.style.fontSize = innerWidth/16 + 'px';
window.onresize = function(){
	document.documentElement.style.fontSize = innerWidth/16 + 'px';
}
window.onload = function(){


	

	$('#find_aside').find('li').on('touchstart',function(){
		$('#find_aside').find('li').css({
			borderLeft: '2px solid #f9f9f9',
			background:'#f9f9f9'
		});
		$('#find_aside').find('li').find('a').css({
			color:'#4a4a4a'
		});
		$(this).css({
			borderLeft: '2px solid red',
			background:'white'
		});
		$(this).find('a').css({
			color:'red'
		});
	})




}





 	angular.module('find_myApp',['ui.router'])
	 	.config(function($stateProvider, $urlRouterProvider) {


	 			$urlRouterProvider.otherwise('/find1');
		      	$stateProvider   
			      	.state('find1', {
			        url: '/find1',
			        templateUrl: 'find/find1.html',
	        		})
	        		.state('find2', {
			        url: '/find2',
			        templateUrl: 'find/find2.html',
	        		})
	        		.state('find3', {
			        url: '/find3',
			        templateUrl: 'find/find3.html',
	        		})
	        		.state('find4', {
			        url: '/find4',
			        templateUrl: 'find/find4.html',
	        		})
	        		.state('find5', {
			        url: '/find5',
			        templateUrl: 'find/find5.html',
	        		})
	        		.state('find6', {
			        url: '/find6',
			        templateUrl: 'find/find6.html',
	        		})
	        		.state('find7', {
			        url: '/find7',
			        templateUrl: 'find/find7.html',
	        		})
	        		.state('find8', {
			        url: '/find8',
			        templateUrl: 'find/find8.html',
	        		})
	        		.state('find9', {
			        url: '/find9',
			        templateUrl: 'find/find9.html',
	        		})
	        		.state('find10', {
			        url: '/find10',
			        templateUrl: 'find/find10.html',
	        		})
	        		.state('find11', {
			        url: '/find11',
			        templateUrl: 'find/find11.html',
	        		})
	        		.state('find12', {
			        url: '/find12',
			        templateUrl: 'find/find12.html',
	        		})

	    })
	 	.controller('mycontrol',function($scope,$http){
	 		$http.get('../../json/find_1.json').success(function(res){
					$scope.data1 =res.data.goods;
			})
			$http.get('../../json/buy.json').success(function(res){
					$scope.data2 =res.data;
			})
			$http.get('../../json/coffee.json').success(function(res){
					$scope.data3 =res.data;
			})
			$http.get('../../json/d2.json').success(function(res){
					console.log(res)
					$scope.data4 =res.new.list;
			})
			$http.get('../../json/d3.json').success(function(res){
					$scope.data5 =res.data;
			})
			$http.get('../../json/family.json').success(function(res){
					$scope.data6 =res.baihuo;
			})
			$http.get('../../json/family.json').success(function(res){
					$scope.data7 =res.chufang;
			})
			$http.get('../../json/family.json').success(function(res){
					$scope.data8 =res.qingjie;
			})
			$http.get('../../json/family.json').success(function(res){
					$scope.data9 =res.shouna;
			})
			$http.get('../../json/family.json').success(function(res){
					$scope.data10 =res.weiyu;
			})
			$http.get('../../json/global.json').success(function(res){
					$scope.data11 =res.data.banner_ads;
			})
			$http.get('../../json/family.json').success(function(res){
					$scope.data12 =res.data.goods;
			})
	 	})
