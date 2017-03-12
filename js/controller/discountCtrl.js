//上新页面
app

.service('dEvent', function(){

	
	this.remove =  function (){
		$(".dtop-top span").on("touchstart",function(){
			$(this).parent().remove();
		});
	}
	this.getData = function(){
		  var mySwiper = new Swiper ('.swiper-container', {
    	// direction: 'vertical',
    	loop: true,
    	observer:true,
		observerParents:true,
   	 	pagination: '.swiper-pagination',
	    autoplay:1000,
	    speed:500
  		}) 

	}
	this.nav = function(){
		
		// console	
	}

})
.controller('discountCtrl',["$scope","$http","$css","dEvent",function($scope,$http,$css,dEvent){
	$css.add('css/discount.css');
	$http.get("json/d2.json").success(function(res){		
			// console.log(res.new.list);

			$scope.dswiper = res.new.slider;
			$scope.dpic1 = res.new.dpic;
			$scope.dpic2 = res.new.dnew[0].pic;
			$scope.dlist = res.new.list;
	});
	// $scope.$watch('clickData', function(www) {
	// 	console.log(www)
	// }),

	$scope.clickData = function(www){
		console.log(www)
		var s = angular.toJson(www);
		sessionStorage.setItem("data",s);
		var a = sessionStorage.getItem('data');
		console.log(angular.fromJson(a));
		
			
	};

	dEvent.remove();
	dEvent.getData();

}])

//女装页面
.controller('discountCtrl1',["$scope","$http","$css","dEvent",function($scope,$http,$css,dEvent){
	$css.add('css/discount.css');
	$http.get("json/d2.json").success(function(res){
			
			// console.log(res.woman)
			$scope.dswiper = res.woman.slider;
			$scope.dpic1 = res.woman.dpic;
			$scope.dpic2 = res.woman.dnew[0].pic;
			$scope.dlist = res.new.list;
	});
	dEvent.remove();
	dEvent.getData();
	dEvent.nav();
	// console.log(2)

}])
//鞋包页面
.controller('discountCtrl2',["$scope","$http","$css","dEvent",function($scope,$http,$css,dEvent){
	$css.add('css/discount.css');
	$http.get("json/d2.json").success(function(res){
			
			// console.log(res.new.list)
			$scope.dswiper = res.new.slider;
			$scope.dpic1 = res.new.dpic;
			$scope.dpic2 = res.new.dnew[0].pic;
			$scope.dlist = res.new.list;
	});
	dEvent.remove();
	dEvent.getData();
	dEvent.nav();
	// console.log(3)

}])
//母婴页面
.controller('discountCtrl3',["$scope","$http","$css","dEvent",function($scope,$http,$css,dEvent){
	$css.add('css/discount.css');
	$http.get("json/d2.json").success(function(res){
			
			// console.log(res.new.list)
			$scope.dswiper = res.new.slider;
			$scope.dpic1 = res.new.dpic;
			$scope.dpic2 = res.new.dnew[0].pic;
			$scope.dlist = res.new.list;
	});
	dEvent.remove();
	dEvent.getData();
	dEvent.nav();
	// console.log(4)

}])
//家居数码页面
.controller('discountCtrl4',["$scope","$http","$css","dEvent",function($scope,$http,$css,dEvent){
	$css.add('css/discount.css');
	$http.get("json/d2.json").success(function(res){
			
			// console.log(res.new.list)
			$scope.dswiper = res.new.slider;
			$scope.dpic1 = res.new.dpic;
			$scope.dpic2 = res.new.dnew[0].pic;
			$scope.dlist = res.new.list;
	});
	dEvent.remove();
	dEvent.getData();
	dEvent.nav();
	// console.log(5)

}])
//男士页面
.controller('discountCtrl5',["$scope","$http","$css","dEvent",function($scope,$http,$css,dEvent){
	$css.add('css/discount.css');
	$http.get("json/d2.json").success(function(res){
			
			// console.log(res.new.list)
			$scope.dswiper = res.new.slider;
			$scope.dpic1 = res.new.dpic;
			$scope.dpic2 = res.new.dnew[0].pic;
			$scope.dlist = res.new.list;
	});
	dEvent.remove();
	dEvent.getData();
	dEvent.nav();
	// console.log(6)

}])
//美妆页面
.controller('discountCtrl6',["$scope","$http","$css","dEvent",function($scope,$http,$css,dEvent){
	$css.add('css/discount.css');
	$http.get("json/d2.json").success(function(res){
			
			// console.log(res.new.list)
			$scope.dswiper = res.new.slider;
			$scope.dpic1 = res.new.dpic;
			$scope.dpic2 = res.new.dnew[0].pic;
			$scope.dlist = res.new.list;
	});
	dEvent.remove();
	dEvent.getData();
	dEvent.nav();
	// console.log(7)

}])
//美食页面
.controller('discountCtrl7',["$scope","$http","$css","dEvent",function($scope,$http,$css,dEvent){
	$css.add('css/discount.css');
	$http.get("json/d2.json").success(function(res){
			
			// console.log(res.new.list)
			$scope.dswiper = res.new.slider;
			$scope.dpic1 = res.new.dpic;
			$scope.dpic2 = res.new.dnew[0].pic;
			$scope.dlist = res.new.list;
	});
	dEvent.remove();
	dEvent.getData();
	dEvent.nav();
	// console.log(8)

}])

