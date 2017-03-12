app
.service('global',function(){
	this.swipe = function(){
         var mySwiper = new Swiper(".swiper-container",{  
                direction:"horizontal",/*横向滑动*/  
                loop:true,/*形成环路（即：可以从最后一张图跳转到第一张图*/  
                pagination:".swiper-pagination",/*分页器*/  
                observer:true,
                observerParents:true,
                // effect:'fade',
                // centeredSlides:true,
                autoplayDisableOnInteraction : true,
                autoplay:2000/*每隔3秒自动播放*/ 
            })  
	}
   
})
.controller('globalCtrl',["$scope","$css","$http","global",function($scope,$css,$http,global){
        $css.add('css/global.css');
        $http.get('json/global.json').success(function(res){
                 $scope.dataBanner = res.data.banner_ads;
                 $scope.dataAd = res.data.module_ads.multi_block[0].data[0].child;
        });
         $http.get('json/global_1.json').success(function(res){
                 $scope.dataList = res.data.goods;
                 $scope.dataList_2 = res.data.goods_1;
                 $scope.dataList_3 = res.data.goods_2;
        });
        global.swipe();
}])