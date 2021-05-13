$(function(){
/* 	var e = $("#nav"),
		f = $("#sub-nav");
	e.length && (e.on("mouseenter", function() {
		f.show()
	}).on("mouseleave", function(b) {
		$(b.relatedTarget).is("#sub-nav") ? f.show() : f.hide()
	}), f.on("mouseleave", function(b) {
		$(b.relatedTarget).is("#nav") ? f.show() : f.hide()
	})) */
	
	$(".tab_tit li").eq(0).addClass("hover");
	$(".tab_list").hide().eq(0).show();
	$(".tab_tit li").hover(function(){
		var i=$(this).index();
		$(this).addClass("hover").siblings().removeClass();
		$(".tab_list").hide().eq(i).show();
	});
});

jQuery(function($){
	var index = 0;
	var maximg = 4;

	$("#slidebar li").hover(function(){
		if(MyTime){
			clearInterval(MyTime);
		}
		index  =  $("#slidebar li").index(this);
		MyTime =show(index);

	}, function(){
		clearInterval(MyTime);
		MyTime = setInterval(function(){
		show(index);
		index++;
		if(index==maximg){index=0;}
		} , 3000);
	});

	 $('#slideimg').hover(function(){
			  if(MyTime){
				 clearInterval(MyTime);
			  }
	 },function(){
				MyTime = setInterval(function(){
				show(index);
				index++;
				if(index==maximg){index=0;}
			  } , 3000);
	 });
	//×Ô¶¯²¥·Å
	var MyTime = setInterval(function(){
		show(index);
		index++;
		if(index==maximg){index=0;}
	} , 3000);
});
function show(i){
	$("#slideimg li").eq(i).addClass("show").siblings().removeClass();
	$("#slidebar li").eq(i).addClass("on").siblings().removeClass();
}