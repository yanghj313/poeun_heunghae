function updateDateTime() {
	const now = new Date();

	const hours = String(now.getHours()).padStart(2, '0');
	const minutes = String(now.getMinutes()).padStart(2, '0');
	document.getElementById('hours').textContent = hours;
	document.getElementById('minutes').textContent = minutes;

	const year = now.getFullYear();
	const months = String(now.getMonth() + 1).padStart(2, '0');
	const days = String(now.getDate()).padStart(2, '0');
	const week = ['일', '월', '화', '수', '목', '금', '토'];
	const dayOfWeek = week[now.getDay()];

	const formattedDate = `${year}. ${months}. ${days}. ${dayOfWeek}요일`;
	document.getElementById('months').textContent = formattedDate;
}

$(document).ready(function () {
	updateDateTime();
	setInterval(updateDateTime, 1000);
});
