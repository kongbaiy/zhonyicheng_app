(function(win, doc) {
    $('.nav-item').on('click', function() {
        $('.nav-item').removeClass('nav-item_active');
        
        $(this).addClass('nav-item_active');
    });
})(window, document);