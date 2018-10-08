$(document).ready(function() {


	//Плавная прокрутка по ссылкам 
	$("nav a,a[href='#top'], a[href='#resume'], a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	    highlightSelector:"nav a"
	});

	 $("a[rel='m_PageScroll2id']").mPageScroll2id();


	 // MixItUp - фильтрация работ в портфолио
	$('#portfolio-projects').mixItUp();

	// FancyBox - galery
	$(".fancybox").fancybox({
			// Default - with fix from scroll to top
            helpers: {
                overlay: {
                    locked: false
                }
            }
    });
	// End of FancyBox - galery


}); 

$("html,body").animate({scrollTop:0},500);

