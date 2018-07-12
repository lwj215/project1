function page(ye){
		$.ajax({
				url:"js/data/"+ye+".json",
				success:function(data){
					var html=baidu.template('tpms',data);
					$("#tpm").html(html)
				}
				});
				
	}
	page(4);
	
	
	var ye=4;
	$("#che-s>span").each(function(num){
		$(this).click(function(){
			if(num>=1 && num<=2){
				ye=num+3;
			}else if(num==0){
					if(ye!=4){
						ye--;
					}
				}else if(num==3){
					if(ye!=5){
						ye++;
					}
				}
				
				page(ye);
				$(".checkbox-num").eq(ye-4).css({
					"border":"none","color":"#000",
					"font-weight":"bold"}).siblings("span").css({
						"border":"1px solid #d5d7c0","font-weight":"normal",
						"color":"#2e74d3"
					});
				if(ye==5){
					$(".shop-list-checkbox>span").eq(3).css('display','none')
					$(".shop-list-checkbox>span").first().css('display','inline-block')
				}
				
				if(ye==4){
					$(".shop-list-checkbox>span").eq(3).css('display','inline-block')
					$(".shop-list-checkbox>span").first().css('display','none')
				}
				
				$("html body").scrollTop(0)
			})
		})
	
$('#tpm').on('click','.tch-ifo-btn',function(){
	location="torder.html"
})

$(".navLi").each(function(z){
	$(this).click(function(){
		$(this).css({'border-bottom':'4px solid #128422','color':'#128422'})
				.siblings(".navLi").css({'border':'none','color':'#666'})
				
		if(z!=0){
			$(".contents").eq(z).css('display','block').siblings(".contents").css('display','none')
		}else if(z==0){
			$('.contents').css('display','block')
		}
	})
})

$(document).scroll(function(){
	if($('html body').scrollTop()>=361){
	$('.tch-menu-nav').css({'position':'fixed',
							'top':'0',
							'background':'#fff',
							'z-index':'2'})
		}else{
			$('.tch-menu-nav').css('position','static')
		}
})


$("#oinput").focus(function(){
	$('.form-Ifo').css('display','block')
})

$("#oinput").blur(function(){
	setTimeout(function(){
		$('.form-Ifo').css('display','none')
	},500)
	
})

$('.form-Ul').on('click','li',function(){
	$('#oinput').val($(this).children('a').text())
})

$('#oinput').on('keyup',function(){
	  var $that=$(this);
	  $.ajax({
	  	type:"get",
	  	url:"http://suggest.bang.360.cn/suggest",
	  	async:true,
	  	dataType:'jsonp',
		jsonpCallback:'back',
		data:{
			'word':$that.val()
		},
		success:function(data){
			var result=data.s;
		    var html="";
		    for(var x in result){
		    	html+="<li><a>"+result[x]+"</a></li>"
		    }
		    $(".form-Ul").html(html);	
		}
		
	  });
  
})

function init(){
        var map = new AMap.Map('myMap-main', {
            center: [117.000923, 36.675807],
            zoom: 6
        });
        map.plugin(["AMap.ToolBar"], function() {
            map.addControl(new AMap.ToolBar());
        });
    }

function inits(){
        var map = new AMap.Map('container', {
            center: [117.000923, 36.675807],
            zoom: 6
        });
        map.plugin(["AMap.ToolBar"], function() {
            map.addControl(new AMap.ToolBar());
        });
    }

$('.close-map').on('click',function(){
	$('#tch-myMap').css('display','none')
})

$('.ckdt').on('click',function(){
	$('#tch-myMap').css('display','block')
})
