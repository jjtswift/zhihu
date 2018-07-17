 function showInform(){
	 document.getElementById("mouse").style.display='block';
  }
function hid(){
	document.getElementById("mouse").style.display='none';
} 
$(window).scroll(function(){
	var top=$(".main").offset().top;
	if($(this).scrollTop()>=top){
		$(".goaw").css({
			"transform":"translateY(-40px)"
		});
	}
	else{
		$(".goaw").css({
			"transform":"translateY(0px)"
		});
	}
	 for(i=1;i<$(".list-item").length;i++){
		var shooter=$("ul li").eq(i).offset().top;
		if($(this).scrollTop()>=shooter){
			$(".footer").css({
				"position":"static"
			});
			
		}
		else{
			$(".footer").css({
				"position":"fixed"
			});
		}
		
	} 
	
});
$(function () {
            /*实现点击滚动回顶部*/
            $("#back-to-top").click(function () {
                $("html,body").scrollTop(0);
            });
})