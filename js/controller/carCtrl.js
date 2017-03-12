app.factory('cl', ['', function(){
	return {
		mm:function(){
			$('.shenghuo').on('touchmove',function(){
				
			})

		}
	};
}])


app.controller('carCtrl',function($scope,$css){

	$css.add('css/car.css');
});