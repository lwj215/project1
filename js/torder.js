var fwf=0;
$('#serviceMethod').change(function(){
		var fwf=0;
		if($(this).val()==1){
			fwf=30;
		}else{
			fwf=0
		}
		$(".torder-cath").html(parseInt($("#dj").text())*parseInt($("#Mnum").val())+fwf);
		return fwf;
	})

//绑定购物车物品数量减1功能
$("#Jian").on('click',function(){
	if($("#Mnum").val()>1){
		$("#Mnum").val($("#Mnum").val()-1);
		$(".torder-cath").html(parseInt($("#dj").text())*parseInt($("#Mnum").val())+fwf)
	}else{
		$('.Jian-ts').css('display','block');
		$('.Jian-ts').fadeOut(2000);
	}
})

//绑定购物车物品数量加1功能
$("#Ja").on('click',function(){
		$("#Mnum").val(parseInt($("#Mnum").val())+1);
		var newZ=$('#serviceMethod').val();
		if(newZ==1){
			fwf=30
		}else{fwf=0};
		$(".torder-cath").html(parseInt($("#dj").text())*parseInt($("#Mnum").val())+fwf)
})

//绑定input输入框数字发生改变时触发总金额改变
$("#Mnum").on('keyup',function(){
	var fwf=0;
	if($('#serviceMethod').val()==1){
		fwf=30
	}else{fwf=0}
	$(".torder-cath").html(parseInt($("#dj").text())*parseInt($(this).val())+fwf);
}	
)


//正则表达式验证手机号码格式
$(".torder-phone-inp").blur(function(){
	var num=$(this).val();
	var reg=/^1[3578]\d{9}$/;
	if(!(num=='')){
		if(!reg.test(num)){
		$("#phoneNum").css('display','block')
		}else{
		$("#phoneNum").css('display','none')
	}
	}else{
		$("#phoneNum").css('display','none')
	}
	
})

//设置在线支付的具体方式选择唯一性
$(".torder-ta-inps").on('click','input',function(){
	$(this).attr('checked',true).siblings('input').attr('checked',false)
})

//设置点击切换在线支付与当面支付两种付款方式
$(".dmfk").on('click',function(){
	$(".torder-ta-inps").css('display','none');
	$(this).css('border','2px solid #2FAF14').siblings().css('border','1px solid #CECECE')
})
$('.border-active').on('click',function(){
	$(".torder-ta-inps").css('display','block');
	$(this).css('border','2px solid #2FAF14').siblings().css('border','1px solid #CECECE')
})


	

