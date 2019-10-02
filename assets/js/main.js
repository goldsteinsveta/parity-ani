var w = $(window)
var body = $('body')
var cta = $('.cta')
var h1 = $('h1')

var svgBox = $('#svgBox')
var svg = $('#svg')
function resizeSvgBg() {
	// stretches and cteres svg and its container to cover viewport
	var x
	if (w.width() > w.height()) { x = w.width()}
	else 						{ x = w.height() }
	svgBox.css('width',x + 'px')
	svgBox.css('height',x  + 'px')
	svg.attr('width',x)
	svg.attr('height',x)
}
w.on('resize', function(){
	resizeSvgBg()	
})
resizeSvgBg()


function svgState(x) {
	// css-related
	svgBox.attr('state', x)
}
function screenBlur(x) {
	// ublur image background (if any)
	$('.bg-screen').css('filter', 'blur(' + x + 'px)')
}


cta.on('mouseover', function(){
	screenBlur(0)
	svgState(2)
})
cta.on('mouseout', function(){
	screenBlur(10)
	if (body.hasClass('loading')) {
		return
	}
	svgState(1)
})

cta.on('click tap', function(){
	body.addClass('loading')
	loading()
})

function loading() {
	var loadingPhrases = [
		'heating the core',
		'sharing security',
		'testing interoperability',
		'issuing tokens',
		'rehersing auctions',
		'generalising consensus',
		'establishing democracy',
		'seizing blockchain landscape',
		'scaling finality',
		'pledging roadmap',
		'addressing existing stacks',
		'balancing governance',
		'destributing roles',
		'importing module crate',
		'updating runtime'

	]
	var i = 0

	function changePhrase() {
		h1.fadeOut(300, function() {
			h1.text(loadingPhrases[i])	
		})
		h1.fadeIn(300)

		i++
		if (i > loadingPhrases + 1) {
			i = 0
		}	
	}
	changePhrase()
	setInterval(changePhrase, 3000)
}
