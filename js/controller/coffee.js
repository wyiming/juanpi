
var app = angular.module('myApp',['ngRoute']);
app.service('closead',function(){
	this.closefun = function(){
		console.log($);
		$('.close').on('touchstart',function(){
			console.log('aaa');
			$('.go-app-new').hide(1000);
		})
	}
	this.scrollfun = function(){
		console.log('ccc');
		$(window).on('scroll',function(){
			console.log('ccc');
			if($(this).scrollTop()>20){
				$('.back-top').css('display','block')
			}else{
				$('.back-top').css('display','none')
			}
			if($(this).scrollTop()>380){
				$('.brand-sort').css({
					position:'fixed',
					top:0,
					background:'#fff'
				})
			}else{
				$('.brand-sort').css({
					position:'static'
				})
			}

		})
		$('.back-top').on('touchstart',function(){
			$('body').animate({
				'scrollTop':0
			},500);
		})
	}
})
		$('.close').on('touchstart',function(){	
			console.log($);
			$('.go-app-new').hide(1000);

		})


app.controller('myCtrl', ['$scope','$http','closead', function($scope,$http,closead){
	closead.closefun();
	closead.scrollfun();
	$http.get('../json/coffee.json').success(function(res){
		console.log(res);
		console.log($);
		$scope.data = res.data;
	});
	


}])
