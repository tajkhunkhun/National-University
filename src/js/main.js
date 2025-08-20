document.addEventListener('DOMContentLoaded', () => {
	// Header scroll logic
	const header = document.querySelector('header')
	let lastScrollTop = 0
	let scrollThreshold = 100
	let isScrolling = false
	let scrollTimeout

	function handleScroll() {
		const currentScrollTop =
			window.pageYOffset || document.documentElement.scrollTop

		if (currentScrollTop > scrollThreshold) {
			if (currentScrollTop > lastScrollTop) {
				header.classList.add('active')
			} else if (currentScrollTop < lastScrollTop - 10) {
				header.classList.remove('active')
			}
		} else {
			header.classList.remove('active')
		}

		lastScrollTop = currentScrollTop
	}

	let ticking = false
	function requestTick() {
		if (!ticking) {
			requestAnimationFrame(() => {
				handleScroll()
				ticking = false
			})
			ticking = true
		}
	}

	window.addEventListener('scroll', requestTick, { passive: true })

	// Swiper initialization
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
