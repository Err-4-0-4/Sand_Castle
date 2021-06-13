// Js for the scrollbar

let progress = document.getElementById('pbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
	let progressHeight = (window.pageYOffset / totalHeight) * 100;
	progress.style.height = progressHeight + "%";
}



// Code for the parallax

let text = document.getElementById('text');
let mountains = document.getElementById('mountains');
let sky = document.getElementById('sky');
let tree = document.getElementById('tree');
let btn = document.getElementById('btn');
let sea = document.getElementById('sea');
let sand = document.getElementById('sand');	
let header = document.getElementById('header');	
let boat = document.getElementById('boat');
window.addEventListener('scroll', function(){
	let value = window.scrollY;

	text.style.top = 50 + value * -0.2 + '%';
    // mountains.style.top = value * 0.25 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    sky.style.top = value * -0.12 + 'px';
    header.style.top = value * 0.5 + 'px';
    boat.style.left = value * -0.8 + 'px';
})