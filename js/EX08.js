/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-04 14:13:04
 * @version $Id$
 */
$(document).ready(function(){
	$(".content1").show();
    $(".content2").hide();
    $(".content3").hide();
	$(".guideMenu-ul-first").click(function(){
          $(".guideMenu-ul-first").css("background","#c0c0c0");
          $(".guideMenu-ul-second").css("background","white");
          $(".guideMenu-ul-third").css("background","white");
          $(".content1").show();
          $(".content2").hide();
          $(".content3").hide();

        });
	$(".guideMenu-ul-second").click(function(){
          $(".guideMenu-ul-first").css("background","white");
          $(".guideMenu-ul-second").css("background","#c0c0c0");
          $(".guideMenu-ul-third").css("background","white");
          $(".content2").show();
          $(".content1").hide();
          $(".content3").hide();
        });
	$(".guideMenu-ul-third").click(function(){
          $(".guideMenu-ul-first").css("background","white");
          $(".guideMenu-ul-second").css("background","white");
          $(".guideMenu-ul-third").css("background","#c0c0c0");
          $(".content3").show();
          $(".content2").hide();
          $(".content1").hide();
        });
});
// 要求1：
var map1 = new BMap.Map("myMap1"); 
var point1 = new BMap.Point(120.151344,30.245919);
map1.centerAndZoom(point1, 15);   
map1.addControl(new BMap.NavigationControl());   
map1.addControl(new BMap.ScaleControl());    
map1.addControl(new BMap.OverviewMapControl());    
map1.addControl(new BMap.MapTypeControl());    
map1.setCurrentCity("杭州"); 
var myIcon = new BMap.Icon("image/EX08/marker.png", new BMap.Size(45,42));       
var marker = new BMap.Marker(point1,{icon: myIcon});    
map1.addOverlay(marker);      
marker.enableDragging();    
marker.addEventListener("dragend", function(e){    
 alert("当前位置：" + e.point.lng + ", " + e.point.lat);    
})
var local = new BMap.LocalSearch(map1, {
	 pageCapacity: 100,
    renderOptions: {
    map: map1,
    autoViewport: true
  }
});
local.searchNearby("宾馆",point1);

//要求2：
var map2 = new BMap.Map("myMap2"); 
var point2 = new BMap.Point(120.151344,30.245919);
map2.centerAndZoom(point2, 15);   
map2.addControl(new BMap.NavigationControl());   
map2.addControl(new BMap.ScaleControl());    
map2.addControl(new BMap.OverviewMapControl());    
map2.addControl(new BMap.MapTypeControl());    
map2.setCurrentCity("杭州"); 
var marker2 = new BMap.Marker(point2);// 创建标注    
map2.addOverlay(marker2);
marker2.enableDragging();    
marker2.addEventListener("dragend", function(e){    
 alert("当前位置：" + e.point.lng + ", " + e.point.lat);    
})
var transit = new BMap.TransitRoute(map2, {
  renderOptions: {
    map: map2,
    panel: "results"
  }
});
// transit.search("杭州师范大学仓前新校区", "宾馆");
function search()
    {
        var start = $("#begin").val() ,end = $("#end").val();
        transit.search(start,end);
    }
//要求三
var map3 = new BMap.Map("myMap3"); 
var point3 = new BMap.Point(120.014891, 30.29545);
map3.centerAndZoom(point3, 19);   
map3.addControl(new BMap.NavigationControl());   
map3.addControl(new BMap.ScaleControl());    
map3.addControl(new BMap.OverviewMapControl());    
map3.addControl(new BMap.MapTypeControl());    
map3.setCurrentCity("杭州");
//中心点标记
var marker3 = new BMap.Marker(point3);    
map3.addOverlay(marker3);
//宿舍楼标记
var myIcon = new BMap.Icon("image/EX08/domitory.png", new BMap.Size(45,50));
var point4 = new BMap.Point(120.015143, 30.296448);
var point5 = new BMap.Point(120.016418, 30.295746);
var point6 = new BMap.Point(120.016189, 30.294822);
var point7 = new BMap.Point(120.016203, 30.295914);
var point8 = new BMap.Point(120.015699, 30.296573);
var point35 = new BMap.Point(120.016117, 30.295068);

var marker4 = new BMap.Marker(point4,{icon: myIcon});    
map3.addOverlay(marker4); 
var html1 = document.getElementById('bowenyuan');
var infoWindow1 = new BMap.InfoWindow(html1);
marker4.addEventListener("click", function () { this.openInfoWindow(infoWindow1); });

