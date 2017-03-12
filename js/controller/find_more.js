document.documentElement.style.fontSize = innerWidth/16 + 'px';
window.onresize = function(){
	document.documentElement.style.fontSize = innerWidth/16 + 'px';
}



$(function(){


  // 轮播图效果
	var mySwiper = new Swiper(".swiper-container",{  
        direction:"horizontal",  
        loop:true,
        pagination:".swiper-pagination",
        paginationElement:"li"
        // autoplay:100
   	})



    // 剩余时间显示
   	
   	var targetDate = new Date(2016,8,30);
		var currentDate = new Date();
		var remainTime = targetDate - currentDate;
    setInterval(function(){
    remainTime-=1000;
		//天数
		remainDay = parseInt(remainTime/1000/60/60/24);
		//小时数
		remainHours = parseInt(remainTime/1000/60/60%24);
		//分钟
		remainMinutes = parseInt(remainTime/1000/60%60);
		//秒
		remainSeconds = parseInt(remainTime/1000%60);

		$('#find_time p').text("剩余" +remainDay + "天"+remainHours+"小时"+remainMinutes+"分钟"+remainSeconds+"秒")

   	},1000)



	 //购买颜色选择
   	$('#find_color_box').find('p').on('touchstart',function(){
   		$('#find_color_box').find('p').css({
   			background:'#fff',
   			color:'#666'
   		});
   		$(this).css({
   			background:'red',
   			color:'#fff'
   		})
   	})




    // 轮播图右上侧点击事件
    var isshow = false;
    $('#find_mune_more').on('touchstart',function(){
      isshow?$('#find_mune_more_hidden').show():$('#find_mune_more_hidden').hide();
      isshow = !isshow;
    })
    $('#find_mune_more_hidden li').on('touchstart',function(){
        setTimeout(function(){
           $('#find_mune_more_hidden').hide()
        },400)
      
    })



    //懒加载
   	$('.lazy').lazyload({
   		effect:'fadeIn'
   	});



    //购买数量显示
   	$('#find_car').on('touchstart',function(){
   		$('#find_bottom_2').find('i').show()
   	})

    // 顶部搜索框固定事件
   	$('#find_return_top').on('touchstart',function(){
   		$('body').scrollTop(0) ;
   	})




    // 购买跳转事件
   	$('#find_buy_top').find('span').on('click',function(){
   		$('#find_buy').hide();
   		$('body').css({
   			overflow:'scroll'
   		})
   	})
   	$('#find_bottom_2').on('touchstart',function(){
      $('#find_mengban').show();

    // 倒计时开始
    var timer1 = 19;
    var timer2 = 59;
    var timer = setInterval(function(){
        $('#f_time1').text(timer1);
        $('#f_time2').text(timer2);
        timer2--;
        if(timer2 == 0){
            timer1--;
            timer2 =59
        }
        if(timer1 == 0){
          $('#find_waring').hide();
          return;

        }
    },1000)


    //延时器 1.5秒后跳转
      setTimeout(function(){
        $('#find_buy').show();
        $('#find_mengban').hide();
              $('body').css({
                overflow:'hidden'
              })
      },1500)
   		
   	})



})
  //angular
	var app = angular.module('myapp',[])
	.filter('test',function(){
		return function(in2){
			return in2.toFixed(2);
		}
	})
	.controller('myconroller',function($scope){
			$scope.num = 0;
	})






