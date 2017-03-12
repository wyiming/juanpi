app

.service('fn1',function(){
	this.move = function(){
		new Swiper ('.swiper-container', {
				direction: 'horizontal',
			    observer:true,
			    observerParents:true,
			    loop: true,	
			    paginationElement : 'li',
				autoplay: 1000,//可选选项，自动滑动
			    // 如果需要分页器			    
			    pagination:".swiper-pagination",		    
				paginationClickable :true,
			    autoplayDisableOnInteraction:false
						
		 }) 
	}
	this.addcontent = function(){
		$('.family_box_nav ul').on('touchstart',function(e){
//			if($(e.target)[0].nodeName == LI){
//				$(this).css('borderBottom','0.1rem solid red')
//			}
			
			// console.log($(e.target)[0].nodeName)
			
			switch($(e.target).text()){
				case '精选':{			
					$('.family_addcontent').empty();
					$('.family_content').css('display','block');
				}
				break;
				case '百货':{
					$('.family_content').css('display','none');
					$('.family_addcontent').empty();
					$('.family_addcontent').append($('<div class="family_list"></div>'));
					for (var i = 0; i < baihuodata.length; i++) {
						var obj = $('<div class="family_list_box"><a href="javascript:void(0)"><img src="'+ baihuodata[i].pic_url+'"/></a><div class="family_list_box_center"><span>'+ baihuodata[i].time_left+'</span><span><i>¥</i>'+ baihuodata[i].cprice+'</span><span>¥'+ baihuodata[i].oprice +'</span></div><p>'+ baihuodata[i].title+'</p></div>')
						$('.family_addcontent .family_list').append(obj);
					}
				}
				break;
				case '厨房':{
					$('.family_content').css('display','none');
					$('.family_addcontent').empty();
					$('.family_addcontent').append($('<div class="family_list"></div>'));
					for (var i = 0; i < chufangdata.length; i++) {
						var obj = $('<div class="family_list_box"><a href="javascript:void(0)"><img src="'+ chufangdata[i].pic_url+'"/></a><div class="family_list_box_center"><span>'+ chufangdata[i].time_left+'</span><span><i>¥</i>'+ chufangdata[i].cprice+'</span><span>¥'+ chufangdata[i].oprice +'</span></div><p>'+ chufangdata[i].title+'</p></div>')
						$('.family_addcontent .family_list').append(obj);
					}
				}
				break;
				case '清洁':{
					$('.family_content').css('display','none');
					$('.family_addcontent').empty();
					$('.family_addcontent').append($('<div class="family_list"></div>'));
					for (var i = 0; i < qingjiedata.length; i++) {
						var obj = $('<div class="family_list_box"><a href="javascript:void(0)"><img src="'+ qingjiedata[i].pic_url+'"/></a><div class="family_list_box_center"><span>'+ qingjiedata[i].time_left+'</span><span><i>¥</i>'+ qingjiedata[i].cprice+'</span><span>¥'+ qingjiedata[i].oprice +'</span></div><p>'+ qingjiedata[i].title+'</p></div>')
						$('.family_addcontent .family_list').append(obj);
					}
				}
				break;
				case '卫浴':{
					$('.family_content').css('display','none');
					$('.family_addcontent').empty();
					$('.family_addcontent').append($('<div class="family_list"></div>'));
					for (var i = 0; i < qingjiedata.length; i++) {
						var obj = $('<div class="family_list_box"><a href="javascript:void(0)"><img src="'+ weiyudata[i].pic_url+'"/></a><div class="family_list_box_center"><span>'+ weiyudata[i].time_left+'</span><span><i>¥</i>'+ weiyudata[i].cprice+'</span><span>¥'+ weiyudata[i].oprice +'</span></div><p>'+ weiyudata[i].title+'</p></div>')
						$('.family_addcontent .family_list').append(obj);
					}
				}
				break;
				case '收纳':{
					$('.family_content').css('display','none');
					$('.family_addcontent').empty();
					$('.family_addcontent').append($('<div class="family_list"></div>'));
					for (var i = 0; i < shounadata.length; i++) {
						var obj = $('<div class="family_list_box"><a href="javascript:void(0)"><img src="'+ shounadata[i].pic_url+'"/></a><div class="family_list_box_center"><span>'+ shounadata[i].time_left+'</span><span><i>¥</i>'+ shounadata[i].cprice+'</span><span>¥'+ shounadata[i].oprice +'</span></div><p>'+ shounadata[i].title+'</p></div>')
						$('.family_addcontent .family_list').append(obj);
					}
				}
				break;
			}

		})
	}
	this.gotop = function(){
		$(window).on('scroll',function(){
			if($(this).scrollTop() > 30){
				$('.family_gotop').show()
			}else{
				$('.family_gotop').hide()
			}
		})
		$('.family_gotop').on('touchstart',function(){
			$('body').scrollTop(0);
		})
		$("#index_footer a").eq(1).css("color","red")
	}
		
})

.controller('familyCtrl',['$scope','$http','$css','fn1',function($scope,$http,$css,fn1){
    $css.add('css/family.css');
    $http.get('json/family.json').success(function(res){		
		$scope.$watch(function(){
			$scope.family_data = res.data.slide_ads.config.slide;
		});
		
		$scope.family_banner2_left = res.data.goods[0].multi_block[0].data[0].child[0];		
		$scope.family_banner2_right1 = res.data.goods[0].multi_block[0].data[1].child[0];
		$scope.family_banner2_right2 = res.data.goods[0].multi_block[0].data[1].child[1];
		$scope.family_banner3 = res.data.goods[0].multi_block[1].data[0].child[0];
		$scope.family_banner4 = res.data.goods[0].multi_block[2].data[0].child[0];
		
		arrfamily_list = res.data.goods;
		arrfamily_list.splice(0,1);
		$scope.family_list = arrfamily_list;
		baihuodata = res.baihuo;
		chufangdata = res.chufang;
		qingjiedata = res.qingjie;
		weiyudata = res.weiyu;
		shounadata = res.shouna;
	});
	fn1.move();
	fn1.addcontent();
	fn1.gotop();
}])