$(document).ready(function () {
	function toggleActiveMenu(clickedItem) {
		$('.navigation li').each(function () {
			$(this).find('.active-menu').removeClass('active-menu').addClass('menu');
			$(this).find('span').removeClass('active-caption');

			$(this)
				.find('img.item')
				.attr('src', function (index, src) {
					return src.includes('active_') ? src.replace('active_', '') : src;
				});
		});

		clickedItem.find('.menu').removeClass('menu').addClass('active-menu');
		clickedItem.find('span').addClass('active-caption');

		clickedItem.find('img.item').attr('src', function (index, src) {
			return !src.includes('active_') ? src.replace(/^(.*\/)(.*)$/, '$1active_$2') : src;
		});
	}

	$('.navigation li').on('click', function () {
		toggleActiveMenu($(this));
	});
});
