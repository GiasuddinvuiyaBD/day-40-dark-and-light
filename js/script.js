'use strict';


// Data : 16/8/2022
// Time : 11:52 am 

const moonIconElm = document.querySelector('.moon_and_sun_icon');
const sunIconElm = document.querySelector('.sun_and_moon_icon');
const mainBodyElm = document.querySelector('#main-body');
let liElm = document.querySelectorAll('.bgColorChange');

sunIconElm.style.display = 'none'

moonIconElm.addEventListener('click',(evt) => 
{
	evt.preventDefault();
	moonIconElm.style.display = 'none';
	sunIconElm.style.display = '';
	// after cliking moon icon color will be black
	mainBodyElm.style.backgroundColor = 'black';
	/*
		// header section items color changing
		liElm.style.backgroundColor = 'white';
		// left side bar heading stat here
		leftSideBarH2Elm.style.color = '#fff';
	*/

	// header section border start here
	document.querySelector('.header-section').style.borderBottom = '1px solid #414040';

	// li tag color change
	document.querySelector('.bgColorChange1').style.color = 'white';
	document.querySelector('.bgColorChange2').style.color = 'white';
	document.querySelector('.bgColorChange3').style.color = 'white';
	document.querySelector('.bgColorChange4').style.color = 'white';
	document.querySelector('.bgColorChange5').style.color = 'white';
	document.querySelector('.bgColorChange6').style.color = 'white';
	document.querySelector('.bgColorChange7').style.color = 'white';

	document.querySelector('.left-side-bar h2').style.color = 'white';
	document.querySelector('.left-side-bar p').style.color = 'white';

	document.querySelector('.left-side-bar button').style.backgroundColor = 'green';
	document.querySelector('.left-side-bar button').style.color = 'white';

	// footer icon start here
	document.querySelector('.footerIcon1').style.color = 'white'
	document.querySelector('.footerIcon2').style.color = 'white'
	document.querySelector('.footerIcon3').style.color = 'white';
	
})


sunIconElm.addEventListener('click',(evt) => 
{
	evt.preventDefault();
	sunIconElm.style.display = 'none';
	moonIconElm.style.display = '';
	// after cliking sun icon color will be white
	mainBodyElm.style.backgroundColor = '#e8eded';

	// li tag color change
	document.querySelector('.bgColorChange1').style.color = '#546e7a';
	document.querySelector('.bgColorChange2').style.color = '#546e7a';
	document.querySelector('.bgColorChange3').style.color = '#546e7a';
	document.querySelector('.bgColorChange4').style.color = '#546e7a';
	document.querySelector('.bgColorChange5').style.color = '#546e7a';
	document.querySelector('.bgColorChange6').style.color = '#546e7a';
	document.querySelector('.bgColorChange7').style.color = '#546e7a';

	document.querySelector('.left-side-bar h2').style.color = 'black';
	document.querySelector('.left-side-bar p').style.color = 'black';

	document.querySelector('.left-side-bar button').style.backgroundColor = '#000';
	document.querySelector('.left-side-bar button').style.color = '#fff';

	// footer icon start here
	document.querySelector('.footerIcon1').style.color = 'black'
	document.querySelector('.footerIcon2').style.color = 'black'
	document.querySelector('.footerIcon3').style.color = 'black'

	// header section border start here
	document.querySelector('.header-section').style.borderBottom = '1px solid #c5bdbd'
	
})


/*
	margin: ;
    padding: 10px 20px;
    font-size: 18px;
    color: ;
    background: #000;
    border: 1px solid #000;
    border-radius: 4px;
    cursor: pointer;
*/
