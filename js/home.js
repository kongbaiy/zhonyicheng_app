(function(win, doc) {
    var bannerIndex = 0;
    var banner = new Swiper('.banner', {
		autoplayDisableOnInteraction: false,
		autoplay: 5000,
		loop: true,
		pagination: {
			el: '.banner .swiper-pagination',
			clickable: true,
		},
        on: {
			slideChangeTransitionEnd() {
				bannerIndex = this.realIndex;
			}
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

	// 动态
	var dynamicIndex = 0;
    var dynamic = new Swiper('.dynamic-swiper', {
		direction: 'vertical',
		autoplayDisableOnInteraction: false,
		autoplay: true,
		loop: true,
        on: {
			slideChangeTransitionEnd() {
				dynamicIndex = this.realIndex;
			}
		},
		a11y: {
			prevSlideMessage: 'Previous slide',
			nextSlideMessage: 'Next slide',
			firstSlideMessage: 'This is the first slide',
			lastSlideMessage: 'This is the last slide',
			paginationBulletMessage: 'Go to slide ' + (dynamicIndex + 1),
			notificationClass: 'swiper-notification',
			containerMessage: 'This is a swiper',
			containerRoleDescriptionMessage: 'banner', //aria-role-description
			itemRoleDescriptionMessage: 'slider',
		}
	});
	
	// 公司业务
	var companyBusinessIndex = 0;
    var companyBusiness = new Swiper('.company-business-swiper', {
		autoplayDisableOnInteraction: false,
		autoplay: true,
		loop: true,
		pagination: {
			el: '.company-business-swiper .swiper-pagination',
			clickable: true,
		},
        on: {
			slideChangeTransitionEnd() {
				companyBusinessIndex = this.realIndex;
			}
		},
		a11y: {
			prevSlideMessage: 'Previous slide',
			nextSlideMessage: 'Next slide',
			firstSlideMessage: 'This is the first slide',
			lastSlideMessage: 'This is the last slide',
			paginationBulletMessage: 'Go to slide ' + (companyBusinessIndex + 1),
			notificationClass: 'swiper-notification',
			containerMessage: 'This is a swiper',
			containerRoleDescriptionMessage: 'banner', //aria-role-description
			itemRoleDescriptionMessage: 'slider',
		}
	});
	
})(window, document);