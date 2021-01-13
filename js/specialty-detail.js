(function(win, doc) {
    // banner
	var bannerIndex = 0;
	var banner_swiper_span1 = $('.banner-swiper-page span:first-child');
	var banner_swiper_span2 = $('.banner-swiper-page span:nth-child(2)');
	var slide_img_length = $('.banner-swiper-slideImg').length;


	banner_swiper_span2.text(slide_img_length);
	
    var banner = new Swiper('.banner-container', {
		autoplayDisableOnInteraction: false,
		autoplay: 5000,
		loop: true,
        on: {
			slideChangeTransitionEnd() {
				bannerIndex = this.realIndex;
				banner_swiper_span1.text(bannerIndex + 1);
			}
		},
		navigation: {
			nextEl: '.banner-swiperPaging-deviceNext',
			prevEl: '.banner-swiperPaging-devicePrev',
		},
		a11y: {
			prevSlideMessage: 'Previous slide',
			nextSlideMessage: 'Next slide',
			firstSlideMessage: 'This is the first slide',
			lastSlideMessage: 'This is the last slide',
			paginationBulletMessage: 'Go to slide ' + (bannerIndex + 1),
			notificationClass: 'swiper-notification',
			containerMessage: 'This is a swiper',
			containerRoleDescriptionMessage: 'banner', //aria-role-description
			itemRoleDescriptionMessage: 'slider',
		}
	});
})(window, document);