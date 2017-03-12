document.documentElement.style.fontSize = innerWidth/16 + 'px';
window.onresize = function(){
	document.documentElement.style.fontSize = innerWidth/16 + 'px';
}

$(function(){


	// -------------------------------------------
	var isdown = false;
	$('#find_shuaixuan').find('div').on('touchstart',function(){
		$('#find_shuaixuan').find('div').css({
			color:'#666'
		});
		$(this).css({
			color:'red'
		});
	});
	$('#find_shuaixuan_a').on('touchstart',function(){
		isdown?$(this).find('span').css({
			background:'url(../img/sort_down.png) no-repeat',
			backgroundSize:'100%'
		}):$(this).find('span').css({
			background:'url(../img/sort_up.png) no-repeat',
			backgroundSize:'100%'
		});
		isdown = !isdown;
	});
	$(document).on('scroll',function(){
		if($('body').scrollTop() > 130){
			$('#find_shuaixuan').css({
				position:'fixed',
				top:0,
				width:'100%'
			})
		}
		if($('body').scrollTop() <= 130){
			$('#find_shuaixuan').css({
				position:'relative'
			})
		}
	})
















})
var app = angular.module('find_myApp',[]);
// app.service('find_cc',function(){
// 	this.lazy = function(){
// 		$(".lazy").lazyload({
// 			// placeholder:"img/0.jpg", 
// 			effect: "slideDown",
// 			event : "click",
// 			container: $("#lazybox")
// 		});
// 	}
	
// })

// app.service('find_change',function(){
// 	this.change = function(){
// 		$('#find_shuaixuan_a').on('touchstart',function(){
// 			var newdata = data;
// 			newdata.sort(function(a,b){
// 				return (a.cprice- 0 ) - (b.cprice- 0 )
// 			})

// 		})
// 	}
// })


app.controller('find_control',function($scope,$http){

    $http.get('../../json/find_1.json').success(function(res){
        $scope.data = res.data.goods;
        data = res.data.goods;


        // 按价格排序
        var ist = false;
    	$('#find_shuaixuan_a').on('touchstart',function(){
    		$scope.$apply(function(){
    			
				ist?data.sort(function(a,b){
					return Number(b.cprice) - Number(a.cprice);
					
				}):data.sort(function(a,b){
					return Number(a.cprice) - Number(b.cprice);
					
				});
				ist = !ist;

    		});
			

		});



		// 按销售数量排序
		$('#find_xiaoliang_a').on('touchstart',function(){
			$scope.$apply(function(){
				data.sort(function(a,b){
					return Number(a.oprice) - Number(b.oprice);
					
				})

			})

		})

		// 按默认排序
		$('#find_moren_a').on('touchstart',function(){
			$scope.$apply(function(){
				data.sort(function(a,b){
					return Number(a.left_time) - Number(b.left_time);
					
				})

			})

		})
        
    });
 
})