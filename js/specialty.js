(function(win, doc) {
    $('.nav-item').on('click', function() {
        var index = $(this).index();
        
        $('.nav-item').removeClass('nav-item_active');
        $(this).addClass('nav-item_active');
		$('.list').hide();
		
        if(index < 1) {
            $('.list').eq(0).show();
        } else {
            $('.list').eq(1).show();
        }
    });
})(window, document);