
document.documentElement.style.fontSize = innerWidth/16 + 'px';
window.onresize = function(){
	document.documentElement.style.fontSize = innerWidth/16 + 'px';
}
var app = angular.module('myApp' ,[]);
app.service('mySwipe',function(){
	this.swipe = function(){
		var mySwiper = new Swiper(".swiper-container",{  
                direction:"horizontal",/*横向滑动*/  
                loop:true,/*形成环路（即：可以从最后一张图跳转到第一张图*/  
                pagination:".swiper-pagination",/*分页器*/  
                observer:true,
                observerParents:true,
                // effect:'fade',
                centeredSlides:true,
                // autoplayDisableOnInteraction : true,
                // autoplay:2000/*每隔3秒自动播放*/ 
            })
	}

	this.countDwon = function(){
        var date = new Date();
        var date1 = new Date('2016-10-01 00:00:00');
        var time = parseInt((date1 - date)/1000);
        setInterval(function(){
        	time --;
        	// console.log(time);
        	var second = time%60;
        	var min = parseInt(time/60%60);
        	var hour = parseInt(time/60/60%24);
        	var day = parseInt(time/60/60/24);
        	// console.log(day);
        	var lastTime = '剩'　+ day + '天' + hour + '时' + min + '分' + second +'秒';
        	$('.countDwon p').text(lastTime);
        },1000)
    }
    this.lazy = function(){
    	$('.lazy').lazyload({
              
    	})
    	console.log('app');
    }
})

app.controller('myCtrl',['$scope','$http','mySwipe',function($scope,$http,mySwipe){
        $http.get('../json/buy.json').success(function(res){
        	$scope.data = res.data;
        })
        mySwipe.swipe();
        mySwipe.countDwon();
}])
app.controller('myCtrl-1',['$scope','$http','mySwipe',function($scope,$http,mySwipe){

        $http.get('../json/coffee-2.json').success(function(res){
              $scope.imgData = res.data;
        })
        mySwipe.lazy();
}])