var marker5 = new BMap.Marker(point5,{icon: myIcon});    
map3.addOverlay(marker5); 
var html1 = document.getElementById('bowenyuan');
var infoWindow1 = new BMap.InfoWindow(html1);
marker5.addEventListener("click", function () { this.openInfoWindow(infoWindow1); });

var marker6 = new BMap.Marker(point6,{icon: myIcon});    
map3.addOverlay(marker6);
var html1 = document.getElementById('bowenyuan');
var infoWindow1 = new BMap.InfoWindow(html1);
marker6.addEventListener("click", function () { this.openInfoWindow(infoWindow1); });

var marker7 = new BMap.Marker(point7,{icon: myIcon});    
map3.addOverlay(marker7); 
var html1 = document.getElementById('bowenyuan');
var infoWindow1 = new BMap.InfoWindow(html1);
marker7.addEventListener("click", function () { this.openInfoWindow(infoWindow1); });

var marker8 = new BMap.Marker(point8,{icon: myIcon});    
map3.addOverlay(marker8); 
var html1 = document.getElementById('bowenyuan');
var infoWindow1 = new BMap.InfoWindow(html1);
marker8.addEventListener("click", function () { this.openInfoWindow(infoWindow1); });

var marker35 = new BMap.Marker(point35,{icon: myIcon});    
map3.addOverlay(marker35); 
var html1 = document.getElementById('bowenyuan');
var infoWindow1 = new BMap.InfoWindow(html1);
marker35.addEventListener("click", function () { this.openInfoWindow(infoWindow1); });
//图书馆标记
var myIcon1 = new BMap.Icon("image/EX08/library.png", new BMap.Size(40,25));
var point9 = new BMap.Point(120.02214, 30.298724);
var marker9 = new BMap.Marker(point9,{icon: myIcon1});    
map3.addOverlay(marker9); 
var html2 = document.getElementById('tushuguan');
var infoWindow2 = new BMap.InfoWindow(html2);
marker9.addEventListener("click", function () { this.openInfoWindow(infoWindow2); });
//教学楼标记
var myIcon2 = new BMap.Icon("image/EX08/classroom.png", new BMap.Size(40,25));
var point10 = new BMap.Point(120.019733, 30.29803);
var point11= new BMap.Point(120.020303, 30.29796);
var point12 = new BMap.Point(120.019252, 30.297937);
var point13 = new BMap.Point(120.018323, 30.297964);
var point14 = new BMap.Point(120.017442, 30.297995);
var point15= new BMap.Point(120.020043, 30.297765);
var point16 = new BMap.Point(120.019477, 30.297415);
var point17 = new BMap.Point(120.020523, 30.297403);
var point18 = new BMap.Point(120.019679, 30.297118);
var point19= new BMap.Point(120.020743, 30.297185);
var point20 = new BMap.Point(120.020371, 30.296982);
var point21 = new BMap.Point(120.020532, 30.296814);
var point22 = new BMap.Point(120.020523, 30.297403);
var point23 = new BMap.Point(120.019769, 30.29681);
var point24= new BMap.Point(120.019755, 30.296428);
var point25 = new BMap.Point(120.019275, 30.29669);
var point26 = new BMap.Point(120.017671, 30.29669);
var point27 = new BMap.Point(120.017438, 30.296904);
var point28 = new BMap.Point(120.013975, 30.297235);
var point29= new BMap.Point(120.017191, 30.294035);
var point30 = new BMap.Point(120.01857, 30.294366);
var point31 = new BMap.Point(120.018942, 30.295271);
var point32 = new BMap.Point(120.019814, 30.295575);
var point33 = new BMap.Point(120.020371, 30.295033);
var point34 = new BMap.Point(120.020353, 30.295742);

var marker10 = new BMap.Marker(point10,{icon: myIcon2});    
map3.addOverlay(marker10); 
var html3 = document.getElementById('shuyuan');
var infoWindow3 = new BMap.InfoWindow(html3);
marker10.addEventListener("click", function () { this.openInfoWindow(infoWindow3); });

