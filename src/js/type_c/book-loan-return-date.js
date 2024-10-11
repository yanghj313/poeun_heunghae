$(document).ready(function () {
	var start = new Date();
	start.setDate(start.getDate());
	start.setHours(0, 0, 0, 0);

	var now = new Date();
	var diff = (now.getTime() - start.getTime()) / 1000;

	var clock = $('#clock1').FlipClock(diff, {
		clockFace: 'HourlyCounter',
		countdown: false,
		showSeconds: true,
	});
});
