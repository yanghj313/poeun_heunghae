function updateDateTime() {
	const now = new Date();

	const hours = String(now.getHours()).padStart(2, '0');
	const minutes = String(now.getMinutes()).padStart(2, '0');
	document.getElementById('hours').textContent = hours;
	document.getElementById('minutes').textContent = minutes;

	const months = now.getMonth() + 1;
	const days = now.getDate();
	const week = ['일', '월', '화', '수', '목', '금', '토'];
	const dayOfWeek = week[now.getDay()];

	document.getElementById('months').textContent = months;
	document.getElementById('days').textContent = days;
	document.getElementById('dayofweeks').textContent = `${dayOfWeek}요일`;
}

$(document).ready(function () {
	updateDateTime();
	setInterval(updateDateTime, 1000);
});
