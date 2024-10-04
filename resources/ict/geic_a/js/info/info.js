$(function () {
    var now = new Date();

    let y = now.getFullYear();
    let mo = now.getMonth() + 1;
    let d = now.getDate();
    let dow = now.getDay();
    var week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');
    var today = new Date().getDay();
    var todayLabel = week[today];

    $('#years').text(y);
    $('#months').text(mo);
    $('#days').text(d);
    $('#dayofweeks').text(todayLabel);
});

//메뉴
$(document).ready(function() {
		var url = window.location.href;
		var referrer = document.referrer;
		
		if(url.indexOf('../../../../../WEB-INF/views/app/ict/geic_a/kiosk/01_library_info.html') > -1)
		{
			$('.nav li a').removeClass('on');
			$('.nav li a.nav_noti').addClass('on');
		}
		else if(url.indexOf('../../../../../WEB-INF/views/app/ict/geic_a/kiosk/02_library_info.html') > -1)
		{
			$('.nav li a').removeClass('active');
			$('.nav li a.nav_info').addClass('on');
		}
		else if(url.indexOf('../../../../../WEB-INF/views/app/ict/geic_a/kiosk/03_library_info.html') > -1)
		{
			$('.nav li a').removeClass('on');
			$('.nav li a.nav_faci').addClass('on');
		}
		else if(url.indexOf('../../../../../WEB-INF/views/app/ict/geic_a/kiosk/04_library_info.html') > -1 )
		{
			$('.nav li a').removeClass('on');
			$('.nav li a.nav_new').addClass('on');
		}
		else if(url.indexOf('../../../../../WEB-INF/views/app/ict/geic_a/kiosk/05_library_info.html') > -1)
		{
			$('.nav li a').removeClass('on');
			$('.nav li a.nav_best').addClass('on');
		}
		else if(url.indexOf('../../../../../WEB-INF/views/app/ict/geic_a/kiosk/06_library_info.html') > -1)
		{
			$('.nav li a').removeClass('on');
			$('.nav li a.nav_cour').addClass('on');
		}
	});

//강좌안내
 $(function(){
    $('.bslide-box').bxSlider({
    infiniteLoop: false,
    slideWidth: 900,
    controls: false,
    pager:true
    });
  });