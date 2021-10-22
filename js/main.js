
window.onload = function () {

    document.querySelector(".btn_open").addEventListener('click', function () {
        document.querySelector(".menu_list").classList.add('active');
    })

    for (const item of document.querySelectorAll(".menu_list .btn_close,.menu_list .menu_link")) {

        item.addEventListener('click', function (e) {
            document.querySelector(".menu_list").classList.remove('active');
        })
    }


    let item = document.querySelector('.none')
    for (let i = 1; i <= 48; i++) {
        for (let j = 2; j <= 3; j++) {
            item.insertAdjacentHTML('beforeend', `<div className="img_warp object-fit " data-fancybox="girl-${i}" data-src="img/girls/big/${i}-${j}.jpg"></div>`)
        }
    }
    map();


    for (let anchor of document.querySelectorAll('.menu_link')) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()
            const blockID = anchor.getAttribute('href')
            document.querySelector(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }


};

window.onresize = function () {
    map();
};

// window.addEventListener('scroll', function () {
//     window.pageYOffset > 10 ? document.querySelector('.menu_wrap').classList.add('scroll') : document.querySelector('.header').classList.remove('scroll');
// });

function map() {
    for (const item of document.querySelectorAll('iframe')) {
        item.style.height = item.offsetWidth + 'px';
    }
}