var marker11 = new BMap.Marker(point11,{icon: myIcon2});    
map3.addOverlay(marker11); 
var html3 = document.getElementById('shuyuan');
var infoWindow3 = new BMap.InfoWindow(html3);
marker11.addEventListener("click", function () { this.openInfoWindow(infoWindow3); });
var marker12 = new BMap.Marker(point12,{icon: myIcon2});    
map3.addOverlay(marker12); 
var html3 = document.getElementById('shuyuan');
var infoWindow3 = new BMap.InfoWindow(html3);
marker12.addEventListener("click", function () { this.openInfoWindow(infoWindow3); });
var marker13 = new BMap.Marker(point13,{icon: myIcon2});    
map3.addOverlay(marker13); 
var html3 = document.getElementById('shuyuan');
var infoWindow3 = new BMap.InfoWindow(html3);
marker13.addEventListener("click", function () { this.openInfoWindow(infoWindow3); });    
var marker14 = new BMap.Marker(point14,{icon: myIcon2});    
map3.addOverlay(marker14); 
var html3 = document.getElementById('shuyuan');
var infoWindow3 = new BMap.InfoWindow(html3);
marker14.addEventListener("click", function () { this.openInfoWindow(infoWindow3); });
var marker15 = new BMap.Marker(point15,{icon: myIcon2});    
map3.addOverlay(marker15); 
var html3 = document.getElementById('shuyuan');
var infoWindow3 = new BMap.InfoWindow(html3);
marker15.addEventListener("click", function () { this.openInfoWindow(infoWindow3); });
var marker16 = new BMap.Marker(point16,{icon: myIcon2});    
map3.addOverlay(marker16);  
var html3 = document.getElementById('shuyuan');
var infoWindow3 = new BMap.InfoWindow(html3);
marker16.addEventListener("click", function () { this.openInfoWindow(infoWindow3); });   
var marker17 = new BMap.Marker(point17,{icon: myIcon2});    
map3.addOverlay(marker17); 
var html3 = document.getElementById('shuyuan');
var infoWindow3 = new BMap.InfoWindow(html3);
marker17.addEventListener("click", function () { this.openInfoWindow(infoWindow3); });
var marker18 = new BMap.Marker(point18,{icon: myIcon2});    
map3.addOverlay(marker18); 
var html3 = document.getElementById('shuyuan');
var infoWindow3 = new BMap.InfoWindow(html3);
marker18.addEventListener("click", function () { this.openInfoWindow(infoWindow3); });
var marker19 = new BMap.Marker(point19,{icon: myIcon2});    
map3.addOverlay(marker19);     
var html3 = document.getElementById('shuyuan');
var infoWindow3 = new BMap.InfoWindow(html3);
marker19.addEventListener("click", function () { this.openInfoWindow(infoWindow3); });
var marker20 = new BMap.Marker(point20,{icon: myIcon2});    
map3.addOverlay(marker20); 
var html3 = document.getElementById('shuyuan');
var infoWindow3 = new BMap.InfoWindow(html3);
marker20.addEventListener("click", function () { this.openInfoWindow(infoWindow3); });

var marker21 = new BMap.Marker(point21,{icon: myIcon2});    
map3.addOverlay(marker21); 
var html3 = document.getElementById('shuyuan');
var infoWindow3 = new BMap.InfoWindow(html3);
marker21.addEventListener("click", function () { this.openInfoWindow(infoWindow3); });

var marker22 = new BMap.Marker(point22,{icon: myIcon2});    
map3.addOverlay(marker22);   
var html3 = document.getElementById('shuyuan');
var infoWindow3 = new BMap.InfoWindow(html3);
marker22.addEventListener("click", function () { this.openInfoWindow(infoWindow3); });

var marker23 = new BMap.Marker(point23,{icon: myIcon2});    
map3.addOverlay(marker23); 
var html3 = document.getElementById('shuyuan');
var infoWindow3 = new BMap.InfoWindow(html3);
marker23.addEventListener("click", function () { this.openInfoWindow(infoWindow3); });

var marker24 = new BMap.Marker(point24,{icon: myIcon2});    
map3.addOverlay(marker24); 
var html3 = document.getElementById('shuyuan');
var infoWindow3 = new BMap.InfoWindow(html3);
marker24.addEventListener("click", function () { this.openInfoWindow(infoWindow3); });

var marker25 = new BMap.Marker(point25,{icon: myIcon2});    
map3.addOverlay(marker25); 
var html3 = document.getElementById('shuyuan');
var infoWindow3 = new BMap.InfoWindow(html3);
marker25.addEventListener("click", function () { this.openInfoWindow(infoWindow3); });

var marker26 = new BMap.Marker(point26,{icon: myIcon2});    
map3.addOverlay(marker26); 
var html3 = document.getElementById('shuyuan');
var infoWindow3 = new BMap.InfoWindow(html3);
marker26.addEventListener("click", function () { this.openInfoWindow(infoWindow3); });

