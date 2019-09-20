var pew_id = 'UC-lHJZR3Gqxm24_Vd_AJ5Yw';
var tser_id = 'UCq-Fj5jknLsUf-MWSy4_brA';
var ids = {
	pewdiepie: 'UC-lHJZR3Gqxm24_Vd_AJ5Yw',
	tseries: 'UCq-Fj5jknLsUf-MWSy4_brA'
};
var idray = [ 'UC-lHJZR3Gqxm24_Vd_AJ5Yw', 'UCq-Fj5jknLsUf-MWSy4_brA' ];
var tser_subs, pewds_subs;
var tser_subs_format, pewds_subs_format;
var diff;
var interval = 20000;
var darkmode = localStorage.getItem('darkmode');
var thisavatar;

var apiKey = [
	'AIzaSyAYU65uIHdx9rvCF4WpJMELo6CALYdSmYg',
	'AIzaSyDQ5oHZpkfYJUM6qwUHuqAPDh4bJl2V4FM',
	'AIzaSyB00Ohd-6cKEpCr3zAt5iXlnAMIs-q6elA',
	'AIzaSyC-v1mTIVLVIzYS-aXvohw8rD1dxmcnzVI',
	'AIzaSyAhAnh_QnW8x2O65Y2XUZvvlEnTkpnSLHw',
	'AIzaSyBIByFR0gGjQx8J6YUIRQ07df8imgOqGYg',
	'AIzaSyBVUA2oJgY61wMTCt-bPdem3JgrZuCFmo8'
];
$('.github-dark').hide();

var focus = true;
window.onblur = function() {
	focus = false;
};
window.onfocus = function() {
	focus = true;
};
document.onblur = window.onblur;
document.focus = window.focus;

// request permission on page load

/*
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
			body: 'Subgap update!\nThe subgap is now: ' + diff
		});
	}
}
*/
$('.copy').click(function() {
	location.href = 'https://filiptronicek.github.io';
});

$(document).ready(getSubs);
$(document).ready(function() {
	setTimeout(notifyMe, 1000);
});

function getSubs() {
	console.log('Sending request...');
	$.get(
		'https://www.googleapis.com/youtube/v3/channels?',
		{
			part: 'statistics',
			id: pew_id,
			fields: 'items/statistics/subscriberCount',
			//key: 'AIzaSyCagE4v2NKU9NNd4W692_gZ3CWpdWJ05rc'
			key: apiKey[Math.floor(Math.random() * apiKey.length)]
		},
		function(data) {
			console.log('Our lord: ' + data.items[0].statistics.subscriberCount);
			console.log(data.items[0].statistics);
			pewds_subs = data.items[0].statistics.subscriberCount;
			$('.pew').html(pewds_subs / 1000000+"M");

			$.get(
				'https://www.googleapis.com/youtube/v3/channels?',
				{
					part: 'statistics',
					id: tser_id,
					fields: 'items/statistics/subscriberCount',
					key: apiKey[Math.floor(Math.random() * apiKey.length)]
				},
				function(data) {
					console.log(data);
					console.log('T-gay: ' + data.items[0].statistics.subscriberCount);
					tser_subs = data.items[0].statistics.subscriberCount;
					diff = Math.abs(pewds_subs - tser_subs);
					console.warn(diff);
					$('#gap').html(diff.toLocaleString());
					$('.tse').html(tser_subs / 1000000 + "M");
					if (diff < 0) {
						if (diff < -30000) {
							//$('body').removeClass('alert');
						} else {
							//$('body').addClass('alert');
						}
						$('.bar-one').show();
						$('.fkd').show();
						//$('body').css('background-color', '#de003d');
						//$('body').addClass('alert');

						$('.bar').css('width', Math.floor(diff / 600 * -1) + '%');
					} else {
						//$('body').removeClass('alert');

						$('.bar-one').hide();
						$('.fkd').hide();
					}
				}
			);
		}
	);
}
setInterval(getSubs, interval);

setInterval(() => {
	notifyMe();
}, 800000);

(function($) {
	$.fn.progress = function() {
		var percent = this.data('percent');
		this.css('width', percent + '%');
	};
})(jQuery);

$(document).ready(function() {
	$('.bar-one .bar').progress();
});

$(document).ready(function() {
	$('.tooltipped').tooltip();
});
(function() {
	// Theme switch
	var themeSwitch = document.getElementById('themeSwitch');
	if (themeSwitch) {
		initTheme(); // if user has already selected a specific theme -> apply it
		themeSwitch.addEventListener('change', function(event) {
			resetTheme(); // update color theme
		});

		function initTheme() {
			var darkThemeSelected =
				localStorage.getItem('themeSwitch') !== null && localStorage.getItem('themeSwitch') === 'dark';
			// update checkbox
			themeSwitch.checked = darkThemeSelected;
			// update body data-theme attribute
			darkThemeSelected
				? document.body.setAttribute('data-theme', 'dark')
				: document.body.removeAttribute('data-theme');
		}

		function resetTheme() {
			if (themeSwitch.checked) {
				// dark theme has been selected
				document.body.setAttribute('data-theme', 'dark');
				localStorage.setItem('themeSwitch', 'dark');
				$('.github-dark').fadeIn(500);
				$('.github-light').fadeOut(500);
			} else {
				document.body.removeAttribute('data-theme');
				localStorage.removeItem('themeSwitch');
				$('.github-light').fadeIn(500);
				$('.github-dark').fadeOut(500);
			}
		}
	}

	// Main Header component JS
	var mainHeader = document.getElementsByClassName('js-main-header')[0];
	if (mainHeader) {
		var trigger = mainHeader.getElementsByClassName('js-main-header__nav-trigger')[0],
			nav = mainHeader.getElementsByClassName('js-main-header__nav')[0];
		//detect click on nav trigger
		trigger.addEventListener('click', function(event) {
			event.preventDefault();
			var ariaExpanded = !Util.hasClass(nav, 'main-header__nav--is-visible');
			//show nav and update button aria value
			Util.toggleClass(nav, 'main-header__nav--is-visible', ariaExpanded);
			trigger.setAttribute('aria-expanded', ariaExpanded);
			if (ariaExpanded) {
				//opening menu -> move focus to first element inside nav
				nav.querySelectorAll('[href], input:not([disabled]), button:not([disabled])')[0].focus();
			}
		});
	}
})();
// Utility function
function Util() {}

