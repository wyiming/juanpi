	document.documentElement.style.fontSize = innerWidth / 16 + 'px';
	window.onresize = function () {
		document.documentElement.style.fontSize = innerWidth / 16 + 'px';
	}
	var num = 0 ;
	$('.plus').on('touchstart',function(){
		num++;
		$('.res-num').text(num);
	})
	$('.minus').on('touchstart',function(){
		if(num == 0){
			num = 0;
			return;
		}
		num--;
		$('.res-num').text(num);
	})
	$('.close-x').on('touchstart',function(){
		$(this).parent().parent().parent().hide();
		$('.my-bag-total').hide();
	})

