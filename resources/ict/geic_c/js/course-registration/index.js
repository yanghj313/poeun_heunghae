$(document).ready(function () {
	const currentYear = new Date().getFullYear();
	const startYear = currentYear - 100;

	const $year = $('#year');
	const $month = $('#month');
	const $day = $('#day');

	for (let y = currentYear; y >= startYear; y--) {
		$year.append(new Option(y, y));
	}

	for (let m = 1; m <= 12; m++) {
		$month.append(new Option(m, m));
	}

	const populateDays = (year, month) => {
		const daysInMonth = new Date(year, month, 0).getDate();
		$day.empty().append(Array.from({ length: daysInMonth }, (_, i) => new Option(i + 1, i + 1)));
	};

	populateDays(currentYear, 1);

	$year.add($month).change(() => {
		const selectedYear = $year.val();
		const selectedMonth = $month.val();
		populateDays(selectedYear, selectedMonth);
	});
});

$(document).ready(function () {
	$('.gender-wrapper .selected-btn, .gender-wrapper .unselected-btn').click(function () {
		const $selectedBtn = $(this);
		const $otherBtn = $selectedBtn.hasClass('selected-btn') ? $('.unselected-btn') : $('.selected-btn');

		$selectedBtn.addClass('selected-btn').removeClass('unselected-btn');
		$otherBtn.addClass('unselected-btn').removeClass('selected-btn');

		console.log('selected:', $selectedBtn.text());
	});
});

$(document).ready(function () {
	$('input[type="text"]').on('input', function () {
		this.value = this.value.replace(/[^0-9]/g, '');
	});

	$('#part1').on('input', function () {
		if ($(this).val().length === 3) {
			$('#part2').focus();
		}
	});

	$('#part2').on('input', function () {
		if ($(this).val().length === 4) {
			$('#part3').focus();
		}
	});

	$('#part3').on('input', function () {
		if ($(this).val().length === 4) {
			console.log('Phone number input completed');
		}
	});
});

$(document).ready(function () {
	$('#submitBtn').click(function () {
		const consentValue = $('input[name="consent"]:checked').val();

		if (consentValue) {
			alert(`수신 동의 여부: ${consentValue === 'agree' ? '동의' : '미동의'}`);
		} else {
			alert('수신 동의 여부를 선택해주세요.');
		}
	});
});

$(document).ready(function () {
	$('#submitBtn').click(function () {
		const consentValue = $('input[name="consent"]:checked').val();
		const photoConsentValue = $('input[name="photoConsent"]:checked').val();

		if (consentValue && photoConsentValue) {
			alert(`사진촬영 동의 여부: ${consentValue === 'agree' ? '동의' : '미동의'}\n사진촬영 동의 여부: ${photoConsentValue === 'agree' ? '동의' : '미동의'}`);
		} else {
			alert('사진촬영 동의 여부를 선택해주세요.');
		}
	});
});
