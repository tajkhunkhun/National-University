document.addEventListener('DOMContentLoaded', () => {
	new Swiper('#success-stories-slider', {
		direction: 'horizontal',
		slidesPerView: 'auto',
		freeMode: true,
		speed: 400,
		spaceBetween: 25,
		navigation: {
			nextEl: '.swiper-custom-next',
			prevEl: '.swiper-custom-prev',
		},
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true,
			snapOnRelease: true,
		},
	})
})
