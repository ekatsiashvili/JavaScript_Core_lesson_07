'use strict'

function fillLiWithText() {
	let elements = document.querySelectorAll('.text > li');

	for (let i = 0; i < elements.length; i++) {
		let currentElement = elements[i];
		currentElement.innerHTML = 'HELLO WORLD! ' + [i+1];
	}

	let div = document.getElementById('message');
	div.innerHTML = 'Number of elements "li" on this page = ' + elements.length;

}

function changeToRed() {
	let elementsList = document.querySelectorAll('a');

	for (let i = 0; i < elementsList.length; i++) {
		let currentElement = elementsList[i];
		if (currentElement.href.includes('http://')
				&& (!currentElement.href.includes('http://internal'))
				|| (currentElement.href.includes('ftp://'))) {
			currentElement.className = 'external-red';
		}
	}
}