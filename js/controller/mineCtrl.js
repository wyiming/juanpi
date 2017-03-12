app.service('minemine',function(){
	this.mufl = function(){
		
		$('.login-switch a').on('touchstart',function(){
			var index;
			$('.login-switch a').css({
				color:'#A0A0A0',
				borderBottom:'1px solid transparent'
			})
			
			$(this).css({
				color:'#ff464e',
				borderBottom:'1px solid #ff464e'
			})
			$('.code-container>div').css({
				display:'none'
			})
			index = $(this).index();
			$('.code-container>div').eq(index).css({
				display:'block'
			})
			console.log("ssss")
		})

		// 登录注册

		$('.user-login>a').on('touchstart',function(){
			var index = $(this).index();

			$('#box-container').animate({
				left:-16+'rem'
			},500)
			$('.page-container>div').css({
				zIndex:1
			})
			$('.page-container>div').eq(index).css({
				zIndex:2
			})

		})

		$('.back-mine').on('touchstart',function(){
			$('#box-container').animate({
				left:0
			},500)
		})
		// 注册按钮判断
		var mobStr,codeStr;
		var isTrue;
		var a = 1,b=1;
		var mobReg = /^1[358]\d{9}$/;
		var codeReg = /^[0-9a-zA-Z]{4}$/;
		$('#mob-text').on('blur',function(){
			mobStr = $('#mob-text').val();
			if((mobReg.test(mobStr))){
				$('.reg-state').text("验证通过");
				$('.reg-state').css('color','green');
				a = 2;
			}else{
				$('.reg-state').text("请正确输入11位手机号码");
				$('.reg-state').css('color','red');
				a = 1;
			}

		})
		console.log(a);
		$('#mob-code').on('blur',function(){
			codeStr = $('#mob-code').val();
			if(codeReg.test(codeStr)){
					console.log('true');
					$('.code-state').text("验证通过");
					$('.code-state').css('color','green');
					b = 2;
				}else{
					$('.code-state').text("请输入四位字母数字验证码");
					$('.code-state').css('color','red');
					b= 1;
				}
				if((a== 2) && (b==2)){

					$('.next-step').css('background','green');
				}
			})
			
			

		//获取验证码
		
		$('.get-mob-code').on('touchstart',function(){
			var num = 60;
			var timer = setInterval(function(){
				num--;
				$('.get-mob-code').text(num + 's');
				if(num == 0){
					clearInterval(timer);
					$('.get-mob-code').text('重新获取');
					return;
				}
			},1000)
			
			$(this).css({
				borderRadius:'25%',
				background:'#f2f2f2'
			})

		})

		
		// mywallet 事件
		$('.open-mywallet').on('touchstart',function(){
			$('.mywallet').css({
				display:'block'
			})
		})
		$('.colse-mywallet').on('touchstart',function(){
			$('.mywallet').css({
				display:'none'
			})

		})



	}

});



app.controller('mineCtrl',['$scope','$css','$http','minemine',function($scope,$css,$http,minemine){
	$css.add('css/mine.css');
	
	minemine.mufl();
}]);