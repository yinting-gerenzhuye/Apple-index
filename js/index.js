$(function(){
// 图片按需加载开始
  var imgs=$('img');
  var array=[];
 imgs.each(function(index){
  var top=$(this).offset().top;
    var height=$(window).height();
    var sTop=$(window).scrollTop();
  array[index]=$(this).attr("src");
  $(this).attr("src","");
  if (top<height+sTop) {
      $(this).attr("src",array[index]);
    };
 })
 $(window).scroll(function(){
  imgs.each(function(index){
    var top=$(this).offset().top;
    var height=$(window).height();
    var sTop=$(window).scrollTop();
    if (top<height+sTop) {
      $(this).attr("src",array[index]);
    };
  })
 })
  // 图片按需加载结束

	
	// 头部按钮点击效果
	var $btn=$(".btn");
	var $maxnav=$(".max-nav");
	$btn.click(function(){
		$maxnav.css({background:""});
		$(this).toggleClass("active");
		$maxnav.slideToggle(200);
		$maxnav.css({display:"block",background:"#333"});
	});

resetWin();
$(window).resize(resetWin);
function resetWin(){
	var ww=$(this).width();
	var wh=$(this).height();
	var $hh=$(".zibox .zhuti");
		if(ww>767){
			$('.xxla').show();
			$hh.removeClass("aaaa");
			$maxnav.css({display:"",height:"100%"});					
		};
		if(ww<=767){
			$('.xxla').hide();
			$maxnav.css({height:wh-44});
			$hh.addClass("aaaa");
		};
};

// 下面的向下滑出向上滑入
// function aa(){
// 	var ww=$(window).width();
// 	var $xiala=$(".xxla");
// 	var $hh=$(".zibox h3");	
// 		$hh.each(function(index){
// 			this.index=index;
// 			$(this).click(function(){
// 				if($(this).hasClass("aaaa")){
// 					$xiala.eq(this.index).slideToggle();
// 				}else{
// 					return false;
// 				};
// 			});
// 		});	
// };
// console.log($(".zibox .zhuti"))
$(".zibox .zhuti").click(function(){	
	if($(this).hasClass("aaaa")){
 		$(this).siblings("div").slideToggle();
 	};
})

// lunbo	
function lunbo(){
	var $btn=$(".bannerbtn li");
	var $box=$(".bannerbox");	
	var $imgs=$(".banner");
	$imgs.each(function(index,obj){
	    if(index!=0){
	    	$(this).css({left:"100%"})
	    };
	});
    var index=0;
	var next=0;
	var flag=true;
    //index 0   1   2    3    4     
	//next  1   2   3    4    5
	if(index==0){
		$btn.eq(index).css({background:"none",border:"1px solid #1F96D2"});
	};
	var t=setInterval(move,2000);
	function move(){
		if(!flag){
			return
		};
		flag=false;
		next++;
		if(next==$imgs.length){
			next=0;
		};
		$imgs.eq(next).css("left","100%");
		$imgs.eq(index).animate({left:"-100%"},700);
		$imgs.eq(next).animate({left:"0"},700,function(){
			flag=true;
		});
		$btn.eq(next).css({background:"none",border:"1px solid #1F96D2"});
		$btn.eq(index).css({background:"#999999",border:"none"});

		index=next;
     
	};    
    $box.hover(function(){
     clearInterval(t);
     $(".arrow").fadeIn();
    },function(){
     t=setInterval(move,2000);
      $(".arrow").fadeOut();
    });

    //index 0   1   2    3    4     
	//next  1   2   3    4    5
	$btn.click(function(){
		var i=$(this).index();
		if(index==i||!flag){
		   return;
		};
		flag=false;
		if(i>index){
		    $imgs.eq(i).css("left","100%");
		    $imgs.eq(index).animate({left:"-100%"},700);
		}else{
			$imgs.eq(i).css({left:"-100%"});
			$imgs.eq(index).animate({left:"100%"},700);
		};
      $imgs.eq(i).animate({left:"0"},400,function(){
      	flag=true;
      });
	  $btn.eq(i).css({background:"none",border:"1px solid #1F96D2"});
	  $btn.eq(index).css({background:"#999999",border:"none"});
	  index=next=i;	
	});	
};
lunbo();





})