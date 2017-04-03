var buttons = document.getElementsByClassName('callBtn');



buttons[0].onmousedown = function (){
	buttons[0].style.backgroundColor = '#4f6f26';
}
buttons[0].onmouseup = function (){
	buttons[0].style.backgroundColor = '#db3534';
}

buttons[1].onmousedown = function (){
	buttons[1].style.backgroundColor = '#4f6f26';
}
buttons[1].onmouseup = function (){
	buttons[1].style.backgroundColor = '#db3534';
}

buttons[2].onmousedown = function (){
	buttons[2].style.backgroundColor = '#4f6f26';
}
buttons[2].onmouseup = function (){
	buttons[2].style.backgroundColor = '#db3534';
}


var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    });