/* 
	class manipulation functions
*/
Util.hasClass = function(el, className) {
	if (el.classList) return el.classList.contains(className);
	else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
};

Util.addClass = function(el, className) {
	var classList = className.split(' ');
	if (el.classList) el.classList.add(classList[0]);
	else if (!Util.hasClass(el, classList[0])) el.className += ' ' + classList[0];
	if (classList.length > 1) Util.addClass(el, classList.slice(1).join(' '));
};

Util.removeClass = function(el, className) {
	var classList = className.split(' ');
	if (el.classList) el.classList.remove(classList[0]);
	else if (Util.hasClass(el, classList[0])) {
		var reg = new RegExp('(\\s|^)' + classList[0] + '(\\s|$)');
		el.className = el.className.replace(reg, ' ');
	}
	if (classList.length > 1) Util.removeClass(el, classList.slice(1).join(' '));
};

Util.toggleClass = function(el, className, bool) {
	if (bool) Util.addClass(el, className);
	else Util.removeClass(el, className);
};

Util.setAttributes = function(el, attrs) {
	for (var key in attrs) {
		el.setAttribute(key, attrs[key]);
	}
};

/* 
  DOM manipulation
*/
Util.getChildrenByClassName = function(el, className) {
	var children = el.children,
		childrenByClass = [];
	for (var i = 0; i < el.children.length; i++) {
		if (Util.hasClass(el.children[i], className)) childrenByClass.push(el.children[i]);
	}
	return childrenByClass;
};

/* 
	Animate height of an element
*/
Util.setHeight = function(start, to, element, duration, cb) {
	var change = to - start,
		currentTime = null;

	var animateHeight = function(timestamp) {
		if (!currentTime) currentTime = timestamp;
		var progress = timestamp - currentTime;
		var val = parseInt(progress / duration * change + start);
		element.setAttribute('style', 'height:' + val + 'px;');
		if (progress < duration) {
			window.requestAnimationFrame(animateHeight);
		} else {
			cb();
		}
	};

	//set the height of the element before starting animation -> fix bug on Safari
	element.setAttribute('style', 'height:' + start + 'px;');
	window.requestAnimationFrame(animateHeight);
};

/* 
	Smooth Scroll
*/

Util.scrollTo = function(final, duration, cb) {
	var start = window.scrollY || document.documentElement.scrollTop,
		currentTime = null;

	var animateScroll = function(timestamp) {
		if (!currentTime) currentTime = timestamp;
		var progress = timestamp - currentTime;
		if (progress > duration) progress = duration;
		var val = Math.easeInOutQuad(progress, start, final - start, duration);
		window.scrollTo(0, val);
		if (progress < duration) {
			window.requestAnimationFrame(animateScroll);
		} else {
			cb && cb();
		}
	};

	window.requestAnimationFrame(animateScroll);
};

/* 
  Focus utility classes
*/

//Move focus to an element
Util.moveFocus = function(element) {
	if (!element) element = document.getElementsByTagName('body')[0];
	element.focus();
	if (document.activeElement !== element) {
		element.setAttribute('tabindex', '-1');
		element.focus();
	}
};

/* 
  Misc
*/

Util.getIndexInArray = function(array, el) {
	return Array.prototype.indexOf.call(array, el);
};

Util.cssSupports = function(property, value) {
	if ('CSS' in window) {
		return CSS.supports(property, value);
	} else {
		var jsProperty = property.replace(/-([a-z])/g, function(g) {
			return g[1].toUpperCase();
		});
		return jsProperty in document.body.style;
	}
};

/* 
	Polyfills
*/
//Closest() method
if (!Element.prototype.matches) {
	Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
	Element.prototype.closest = function(s) {
		var el = this;
		if (!document.documentElement.contains(el)) return null;
		do {
			if (el.matches(s)) return el;
			el = el.parentElement || el.parentNode;
		} while (el !== null && el.nodeType === 1);
		return null;
	};
}

//Custom Event() constructor
if (typeof window.CustomEvent !== 'function') {
	function CustomEvent(event, params) {
		params = params || { bubbles: false, cancelable: false, detail: undefined };
		var evt = document.createEvent('CustomEvent');
		evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
		return evt;
	}

	CustomEvent.prototype = window.Event.prototype;

	window.CustomEvent = CustomEvent;
}

/* 
	Animation curves
*/
Math.easeInOutQuad = function(t, b, c, d) {
	t /= d / 2;
	if (t < 1) return c / 2 * t * t + b;
	t--;
	return -c / 2 * (t * (t - 2) - 1) + b;
};

if ($('body').attr('data-theme')) {
	console.log('Data theme is ' + $('body').attr('data-theme'));
	$('.github-dark').fadeIn(500);
	$('.github-light').fadeOut(500);
}
