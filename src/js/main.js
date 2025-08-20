document.addEventListener('DOMContentLoaded', () => {
	// Mobile menu
	const mobileMenu = document.querySelector('.mobile-menu')
	const mobileMenuButton = document.querySelector('.mobile-menu-button')
	const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay')

	mobileMenuButton.addEventListener('click', () => {
		const isActive = mobileMenu.classList.contains('active-menu')
		const mobileMenuHeight = mobileMenu.scrollHeight
		console.log(mobileMenuHeight)
		if (!isActive) {
			mobileMenu.classList.add('active-menu')
			mobileMenuButton.classList.add('active-menu')
			mobileMenu.style.maxHeight = `${mobileMenuHeight}px`
			mobileMenuOverlay.classList.add('active-menu')
		} else {
			mobileMenu.classList.remove('active-menu')
			mobileMenuButton.classList.remove('active-menu')
			mobileMenu.style.maxHeight = '0px'
			mobileMenuOverlay.classList.remove('active-menu')
		}
	})

	document.addEventListener('click', e => {
		if (
			!mobileMenu.contains(e.target) &&
			!mobileMenuButton.contains(e.target)
		) {
			mobileMenu.classList.remove('active-menu')
			mobileMenuButton.classList.remove('active-menu')
			mobileMenu.style.maxHeight = '0px'
			mobileMenuOverlay.classList.remove('active-menu')
		}
	})

	// Header scroll logic
	const header = document.querySelector('header')
	let lastScrollTop = 0
	let scrollThreshold = 100
	let isActive = false
	let minScrollDistance = 5

	function handleScroll() {
		const currentScrollTop =
			window.pageYOffset || document.documentElement.scrollTop

		const scrollDistance = Math.abs(currentScrollTop - lastScrollTop)

		if (currentScrollTop > scrollThreshold) {
			if (
				currentScrollTop > lastScrollTop &&
				scrollDistance > minScrollDistance &&
				!isActive
			) {
				header.classList.add('active')
				isActive = true
			} else if (
				currentScrollTop < lastScrollTop &&
				scrollDistance > minScrollDistance &&
				isActive
			) {
				header.classList.remove('active')
				isActive = false
			}
		} else {
			if (isActive) {
				header.classList.remove('active')
				isActive = false
			}
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
