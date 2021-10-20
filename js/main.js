
window.onload = function () {
    let item = document.querySelector('.none')
    console.log(item)
    for (let i = 1; i <= 48; i++) {
        for (let j = 2; j <= 3; j++) {
            item.insertAdjacentHTML('beforeend', `<div className="img_warp object-fit " data-fancybox="girl-${i}" data-src="img/girls/big/${i}-${j}.jpg"></div>`)
        }
    }
};

onscroll = function(){
	var scrollHeight = Math.max(
		document.body.scrollHeight, document.documentElement.scrollHeight,
		document.body.offsetHeight, document.documentElement.offsetHeight,
		document.body.clientHeight, document.documentElement.clientHeight
	);

	if(window.scrollY+1 >= scrollHeight - innerHeight) ym(85778482, 'reachGoal', 'user-footer');
};


