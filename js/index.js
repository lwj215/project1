
	var i=0;
function lunBo(){
			$("#ulBo").animate({
				"left":-1200
			},1000,function(){
				$(".bannar-point>span").eq(i).css("background","green").siblings("span").css("background","#fff");
				$(this).css("left",0).children("li").first().appendTo($("#ulBo"));
				i++;
				if(i==4){
					i=0
				}
			})
		}
setInterval(lunBo,2000)

	function page(ye){
		$.ajax({
				url:"js/data/"+ye+".json",
				success:function(data){
					var html=baidu.template('tpl',data);
					$("#shop-items").html(html)
				}
				});
				
	}
	page(1);
	
	var ye=1;
	$(".shop-list-checkbox>span").each(function(num){
		$(this).click(function(){
			if(num>=2 && num<=4){
				ye=num-1;
			}else if(num==1){
					if(ye!=1){
						ye--;
					}
				}else if(num==0){
					ye=1;
				}else if(num==5){
					if(ye!=3){
						ye++;
					}
				}else if(num==6){
					ye=3;
				};
				
				page(ye);
				$(".checkbox-num").eq(ye).css({
					"background":"#FC6621",
					"color":"#fff"}).siblings("span").css({
						"background":"#fff",
						"color":"#999"
					});
				if(ye==3){
					$(".shop-list-checkbox>span").last().css('display','none')
					$(".shop-list-checkbox>span").eq(5).css('display','none')
					$(".shop-list-checkbox>span").first().css('display','inline-block')
					$(".shop-list-checkbox>span").eq(1).css('display','inline-block')
				}
				
				if(ye==1){
					$(".shop-list-checkbox>span").last().css('display','inline-block')
					$(".shop-list-checkbox>span").eq(5).css('display','inline-block')
					$(".shop-list-checkbox>span").first().css('display','none')
					$(".shop-list-checkbox>span").eq(1).css('display','none')
				}
				
				if(ye==2){
					$(".shop-list-checkbox>span").css('display','inline-block')
				}
				
				$("html body").scrollTop(1400)
					
		})
	})
	
$("#shop-items").on('click','.shop-btn',function(){
	location="technology.html"
})

function init(){
        var map = new AMap.Map('myMap-main', {
            center: [116.65947318, 39.89266176],
            zoom: 6
        });
        map.plugin(["AMap.ToolBar"], function() {
            map.addControl(new AMap.ToolBar());
        });
    }

$('.close-map').on('click',function(){
	$('#tch-myMap').css('display','none')
})

$('#map-btn').on('click',function(){
	$('#tch-myMap').css('display','block')
})
