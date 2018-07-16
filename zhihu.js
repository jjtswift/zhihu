 function showInform(){
	 document.getElementById("mouse").style.display='block';
  }
function hid(){
	document.getElementById("mouse").style.display='none';
} 
$(window).scroll(function(){
	var xx=document.body.scrollTop||document.documentElement.scrollTop;
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
});
$(function () {
            /*实现点击滚动回顶部*/
            $("#back-to-top").click(function () {
                $("html,body").scrollTop(0);
            });
})