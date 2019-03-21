var pew_id = 'UC-lHJZR3Gqxm24_Vd_AJ5Yw';
var tser_id = 'UCq-Fj5jknLsUf-MWSy4_brA';
var tser_subs, pewds_subs;
var tser_subs_format, pewds_subs_format;
var diff;
var interval = 100;
var darkmode = localStorage.getItem('darkmode');

// request permission on page load
document.addEventListener('DOMContentLoaded', function() {
	if (!Notification) {
		return;
	}

	if (Notification.permission !== 'granted') Notification.requestPermission();
});

function notifyMe() {
	if (Notification.permission !== 'granted') Notification.requestPermission();
	else {
		var notification = new Notification('Bro update', {
			icon: 'brofist.png',
			body: 'Subgap update! \nThe subgap is now: ' + diff
		});
		/*
		notification.onclick = function() {
			window.open('http://stackoverflow.com/a/13328397/1269037');
			
		};*/
	}
}
$('.copy').click(function() {
	location.href = 'https://github.com/filiptronicek';
});
$('.toggledarkmode').click(function() {
	/*
	if (!darkmode) {
		localStorage.setItem('darkmode', 'true');
	} else {
		if (localStorage.darkmode == 'true') {
			$('body').removeClass('dark');
			localStorage.darkmode == 'false';
		} else {
			$('body').addClass('dark');
			localStorage.darkmode == 'true';
		}
    }
    */
	$('body').toggleClass('dark');
});

$(document).ready(getSubs);
$(document).ready(function() {
	setTimeout(notifyMe, 1000);
	Popup();
});

function getSubs() {
	$.get(
		'https://www.googleapis.com/youtube/v3/channels?',
		{
			part: 'statistics',
			id: pew_id,
			fields: 'items/statistics/subscriberCount',
			key: 'AIzaSyCagE4v2NKU9NNd4W692_gZ3CWpdWJ05rc'
		},
		function(data) {
			console.log('Our lord: ' + data.items[0].statistics.subscriberCount);
			pewds_subs = data.items[0].statistics.subscriberCount;
			pewds_subs_format = Number(pewds_subs.toLocaleString());
			$('.pew').html(pewds_subs_format);

			$.get(
				'https://www.googleapis.com/youtube/v3/channels?',
				{
					part: 'statistics',
					id: tser_id,
					fields: 'items/statistics/subscriberCount',
					key: 'AIzaSyCagE4v2NKU9NNd4W692_gZ3CWpdWJ05rc'
				},
				function(data) {
					console.log('T-gay: ' + data.items[0].statistics.subscriberCount);
					tser_subs = data.items[0].statistics.subscriberCount;
					tser_subs_format = Number(tser_subs.toLocaleString());
					diff = pewds_subs - tser_subs;
					console.warn(diff);
					$('#gap').html(diff.toLocaleString());
					$('.tse').html(Number(tser_subs.toLocaleString()));
					if (diff < 0) {
						$('.bar-one').show();
						$('.fkd').show();

						$('.bar').css('width', Math.floor(diff / 600 * -1) + '%');
					} else {
						$('.bar-one').hide();
						$('fkd').hide();
					}
				}
			);
		}
	);
}
setInterval(() => {
	getSubs();
}, interval);

setInterval(() => {
	notifyMe();
}, 800000);

function Popup() {
	if (localStorage.getItem('popState') != 'shown') {
		$('.tap-target').tapTarget();
		localStorage.setItem('popState', 'shown');
	}

	$j('#popup-close, #popup').click(function() // You are clicking the close button
	{
		$j('#popup').fadeOut(); // Now the pop up is hiden.
	});
}
document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.tap-target');
	var instances = M.TapTarget.init(elems, options);
});
(function($) {
	$.fn.progress = function() {
		var percent = this.data('percent');
		this.css('width', percent + '%');
	};
})(jQuery);

$(document).ready(function() {
	$('.bar-one .bar').progress();
});
