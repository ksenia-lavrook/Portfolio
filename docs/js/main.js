$(document).ready(function() {


	//Плавная прокрутка по ссылкам 
	$("nav a,a[href='#top'], a[href='#resume'], a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	    highlightSelector:"nav a"
	});

	 $("a[rel='m_PageScroll2id']").mPageScroll2id();


}); 

$("html,body").animate({scrollTop:0},500);