(function(win, doc) {
	
	//两大支持 
	$('.support-nav-item').on('click', function() {
		var index = $(this).index();
		
		$('.support-nav-item').removeClass('support-nav-item_active');
		$(this).addClass('support-nav-item_active');
		
		$('.support-module').hide();
		$('.support-module').eq(index).show();
	});
	
	// 下拉框
	$('.select-drop-downListItem').on('click', function() {
		$('.select-drop-downList').attr('style', 'display:none;');
		$('.bottom-arrow-icon').attr('style', 'transform:rotate(0deg);');
		
		event.stopPropagation();
	});
	
	$('.select, .select-2').on('click', function() {
		var display = $('.select-drop-downList').css('display');
		
		if(display === 'none') {
			$('.select-drop-downList').attr('style', '');
			$('.bottom-arrow-icon').attr('style', '');
		}
	});
})(window, document);