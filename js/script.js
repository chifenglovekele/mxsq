$(document).ready(function(){
	/***
	   首页======================****/
	/**设置头部导航项背景图片**/
	$('.navbar ul li.on').hover(function(){
		$(this).css("background-image","url(images/navl.png)");
	},function(){
		$(this).css("background-image","url(images/navl.png)");
	});
	$('.navbar ul li.in').hover(function(){
		$(this).css("background-image","url(images/navl.png)");
	},function(){
		$(this).css("background-image","url(images/nav.png)");
	});

	$('.navbar ul li.o').hover(function(){
		$(this).css("background-image","url(../images/navl.png)");
	},function(){
		$(this).css("background-image","url(../images/navl.png)");
	});
	$('.navbar ul li.i').hover(function(){
		$(this).css("background-image","url(../images/navl.png)");
	},function(){
		$(this).css("background-image","url(../images/nav.png)");
	});

	/*设置新闻banner动作*/
	$('.img ul li').eq(0).show(); //显示第一张图片
	var lisize1 = $('.img ul li').size(); //获取轮播图数量
	//根据轮播图数量生成焦点
	for (var i = 0; i < lisize1; i++) {
		$('.num ul').append("<li></li>");
	}
	$('.num ul li').eq(0).addClass('on');
	//手动轮播
	$('.num ul li').mouseover(function(){
		$(this).addClass('on').siblings().removeClass('on');
		var index = $(this).index();
		var i = index;
		$('.img ul li').eq(index).fadeIn(400).siblings().stop().fadeOut(400);
	})
	//自动轮播
	var i=0;
	var t=setInterval(move,2000); //定时并赋为t,以便下面清除定时使用。
	function move(){
		i++;
		if (i==lisize1) {
			i=0;
		}
		$('.num ul li').eq(i).addClass('on').siblings().removeClass('on');
		$('.img ul li').eq(i).fadeIn(400).siblings().fadeOut(400);
	}
	//鼠标移上去清除滚动
	$('.news-banner').hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(move,2000);
	})

    /*设置首页新闻中心的tab样式*/
	$('.news-tab ul li').first().css({
		"background-image":"url(images/tab4.png)",
		"width":"77px",
		"padding-left":"18px",
		"border-top-left-radius":"0",
		"text-align":"left"
	});
	//设置新闻tab切换  
	$('.news-tab>ul>li').mouseover(function(){
		var index = $(this).index();
		if (index==0) {
			$(this).css("background-image","url(images/tab4.png)").siblings(".tab2").removeClass('on');
			$('.news-list').eq(index).show().siblings('.news-list').hide();
		}else{
			$(this).addClass('on').siblings().removeClass('on');
			$(".tab1").css("background-image","url(images/tab3.png)");
			$('.news-list').eq(index).show().siblings('.news-list').hide();
		}
	})

	/*获取banner-go 的第一个li*/
	$('.banner-go ul li').first().css('margin-left','0');

	//设置banner-large切换
	$('.bl-num li').first().hide();
	$('.bl-img ul li').first().show();
	$('.bl-num li').click(function(){
		var index = $(this).index();
		//$(this).hide().siblings().show();
		$(this).animate({width:"hide"},300).siblings().animate({width:"show"},300);
		$('.bl-img ul li').eq(index).animate({height:"show"},300).siblings().animate({width:"hide"},300);

	})


	/*获取video 的第一个li*/
	$('.video ul li').first().css('margin-left','0');

	/***
	   前线快报页======================****/
	//微信微博鼠标移上事件
	$('ul.wcwb-list li').hover(function(){
	 	var index = $(this).index();
	 	$('ul.wcwb-detail li').eq(index).animate({height:"show"},300).siblings().stop().animate({height:"hide"},200);
	},function(){
	 	$('ul.wcwb-detail li').stop().animate({height:"hide"},300);
	})
	//新闻tab切换
	$('.at-title-list ul li').mouseover(function(){
		var index = $(this).index();
		$(this).addClass('on').siblings().removeClass('on');
	 	$('.at-title ul li').eq(index).show().siblings().hide();
	 	$('.at-list').eq(index).show().siblings('.at-list').hide();
	})

	/***
	   情报解禁页======================****/
	//角色切换，向左向右
	var Rsize = $('.role-list ul li').size();
	var Rwidth = $('.role-list ul li').width();
	var n=0;
	$('.r-right').click(function(){
		n++;
		if (n==Rsize-2) {
			n=0;
		}
		$('.role-list ul').animate({left:-(n*Rwidth)},300);
	})
	$('.r-left').click(function(){
		n--;
		if (n==-1) {
			n=Rsize-3;
		}
		$('.role-list ul').animate({left:-(n*Rwidth)},300);
	})
	//角色tab切换
	$('.role-left ul li').first().show();  //显示大图片的第一个,因为静态页里设置了全部为隐藏
	$('.role-detail ul li').first().show(); //显示角色介绍的第一个因为,静态页里设置了全部为隐藏
	$('.role-list ul li').click(function(){
		var index = $(this).index();
		$('.role-left ul li').eq(index).animate({height:"show"},500).siblings().hide();
		$('.role-detail ul li').eq(index).animate({height:"show"},500).siblings().hide();
	})

	/**回到顶部**/
	$('.totop').click(function(){
		$('body,html').animate({scrollTop:0},500);
		return false;
	})


})