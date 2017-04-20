/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-04-13 18:13:06
 * @version $Id$
 */
/*jQuery的简单使用 8.1练习
 //高级写法
// $(init)
//   function init(){
//   	$("body").on("click",'.btn',function(event){
//   		alert("aaaa");
//   	});
//   }
$(document).ready(function()
{
        $(".box1").click(function(){
          $(".box2").text("hello");
        });
        $(".box2").click(function(){
          $(".box1").css({"width":"150px","height":"150px"});
        });
        $(".box3").click(function(){
          $(".box3").css("background","greenyellow");
        });
        $(".box4").click(function(){
          $("input").val("sunday");
        });
});*/