var marker27 = new BMap.Marker(point27,{icon: myIcon2});    
map3.addOverlay(marker27);   
var html3 = document.getElementById('shuyuan');
var infoWindow3 = new BMap.InfoWindow(html3);
marker27.addEventListener("click", function () { this.openInfoWindow(infoWindow3); });

var marker28 = new BMap.Marker(point28,{icon: myIcon2});    
map3.addOverlay(marker28); 
var html3 = document.getElementById('shuyuan');
var infoWindow3 = new BMap.InfoWindow(html3);
marker28.addEventListener("click", function () { this.openInfoWindow(infoWindow3); });

var marker29 = new BMap.Marker(point29,{icon: myIcon2});    
map3.addOverlay(marker29);   
var html3 = document.getElementById('shuyuan');
var infoWindow3 = new BMap.InfoWindow(html3);
marker29.addEventListener("click", function () { this.openInfoWindow(infoWindow3); });

var marker30 = new BMap.Marker(point30,{icon: myIcon2});    
map3.addOverlay(marker30); 
var html3 = document.getElementById('shuyuan');
var infoWindow3 = new BMap.InfoWindow(html3);
marker30.addEventListener("click", function () { this.openInfoWindow(infoWindow3); });

var marker31 = new BMap.Marker(point31,{icon: myIcon2});    
map3.addOverlay(marker31);
var html3 = document.getElementById('shuyuan');
var infoWindow3 = new BMap.InfoWindow(html3);
marker31.addEventListener("click", function () { this.openInfoWindow(infoWindow3); });

var marker32 = new BMap.Marker(point32,{icon: myIcon2});    
map3.addOverlay(marker32);   
var html3 = document.getElementById('shuyuan');
var infoWindow3 = new BMap.InfoWindow(html3);
marker3.addEventListener("click", function () { this.openInfoWindow(infoWindow3); });

var marker33 = new BMap.Marker(point33,{icon: myIcon2});    
map3.addOverlay(marker33); 
var html3 = document.getElementById('shuyuan');
var infoWindow3 = new BMap.InfoWindow(html3);
marker33.addEventListener("click", function () { this.openInfoWindow(infoWindow3); });

var marker34 = new BMap.Marker(point34,{icon: myIcon2});    
map3.addOverlay(marker34); 
var html3 = document.getElementById('shuyuan');
var infoWindow3 = new BMap.InfoWindow(html3);
marker34.addEventListener("click", function () { this.openInfoWindow(infoWindow3); });

//食堂标记
var myIcon3 = new BMap.Icon("image/EX08/canteen.png", new BMap.Size(40,39));
var point36 = new BMap.Point(120.015803, 30.293673);
var point37= new BMap.Point(120.017195, 30.293731);
var marker36 = new BMap.Marker(point36,{icon: myIcon3});    
map3.addOverlay(marker36); 
var html4 = document.getElementById('shitang');
var infoWindow4 = new BMap.InfoWindow(html4);
marker36.addEventListener("click", function () { this.openInfoWindow(infoWindow4); });

var marker37 = new BMap.Marker(point37,{icon: myIcon3});    
map3.addOverlay(marker37); 
var html4 = document.getElementById('shitang');
var infoWindow4 = new BMap.InfoWindow(html4);
marker37.addEventListener("click", function () { this.openInfoWindow(infoWindow4); });
//超市标记
var myIcon4 = new BMap.Icon("image/EX08/market.png", new BMap.Size(35,35));
var point38 = new BMap.Point(120.016948, 30.29538);
var marker38 = new BMap.Marker(point38,{icon: myIcon4});    
map3.addOverlay(marker38); 
var html5 = document.getElementById('chaoshi');
var infoWindow5 = new BMap.InfoWindow(html5);
marker38.addEventListener("click", function () { this.openInfoWindow(infoWindow5); });
//操场标记
var myIcon5 = new BMap.Icon("image/EX08/gym.png", new BMap.Size(45,26));
var point39= new BMap.Point(120.014249, 30.295123);
var marker39 = new BMap.Marker(point39,{icon: myIcon5});    
map3.addOverlay(marker39); 
var html6 = document.getElementById('tiyuchang');
var infoWindow6 = new BMap.InfoWindow(html6);
marker39.addEventListener("click", function () { this.openInfoWindow(infoWindow6); });