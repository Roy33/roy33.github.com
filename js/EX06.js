/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-04-14 08:16:29
 * @version $Id$
 */

$(document).ready(function(){
	$(".ui-page1-box").click(function(){
          $(".ui-page1-enlargeBox-page").fadeIn(500);
        });
	$(".ui-page1-enlargeBox-page").click(function(){
          $(".ui-page1-enlargeBox-page").fadeOut(500);
        });
	$(".ui-page2-guideMenu-ul-first").click(function(){
          $(".ui-page2-guideMenu-ul-first").css("background","#c0c0c0");
          $(".ui-page2-guideMenu-ul-second").css("background","white");
          $(".ui-page2-guideMenu-ul-third").css("background","white");
          $(".ui-page2-content1").show();
          $(".ui-page2-content2").hide();
          $(".ui-page2-content3").hide();

        });
	$(".ui-page2-guideMenu-ul-second").click(function(){
          $(".ui-page2-guideMenu-ul-first").css("background","white");
          $(".ui-page2-guideMenu-ul-second").css("background","#c0c0c0");
          $(".ui-page2-guideMenu-ul-third").css("background","white");
          $(".ui-page2-content2").show();
          $(".ui-page2-content1").hide();
          $(".ui-page2-content3").hide();
        });
	$(".ui-page2-guideMenu-ul-third").click(function(){
          $(".ui-page2-guideMenu-ul-first").css("background","white");
          $(".ui-page2-guideMenu-ul-second").css("background","white");
          $(".ui-page2-guideMenu-ul-third").css("background","#c0c0c0");
          $(".ui-page2-content3").show();
          $(".ui-page2-content2").hide();
          $(".ui-page2-content1").hide();
        });

	$(".ui-page3-addBotton").click(function(){
		var index=$("tr:last").index()+2;
		if (index<6) {
			$("#ui-page3-table").append('<tr class="ui-page3-row"><td class="ui-page3-row-orderNum">'+index+'</td><td class="ui-page3-row-input"></td><td class="ui-page3-row-del" onClick="delRow(this)">Delete</td></tr>');
		}
		else {
			alert('页面已满');
		}
        });
});
    function delRow(obj) {
		$(obj).parent().remove();
		$(".ui-page3-row").each(function(){
			var index=$(this).index()+1;
			$(this).children(".ui-page3-row-orderNum").text(index);
		});
			}