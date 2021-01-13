(function(win, doc) {
	$(function() {
		var target_el = $('.' + _common.getQueryString('targetEl'));
		
		if(target_el && target_el.offset().top) {
			
			setTimeout(callback => {
				$('html').animate({
					scrollTop: target_el.offset().top -20
				});
			}, 200);
		}

		_common.video({
			videoEl: document.getElementById('brand-video'),
			playEl: document.getElementsByClassName('video-play-icon')[0]
		});

		// 轮播
		var brandHonorIndex = 0;
		var brandBanner = new Swiper(".brand-honor-banner", {
			autoplayDisableOnInteraction: false,
			autoplay: 5000,
			loop: true,
			autoHeight: true,
			pagination: {
				el: '.brand-honor-bannerPagination',
				clickable: true,
			},
			on: {
				slideChangeTransitionEnd() {
					brandHonorIndex = this.realIndex;
				}
			},
			a11y: {
				prevSlideMessage: 'Previous slide',
				nextSlideMessage: 'Next slide',
				firstSlideMessage: 'This is the first slide',
				lastSlideMessage: 'This is the last slide',
				paginationBulletMessage: 'Go to slide ' + (brandHonorIndex + 1),
				notificationClass: 'swiper-notification',
				containerMessage: 'This is a swiper',
				containerRoleDescriptionMessage: 'banner', //aria-role-description
				itemRoleDescriptionMessage: 'slider'
			}
		});

		// 发展历程
		$('.brand-progress-listItem').on('click', function() {
			$('.brand-progress-listItemIcon').attr('src', 'imgs/30-30.png');
			$(this).find('.brand-progress-listItemIcon').attr('src', 'imgs/45-45.png');
		});
	});
})(window, document);